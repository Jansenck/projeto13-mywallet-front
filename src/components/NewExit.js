import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import styled from "styled-components";

import axios from "axios";

import UserContexts from "../contexts/UserContexts";
import Container from "./common/Container";
import Button from "./common/Button";

export default function NewExit(){

    const navigate = useNavigate();
    const { token } = useContext(UserContexts);
    const [ newExitData, setNewExitData ] = useState({value: null, description: null});
    
    function sendNewExitTransaction(event){

        event.preventDefault();
        const { value, description } = newExitData;
        if(!value || !description){
            return window.alert("Preencha os campos Value e Descrição corretamente!");
        }
        const body = {type: "exit", value, description};
        const config = {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        }
        const promise = axios.post("http://localhost:5000/new-exit", body, config);
        promise.then(() => {
            const refreshNewExitData = {value: null, description: null}
            setNewExitData(refreshNewExitData);
            navigate("/transactions");
        });
        promise.catch(error => window.alert(error));
    }

    return(
        <TransactionsContainer>
            <Header>
                <User>Nova saída</User>        
            </Header>
            <LoginContainer>
                <Form onSubmit={sendNewExitTransaction}>
                    <input required type="text" placeholder="Valor" onChange={e => setNewExitData({...newExitData, value: e.target.value})}/>
                    <input required type="text" placeholder="Descrição" onChange={e => setNewExitData({...newExitData, description: e.target.value})}/>
                    <Button type="submit">
                        <p>Salvar saída</p>
                    </Button>
                </Form>
            </LoginContainer>
        </TransactionsContainer>
    );
}
const TransactionsContainer = styled(Container)`
    padding: 5%;
    height: 35vh;
    display: flex;
    flex-direction: column;
`;
const Header = styled.div`
    height: 30px;
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-around;
    color: #FFFFFF;
        ion-icon{
            font-size: 25px;
        }
`;
const User = styled.p`
    font-size: 26px;
    font-weight: 700;
`;
const Form = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

        input{
            height: 55px;
            weight: 100%;
            border-radius: 5px;
            padding: 0 5px;
            box-sizing: border-box;
        }
        input::placeholder{
            font-size: 20px;
            color: #000000;
        }
`;
const LoginContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

