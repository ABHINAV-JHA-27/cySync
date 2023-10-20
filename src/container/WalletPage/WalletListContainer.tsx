import styled from "styled-components";
import WalletItem from "../../component/Wallet/WalletItem";

const WalletContainer = styled.div`
    display: flex;
    width: 100%;
    height: 85vh;
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
    margin-top: 40px;
    color: #adabaa;
    border-bottom: 1px solid #1a1f26;
    padding-bottom: 10px;
`;

const HeadContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    color: #474848;
`;

const Head = styled.div`
    width: 30%;
    text-align: center;
`;

const ImportContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;
const ImportButton = styled.button`
    padding: 15px 25px;
    border-radius: 8px;
    background-color: #161c23;
    color: #adabaa;
    border: none;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
`;

const WalletListContainer = () => {
    return (
        <WalletContainer>
            <ImportContainer>
                <ImportButton>Import Wallet</ImportButton>
            </ImportContainer>
            <Title>Total Coins - 7</Title>
            <HeadContainer>
                <Head
                    style={{
                        textAlign: "left",
                    }}
                >
                    Coin
                </Head>
                <Head>Holding</Head>
                <Head>Actions</Head>
            </HeadContainer>
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
            <WalletItem />
        </WalletContainer>
    );
};

export default WalletListContainer;
