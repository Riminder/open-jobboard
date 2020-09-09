export const loadDevTools = () =>
  process.env.NODE_ENV === "development" && window.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
