import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContexts from "../contexts/UserContexts";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Transactions from "./Transactions";
import NewEntry from "./NewEntry";
import NewExit from "./NewExit";

import "../css/reset.css";
import "../css/style.css";

export default function App(){

    const [ token, setToken ] = useState(null);
    const userContextData = {token, setToken};

    console.log(token)

    return(
        <UserContexts.Provider  value={userContextData}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<SignIn/>}></Route>
                    <Route path={"/sign-up"} element={<SignUp/>}></Route>
                    <Route path={"/transactions"} element={<Transactions/>} ></Route>
                    <Route path={"new-entry"} element={<NewEntry/>} ></Route>
                    <Route path={"/new-exit"} element={<NewExit/>} ></Route>
                </Routes>
            </BrowserRouter>
        </UserContexts.Provider>
        
    );
}