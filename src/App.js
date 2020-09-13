import React from 'react'
import './style/app.scss'
import Sidebar from './Sidebar'

function App() {
    return (
        <div className="app">
            <div className="app_body">
                {/* Sidebar */}
                <Sidebar/>
                
                {/* Chat */}
            </div>
        </div>
    )
}

export default App
