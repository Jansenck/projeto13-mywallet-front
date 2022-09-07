import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Transactions from "./Transactions";
import NewEntry from "./NewEntry";
import NewExit from "./NewExit";

import "../css/reset.css";
import "../css/style.css";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<SignIn/>}></Route>
                <Route path={"/signUp"} element={<SignUp/>}></Route>
                <Route path={"/transactions"} element={<Transactions/>} ></Route>
                <Route path={"newEntry"} element={<NewEntry/>} ></Route>
                <Route path={"/newExit"} element={<NewExit/>} ></Route>
            </Routes>
        </BrowserRouter>
    );
}