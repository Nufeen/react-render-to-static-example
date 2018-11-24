import React from 'react'
import RDS from 'react-dom/server'
import A from './App'

const html = RDS.renderToStaticMarkup(A)

console.log(html);
