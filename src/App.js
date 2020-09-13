import React, { useState } from 'react'
import './style/app.scss'
import Sidebar from './Sidebar'
import Chat from './Chat'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import { useStateValue } from './Stateprovider'

function App() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                    <div className="app_body">
                        <Router>
                            <Sidebar />
                            <Switch>
                                <Route path="/rooms/:roomId">
                                    <Chat />
                                </Route>
                                <Route path="/">
                                    <Chat />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                )}
        </div>
    )
}

export default App
