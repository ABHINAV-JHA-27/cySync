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
    align-items: center;
    width: 30%;
`;

const Coin = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

const DeleteIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const DeleteIconContainer = styled.div`
    width: 30%;
    text-align: center;
`;

const HoldingText = styled.div`
    width: 30%;
    text-align: center;
`;

const WalletItem = () => {
    return (
        <ListItem>
            <CoinContainer>
                <Coin src="https://static.upbit.com/logos/ETH.png" />
                BITCOIN
            </CoinContainer>
            <HoldingText>0.00000000</HoldingText>
            <DeleteIconContainer>
                <DeleteIcon src="https://static.upbit.com/logos/ETH.png" />
            </DeleteIconContainer>
        </ListItem>
    );
};

export default WalletItem;
