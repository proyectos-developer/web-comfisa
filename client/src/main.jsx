import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import {Provider} from 'react-redux'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import datareducer        from './redux/reducers/datareducer'

const store = configureStore({
    reducer: ({
      datareducer: datareducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
