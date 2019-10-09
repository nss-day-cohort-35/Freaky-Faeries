/* Index.js connects to index.html-- puts everything on the page*/
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import Dashboard from './components/dashboard/Dashboard'

ReactDOM.render(
  <Router>
      <Dashboard />
  </Router>
  , document.getElementById('root'))
