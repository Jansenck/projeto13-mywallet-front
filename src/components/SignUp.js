import { Link } from "react-router-dom";

import styled from "styled-components";

import Container from "./common/Container";
import Button from "./common/Button";
import Tittle from "./common/Tittle";

export default function SignUp(){
    return(
        <Container>
            <LoginContainer>
                <Tittle>My Wallet</Tittle>
                <Form>
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirme a senha"/>
                    <Button>
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