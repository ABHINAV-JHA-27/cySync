import styled from "styled-components";
import TransactionItem from "../../component/Transaction/TransactionItem";

const TransactionContainer = styled.div`
    display: flex;
    width: 100%;
    height: 72vh;
    flex-direction: column;
    gap: 20px;
    padding-right: 20px;
    overflow-y: scroll;
`;
const Title = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
    margin-top: 30px;
    color: #adabaa;
    border-bottom: 1px solid #1a1f26;
    padding-bottom: 10px;
`;
const TransactionList = () => {
    return (
        <TransactionContainer>
            <Title>Total Transactions - 03</Title>
            <TransactionItem />
            <TransactionItem />
        </TransactionContainer>
    );
};

export default TransactionList;
