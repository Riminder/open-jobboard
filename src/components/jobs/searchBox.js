import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Checkbox } from 'react-input-checkbox'
import 'react-input-checkbox/lib/react-input-checkbox.min.css'

import SearchLocationInput from './SearchLocationInput'

import styles from './searchBox.module.scss';

const SearchBox = (props) => {
  const [boardFilters, setBoardFilters] = useState({})
  const [location, setLocation] = useState(null)
  useEffect(() => {
    setBoardFilters(props.boardFilters)
  }, [props.boardFilters])

  useEffect(() => {
    if(location) {
      const newBoardFilters = {...boardFilters}
      if(newBoardFilters.hasOwnProperty('locations')) {
        newBoardFilters.locations.forEach(item => item.checked = false);
        newBoardFilters.locations.unshift({...location, checked: true});
      }
      setBoardFilters(newBoardFilters)
      props.fetchJobs(newBoardFilters)
    }
  }, [location])

  const inputSkillsRef = useRef(null);
  const inputLanguagesRef = useRef(null);
  const inputLocationsRef = useRef(null);
  const inputExperiencesRef = useRef(null);

  const handleCreatableKeyPress = (event) => {
    const value = event.target.value
    const name = event.target.name
    if (event.key === 'Enter') {
      const newBoardFilters = {...boardFilters}
      newBoardFilters[`${name}`].enabled.unshift(value)
      setBoardFilters(newBoardFilters)
      inputSkillsRef.current.value = null
      inputLanguagesRef.current.value = null
      props.fetchJobs(newBoardFilters)
    }
  }

  const deleteItem = (name, item) => {
    const newBoardFilters = {...boardFilters}
    newBoardFilters[`${name}`].enabled = newBoardFilters[`${name}`].enabled.filter(f => {
      return item !== f
    })
    newBoardFilters[`${name}`].disabled.unshift(item)
    setBoardFilters(newBoardFilters)
    props.fetchJobs(newBoardFilters)
  }

  const addItem = (name, item) => {
    const newBoardFilters = {...boardFilters}
    newBoardFilters[`${name}`].enabled.unshift(item)
    newBoardFilters[`${name}`].disabled = newBoardFilters[`${name}`].disabled.filter(f => {
      return item !== f
    })
    setBoardFilters(newBoardFilters)
    props.fetchJobs(newBoardFilters)
  }

  const onChangeSelected = (name, value, index) => {
    const newBoardFilters = {...boardFilters}
    if(name === 'locations') {
      newBoardFilters[`${name}`].forEach(item => item.checked = false)
    }
    newBoardFilters[`${name}`][index].checked = value;
    setBoardFilters(newBoardFilters)
    props.fetchJobs(newBoardFilters)
  }
  const handleChangeLocationInput = (location) => {
    setLocation(location)
  } 

  const handleCheckableKeyPress = (event) => {
    const value = event.target.value
    const name = event.target.name
    if (event.key === 'Enter') {
      const newBoardFilters = {...boardFilters}
      if (name === 'locations') {
        newBoardFilters[`${name}`].forEach(item => item.checked = false)
      } else {
        newBoardFilters[`${name}`].forEach(item => item.checked = false)
        newBoardFilters[`${name}`].unshift({text: value, checked: true})
      }
      setBoardFilters(newBoardFilters)
      props.fetchJobs(newBoardFilters)
      inputExperiencesRef.current.value = null
    }
  }
  return (
    <div className={styles.search}>
      <div className={`${styles.search__control} search-control`}>
        <div className={styles.label}>Lieu(x) désiré(s)</div>
        <SearchLocationInput
          changeLocation={location => handleChangeLocationInput(location)}
        />
        {boardFilters?.locations?.map((location, index) => {
          return (
            <Checkbox 
              key={`loc-${index}`}
              theme="fancy-checkbox"
              value={location.checked}
              onChange={() => onChangeSelected('locations', !location.checked, index)}
            >
              {location.text}
            </Checkbox>
          )
        })}
      </div>
      <div className={`${styles.search__control} search-control`}>
        <div className={styles.label}>Mes compétences</div>
        <input
          type="text"
          className={styles.input}
          placeholder="Ajouter une compétence"
          onKeyPress={event => handleCreatableKeyPress(event)}
          ref={inputSkillsRef}
          name="skills"
        />
        <div className={styles.creatables}>
          <ul className={styles.choices}>
            {
              boardFilters.skills?.enabled?.map((skill, index) => {
                return (
                  <li
                    key={`skill-${index}`}
                    className={styles.choice}
                    onClick={() => deleteItem('skills',skill)}
                  >
                    <span>{skill}</span>
                    <FontAwesomeIcon className="icon-right" icon={faTimes} />
                  </li>
                )
              })
            }
          </ul>
          <ul className={styles.choices}>
              {
                boardFilters?.skills?.disabled?.map((skill, index) => {
                  return (
                    <li
                      key={`skill-${index}`}
                      className={[styles.choice, styles.disabled].join(' ')}
                      onClick={() => addItem('skills',skill)}
                    >
                      {skill}
                      <FontAwesomeIcon className="icon-right" icon={faPlus} />
                    </li>
                  )
                })
              }
          </ul>
        </div>
      </div>
      <div className={`${styles.search__control} search-control`}>
        <div className={styles.label}>Métier(s) souhaité(s)</div>
        <input
          type="text"
          className={styles.input}
          placeholder="Ajouter un métier"
          onKeyPress={event => handleCheckableKeyPress(event)}
          name="jobs"
          ref={inputExperiencesRef}
        />
        {boardFilters?.jobs?.map((experience, index) => {
          return (
            <Checkbox
              key={`exp-${index}`}
              theme="fancy-checkbox"
              value={experience.checked}
              onChange={() => onChangeSelected('jobs', !experience.checked, index)}
            >
              {experience.text}
            </Checkbox>
          )
        })}
      </div>
      <div className={`${styles.search__control} search-control`}>
        <div className={styles.label}>Mes langues</div>
        <input
          type="text"
          className={styles.input}
          placeholder="Ajouter une langue"
          onKeyPress={event => handleCreatableKeyPress(event)}
          ref={inputLanguagesRef}
          name="languages"
        />
        <div className={styles.creatables}>
          <ul className={styles.choices}>
            {
              boardFilters.languages?.enabled?.map((language, index) => {
                return (
                  <li
                    key={`language-${index}`}
                    className={styles.choice}
                    onClick={() => deleteItem('languages', language)}
                  >
                    <span>{language}</span>
                    <FontAwesomeIcon className="icon-right" icon={faTimes} />
                  </li>
                )
              })
            }
          </ul>
          <ul className={styles.choices}>
            {
              boardFilters?.languages?.disabled?.map((language, index) => {
                return (
                  <li
                    key={`language-${index}`}
                    className={[styles.choice, styles.disabled].join(' ')}
                    onClick={() => addItem('languages', language)}
                  >
                    {language}
                    <FontAwesomeIcon className="icon-right" icon={faPlus} />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchBox;