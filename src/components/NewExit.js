import styled from "styled-components";

import Container from "./common/Container";
import Button from "./common/Button";

export default function NewExit(){
    return(
        <TransactionsContainer>
            <Header>
                <User>Nova saída</User>        
            </Header>
            <LoginContainer>
                <Form>
                    <input type="text" placeholder="Valor"/>
                    <input type="text" placeholder="Descrição"/>
                    <Button>
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

