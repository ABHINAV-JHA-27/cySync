import styled from "styled-components";
import TransactionList from "../../container/TransactionPage/TransactionList";

const TransactionsPageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #c78d4e;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const TransactionScreen = () => {
    return (
        <TransactionsPageContainer>
            <Title>Transactions</Title>
            <TransactionList />
        </TransactionsPageContainer>
    );
};

export default TransactionScreen;
