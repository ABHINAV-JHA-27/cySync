import styled from "styled-components";
import WalletIconPng from "../../assets/images/WalletIconPng.png";
import TransactionIconPng from "../../assets/images/TransactionIconPng.png";
import { useNavigate } from "react-router-dom";

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85vh;
    width: 20vw;
    background-color: #161c23;
    overflow: hidden;
    margin: 20px;
    border-radius: 20px;
    padding-top: 50px;
`;

const ListItem = styled.li<{ $selected: boolean }>`
    background-color: #161c23;
    padding-horizontal: 40px;
    padding-vertical: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
    height: 30px;
    border-left-width: 4px;
    border-left-style: ${({ $selected }) => ($selected ? "solid" : null)};
    border-color: ${({ $selected }) => ($selected ? "#E2C19D" : null)};
    padding-left: ${({ $selected }) => ($selected ? "36px" : "40px")};
    margin-bottom: 20px;
    cursor: pointer;
`;

const ListItemIcon = styled.img<{ $selected: boolean }>`
    background-color: #161c23;
    width: 30px;
    height: 30px;
    resize-mode: contain;
    tint-color: ${({ $selected }) => ($selected ? "#E2C19D" : "#fff")};
`;

const ListItemText = styled.p<{ $selected: boolean }>`
    background-color: #161c23;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    color: ${({ $selected }) => ($selected ? "#E2C19D" : "#fff")};
`;

const SettingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #4b3c2b;
    color: #e7ddd2;
    cursor: pointer;
`;

const SidebarComponent = () => {
    const navigate = useNavigate();
    return (
        <SidebarContainer>
            <div>
                <ul>
                    <ListItem
                        $selected={location.pathname === "/wallets"}
                        onClick={() => {
                            navigate("/wallets");
                        }}
                    >
                        <ListItemIcon
                            src={WalletIconPng}
                            alt="users"
                            $selected={location.pathname === "/wallets"}
                        />
                        <ListItemText
                            $selected={location.pathname === "/wallets"}
                        >
                            Wallets
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        $selected={location.pathname === "/transactions"}
                        onClick={() => {
                            navigate("/transactions");
                        }}
                    >
                        <ListItemIcon
                            src={TransactionIconPng}
                            alt="users"
                            $selected={location.pathname === "/transactions"}
                        />
                        <ListItemText
                            $selected={location.pathname === "/transactions"}
                        >
                            Transactions
                        </ListItemText>
                    </ListItem>
                </ul>
            </div>
            <SettingContainer>
                <p>Support</p>
            </SettingContainer>
        </SidebarContainer>
    );
};

export default SidebarComponent;
