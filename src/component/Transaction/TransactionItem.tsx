import styled from "styled-components";

const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    color: #adabaa;
    background-color: #161c23;
`;

const CoinContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

const CoinIcon = styled.img`
    width: 30px;
    height: 30px;
`;

const WalletName = styled.div`
    font-size: 12px;
    font-weight: 700;
    color: #adabaa;
`;

const CoinAmount = styled.div`
    font-size: 12px;
    font-weight: 700;
    color: #adabaa;
`;

const Result = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #8484f1;
    text-transform: uppercase;
`;

const Success = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #8484f1;
    text-transform: uppercase;
`;

const Date = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #adabaa;
`;

const Time = styled.div`
    font-size: 12px;
    font-weight: 700;
    color: #adabaa;
`;

const TransactionItem = () => {
    return (
        <ListItem>
            <CoinContainer>
                <CoinIcon src="https://static.upbit.com/logos/ETH.png" />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                    }}
                >
                    <Date>12/12/2021</Date>
                    <Time>12:00 PM</Time>
                </div>
            </CoinContainer>
            <WalletName>abhinav</WalletName>
            <CoinAmount>0.0000001 BTC</CoinAmount>
            <Result>Success</Result>
            <Success>Success</Success>
        </ListItem>
    );
};

export default TransactionItem;
