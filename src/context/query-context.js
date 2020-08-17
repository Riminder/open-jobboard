import React from "react"

const QueryContext = React.createContext()

const QueryReducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { score: state.score + 1 }
    }
    case "reset": {
      return { score: 0 }
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`)
    }
  }
}
const ScoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(scoreReducer, {score:0})

  return (
    <ScoreContext.Provider value={{state, dispatch}}>
      {children}
    </ScoreContext.Provider>
  )
}

const useScore = () => useContext(ScoreContext)

export { ScoreProvider, useScore }
