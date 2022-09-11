import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import dayjs from "dayjs";
import axios from "axios";

import UserContexts from '../contexts/UserContexts';
import Container from "./common/Container";

export default function Transactions(){

    const today = dayjs().locale("br").format("DD/MM");
    const [transactions, setTransactions] = useState([]);
    const { token } = useContext(UserContexts);

    useEffect(() => {
        const config = {
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        };
        const promise = axios.get("http://localhost:5000/transactions", config);
        promise.then(res => setTransactions([res.data]));
        promise.catch(error => console.log(error.response.data));
    })

    return(
        <NewContainer>
            <Header>
                <User>Olá, Fulano</User>
                <Link to="/">
                    <ion-icon name="exit-outline"></ion-icon>          
                </Link>
            </Header>
            <History transactions={transactions.length > 0}>
                {
                    transactions.length > 0?
                    <>
                        <AccountTransactions>
                            {transactions.map( (transaction, index) => {
                                const { value, description, type } = transaction[0];
                                return(
                                    <li key={index} typetransaction={type}>
                                        <p>{today} <span>{description}</span></p>
                                        <p style={{color: type === "entry"? "#03AC00" : "#C70000"}}>{value}</p>
                                    </li>
                                )
                            })}
                        </AccountTransactions>
                        <CashBalance>
                            <p><span>SALDO</span></p>
                            <p>2894,39</p>
                        </CashBalance>
                    </>
                    :
                    <p>Não há registros de <br></br>entrada ou saída</p>
                }
            </History>
            <TransactionsTypes>
                <Link to="/new-entry">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova <br></br>entrada</p>
                </Link>
                <Link to="/new-exit">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova <br></br>saída</p>
                </Link>
            </TransactionsTypes>
        </NewContainer>
    );
}

const NewContainer = styled(Container)`
    padding: 5% 5%;
    box-sizing: border-box;
    flex-direction: column;
`;

const Header = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
        ion-icon{
            font-size: 30px;
            color: #FFFFFF;
        }
`;
const User = styled.p`
    font-size: 26px;
    font-weight: 700;
`;
const History = styled.div`
    height: 70%;
    width: 100%;
    padding: 7% 5%;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.transactions? "space-between" : "center"};
    align-items: top;
    color: #868686;
    text-align: center;
`;
const AccountTransactions = styled.ul`
    width: 100%;
    list-style-type: none;

        li{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: space-between;
            margin-bottom: 20px;
        }
        span{
            color: #000000;
        }
        
`;
const CashBalance = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
        span{
            font-weight: 700;
            color: #000000;
        }
`;
const TransactionsTypes = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-around;
        a{
            height: 100%;
            width: 47%;
            background-color: #A328D6;
            border-radius: 5px;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 30px;
            color: #FFFFFF;
            text-decoration: none;
        }
        p{
            font-size: 20px;
            font-weight: 700;
        }
`;