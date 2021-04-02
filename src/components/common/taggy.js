import React from 'react'

// Define functional component. Destructure the props.
const Taggy = ({ text = '', spans = [], ents = []}) => {

    // Find the correct color of the given entity type. If the given entity is not found, set the color to grey.
    const findHue = (type) => {
        for (let e = 0; e < ents.length; e++) {
            if (ents[e].type === type) {
                return ents[e].color.h
            }
        }
        return 220
    }
    const findSat = (type) => {
        for (let e = 0; e < ents.length; e++) {
            if (ents[e].type === type) {
                return ents[e].color.s
            }
        }
        return 220
    }
    const findBri = (type) => {
        for (let e = 0; e < ents.length; e++) {
            if (ents[e].type === type) {
                return ents[e].color.l
            }
        }
        return 220
    }

    const findAlphaOpacity = (type) => {
        for (let e = 0; e < ents.length; e++) {
            if (ents[e].type === type) {
                return ents[e].color.a
            }
        }
        return 0.2
    }

    // Initialize an empty array that will hold the text and entities
    let jsx = []

    // METHOD 1 - STRING
    if (typeof text === 'string') {
        // Initialize an empty array. The contents of 'elements' will eventually get pushed to the 'jsx' array, and will be converted to jsx markup in the process.
        let elements = []
        // Keep track of location in the string of text
        let offset = 0
        // Loop through the spans, using the span data to construct the 'elements' array
        spans.forEach(({ type, start, end }) => {
            // Create a string of text that does not contain any entities
            const fragment = text.slice(offset, start)
            // Create an entity
            const entity = text.slice(start, end)
            // Push the both of them to the elements array
            elements.push(fragment)
            elements.push({
                token: entity,
                type: type.toLowerCase()
            })
            // Update our position within the string of text
            offset = end
        })
        // After pushing all of the entities to the 'elements' array, push the remaining text to the 'elements' array. Elements should now consist of strings and objects/entities.
        elements.push(text.slice(offset, text.length))
        // Filter out unnecessary spaces
        elements = elements.filter(val => val !== ' ')
        // Loop through elements array looking for multi-word entities.
        for (let e = 0; e < elements.length; e++) {
            // Check if we've stopped at an entity
            if (elements[e].token) {
                // Examine the consecutive entities, if any.
                for (let i = e + 1; i < elements.length; i++) {
                    // Combine consecutive entities of the same type into one entity. Then, mark the duplicates as 'false'.
                    if (typeof elements[i] !== 'string' && elements[i].type === elements[e].type) {
                        elements[e].token += ' ' + elements[i].token
                        elements[i] = false
                    }
                    // Stop the loop when we've run out of consecutive entities
                    if (typeof elements[i] === 'string') {
                        break
                    }
                }
            }
        }
        // Filter out the consecutive entities that were marked as duplicates
        elements = elements.filter(val => !!val)
        // Loop through our 'elements' array. Push strings directly to the 'jsx' array. Convert entity objects to jsx markup, then push to the 'jsx' array.
        elements.forEach(t => {
            if (typeof t === 'string') {
                jsx.push(t)
            }
            else {
                jsx.push(
                    <mark
                        style={{
                            padding: '0.125rem 0.25rem',
                            lineHeight: '1',
                            display: 'inline-block',
                            borderRadius: '0.25em',
                            background: `hsla(
                                ${findHue(t.type)},
                                ${findSat(t.type)}%,
                                ${findBri(t.type)+35}%,
                                ${findAlphaOpacity(t.type)}
                            )`,
                            color: `hsl(
                                ${findHue(t.type)},
                                ${findSat(t.type)}%,
                                ${findBri(t.type)-15}%
                            )`
                        }}
                    >
                        {t.token}
                        <span
                            style={{
                                boxSizing: 'border-box',
                                fontSize: '0.65em',
                                lineHeight: '1rem',
                                paddingLeft: '0.125rem',
                                paddingRight: '0.125rem',
                                borderRadius: '0.25em',
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                margin: '0px 0px 0 0.25rem',
                                fontWeight: '600',
                                background: `hsl(
                                    ${findHue(t.type)},
                                    ${findSat(t.type)}%,
                                    ${findBri(t.type)}%
                                )`,
                                color: `white`,
                            }}
                        >
                            {t.type}
                        </span>
                    </mark>
                )
            }
        })
    }

    // METHOD 2 - TOKENS
    if (Array.isArray(text)) {
        // Rename 'text' to 'tokens' for clarity
        let tokens = text
        // Loop through the 'spans' array. Use the span data to update our 'tokens' array with entities
        for (let s = 0; s < spans.length; s++) {
            tokens[spans[s].index] = {
                token: tokens[spans[s].index],
                type: spans[s].type.toLowerCase()
            }
        }
        // Loop through the tokens array, looking for multi-word entities
        for (let t = 0; t < tokens.length; t++) {
            // Check if we've stopped at an entity
            if (tokens[t].token) {
                // Examine the consecutive entities, if any.
                for (let i = t + 1; i < tokens.length; i++) {
                    // Combine consecutive entities of the same type into one entity. Then, mark the duplicates as 'false'.
                    if (typeof tokens[i] !== 'string' && tokens[i].type === tokens[t].type) {
                        tokens[t].token += ' ' + tokens[i].token
                        tokens[i] = false
                    }
                    // Stop the loop when we've run out of consecutive entities
                    if (typeof tokens[i] === 'string') {
                        break
                    }
                }
            }
        }
        // Filter out the consecutive entities that were marked as duplicates
        tokens = tokens.filter(val => !!val)
        // Add a space to the end of each string/non-entity
        let tokensWithSpaces = tokens.map(t => {
            if (typeof t === 'string') {
                return `${t} `
            }
            return t
        })
        // Loop through our 'tokens' array. Push strings directly to the 'jsx' array. Convert entity objects to jsx markup, then push to the 'jsx' array.
        tokensWithSpaces.forEach(t => {
            if (typeof t === 'string') {
                jsx.push(t)
            }
            else {
                jsx.push(
                    <mark
                        style={{
                            padding: '0.125rem 0.25rem',
                            lineHeight: '1',
                            display: 'inline-block',
                            borderRadius: '0.25em',
                            border: '1px solid',
                            background: `hsla(
                                ${findHue(t.type)},
                                ${findSat(t.type)}%,
                                ${findBri(t.type)+35}%,
                                ${findAlphaOpacity(t.type)}
                            )`,
                            color: `hsl(
                                ${findHue(t.type)},
                                ${findSat(t.type)}%,
                                ${findBri(t.type)-15}%
                            )`
                        }}
                    >
                        {t.token}
                        <span
                            style={{
                                boxSizing: 'border-box',
                                fontSize: '0.65em',
                                lineHeight: '1rem',
                                paddingLeft: '0.125rem',
                                paddingRight: '0.125rem',
                                borderRadius: '0.25em',
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                margin: '0px 0px 0 0.25rem',
                                fontWeight: '600',
                                color: `white`,
                                background: `hsl(
                                    ${findHue(t.type)},
                                    ${findSat(t.type)}%,
                                    ${findBri(t.type)}%
                                )`
                            }}
                        >
                            {t.type}
                        </span>
                    </mark>
                )
            }
        })
    }

    // Return the markup
    return (
        <div>
            {jsx.map((j, i) => (
                <span key={i}>{j}</span>
            ))}
        </div>
    )

}

export default Taggy
