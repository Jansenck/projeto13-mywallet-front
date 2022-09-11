import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Container from "./common/Container";
import Button from "./common/Button";
import Tittle from "./common/Tittle";

export default function SignIn(){

    const [ loginData, setLoginData ] = useState({email: "", password: ""});

    function login(event){
        event.preventDefault();
        console.log(loginData)
    }

    return(
        <Container>
            <LoginContainer>
                <Tittle>My Wallet</Tittle>
                <Form onSubmit={login}>
                    <input required type="email" placeholder="E-mail" onChange={e => setLoginData({...loginData, email: e.target.value})}/>
                    <input required type="password" placeholder="Senha" onChange={e => setLoginData({...loginData, password: e.target.value})}/>
                    <Button type="submit">
                        <p>Entrar</p>
                    </Button>
                </Form>
                <Link 
                    to="/sign-up" 
                    style={{
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "#FFFFFF",
                        marginTop: "40px"
                    }}>
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>
            </LoginContainer>       
        </Container>
    );
}
const LoginContainer = styled.div`
    height: 39%;
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