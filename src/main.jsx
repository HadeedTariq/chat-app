import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextProvider } from './context/store'
import { reducer } from './context/reducer'
import { initialState } from './context/inintialState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider reducer={reducer} state={initialState}>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
