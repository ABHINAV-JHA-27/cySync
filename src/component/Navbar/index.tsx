import styled from "styled-components";
import RefreshIconPng from "../../assets/images/RefreshIconPng.png";

const NavContainer = styled.div`
    height: 10%;
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid #1e2328;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    height: 30px;
    width: 30px;
`;

const LogoText = styled.span`
    font-size: 15px;
    font-weight: 800;
    color: #fff;
    margin-left: 10px;
`;

const RefreshContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RefreshIcon = styled.img`
    height: 30px;
    width: 30px;
    resize: contain;
`;

const RefreshText = styled.span`
    font-size: 18px;
    font-weight: 400;
    color: #e0b36a;
    margin-right: 10px;
`;

const Button = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
`;

const NavbarComponent = () => {
    return (
        <NavContainer>
            <LogoContainer>
                <Logo src="/logo.png" alt="cySync" />
                <LogoText>cySync</LogoText>
            </LogoContainer>
            <RefreshContainer>
                <RefreshText>Synced</RefreshText>
                <Button
                    onClick={() => {
                        console.log("refresh");
                    }}
                >
                    <RefreshIcon src={RefreshIconPng} alt="refresh" />
                </Button>
            </RefreshContainer>
        </NavContainer>
    );
};

export default NavbarComponent;
