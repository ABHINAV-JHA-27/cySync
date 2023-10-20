import styled from "styled-components";
import WalletListContainer from "../../container/WalletPage/WalletListContainer";

const WalletPageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const WalletScreen = () => {
    return (
        <WalletPageContainer>
            <WalletListContainer />
        </WalletPageContainer>
    );
};

export default WalletScreen;
