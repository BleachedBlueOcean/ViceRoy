import React, { useState } from 'react'
import Trading from './trading_page/Trading.jsx'
import '../css/App.css'

function App(props) {
  const [view, setView] = useState("initial")

  const renderView = () => {
    switch (view) {
      case "initial":
        return (
          <div>
            <h1>Yuh!</h1>
          </div>
        )
    }
  }

  return (
    <>
     <h1>Yuh!</h1>
     {renderView()}
    </>
  )
}

export default App
