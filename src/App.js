import React, {useContext} from 'react';
import {Route } from "react-router-dom";
import {AppContext} from "./contexts/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/main.css'
import {Home,Welcome} from "./pages";

function App() {
    const AppContextData = useContext(AppContext);
    const {seeWelcome } = AppContextData;
    return (
        <>
            <Route exact path="/" >
                {seeWelcome ? <Home showChat={false}/> : <Welcome />}
            </Route>
            <Route exact path="/:id" >
                {seeWelcome ? <Home showChat={true}/> : <Welcome />}
            </Route>
        </>
    );
}

export default App;
