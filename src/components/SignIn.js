import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "./common/Container";
import Button from "./common/Button";
import Tittle from "./common/Tittle";

export default function SignIn(){
    return(
        <Container>
            <LoginContainer>
                <Tittle>My Wallet</Tittle>
                <Form>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <Button>
                        <p>Entrar</p>
                    </Button>
                </Form>
                <Link 
                    to="/signUp" 
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