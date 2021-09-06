import React from 'react';
import './App.css';
import Main from "./pages/Main";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import AddPokemon from "./pages/AddPokemon";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/' exact component={Main}/>
                    <Route path='/addPokemon' exact component={AddPokemon}/>
                    <Route path='/favorites' exact component={Favorites}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
