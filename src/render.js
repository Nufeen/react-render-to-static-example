import React from 'react'
import RDS from 'react-dom/server'
import App from './App'

const html = RDS.renderToStaticMarkup(App)

console.log(html)
