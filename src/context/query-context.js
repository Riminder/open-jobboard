import React from "react"

const QueryContext = React.createContext()

const QueryReducer = (state, action) => {
  switch (action.type) {
    case "SEND": {
      return { query: state.query }
    }
    case "GET": {
      return { query:  {} }
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`)
    }
  }
}
const QueryProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(scoreReducer, {query:0})

  return (
    <ScoreContext.Provider value={{state, dispatch}}>
      {children}
    </ScoreContext.Provider>
  )
}

const useQuery = () => useContext(ScoreContext)

export { QueryProvider, useQuery }
