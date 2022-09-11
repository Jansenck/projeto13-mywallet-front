import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";
import axios from "axios";

import Container from "./common/Container";
import Button from "./common/Button";
import Tittle from "./common/Tittle";

export default function SignUp(){

    const navigate = useNavigate();
    const [ registrationData, setRegistrationData ] = useState({
        name: null,
        email: null,
        password: null,
        passwordConfirmation: null
    });
    
    function sendRegistration(event){
        event.preventDefault();
        const {name, email, password, passwordConfirmation} = registrationData;
        if(password !== passwordConfirmation){
            return window.alert("Senhas não compatíveis!");
        }
        const body = {name, email, password};
        console.log(body)
        const promise = axios.post("http://localhost:5000/sign-up", body);
        promise.then(() => {
            navigate("/")});
        promise.catch(error => {
            window.alert(error);
        });
    } 
    return(
        <Container>
            <LoginContainer>
                <Tittle>My Wallet</Tittle>
                <Form onSubmit={sendRegistration}>
                    <input required type="text" placeholder="Nome" onChange={e => setRegistrationData({...registrationData, name: e.target.value})}/>
                    <input required type="email" placeholder="E-mail" onChange={e => setRegistrationData({...registrationData, email: e.target.value})}/>
                    <input required type="password" placeholder="Senha" onChange={e => setRegistrationData({...registrationData, password: e.target.value})}/>
                    <input required type="password" placeholder="Confirme a senha" onChange={e => setRegistrationData({...registrationData, passwordConfirmation: e.target.value})}/>
                    <Button type="submit">
                        <p>Cadastrar</p>
                    </Button>
                </Form>
                <Link 
                    to="/" 
                    style={{
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "#FFFFFF",
                        marginTop: "40px"
                    }}>
                    <p>Já tem uma conta? Entre agora!</p>
                </Link>
            </LoginContainer>       
        </Container>
    );
}

const LoginContainer = styled.div`
    height: 57%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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