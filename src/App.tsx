import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import styled from "styled-components";
import Layout from "./container/Layout";
import "./index.css";
import WalletScreen from "./screen/wallet";
import TransactionScreen from "./screen/transactions";

const AppContainer = styled.div`
    flex: 1;
    height: 100vh;
    width: 100vw;
    background-color: #0a1018;
`;

function App() {
    return (
        <AppContainer>
            <Router>
                <Layout>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/wallets" replace={true} />}
                        />
                        <Route path="/wallets" element={<WalletScreen />} />
                        <Route
                            path="/transactions"
                            element={<TransactionScreen />}
                        />
                    </Routes>
                </Layout>
            </Router>
        </AppContainer>
    );
}

export default App;
