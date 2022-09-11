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
                <Route path={"/sign-up"} element={<SignUp/>}></Route>
                <Route path={"/transactions"} element={<Transactions/>} ></Route>
                <Route path={"new-entry"} element={<NewEntry/>} ></Route>
                <Route path={"/new-exit"} element={<NewExit/>} ></Route>
            </Routes>
        </BrowserRouter>
    );
}