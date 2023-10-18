import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
    redirect,
} from "react-router-dom";
import styled from "styled-components";
import Layout from "./container/Layout";
import "./index.css";

const AppContainer = styled.div`
    flex: 1;
    height: 100vh;
    width: 100vw;
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
                        <Route path="/wallets" element={<h1>heelo</h1>} />
                        <Route path="/transactions" element={<h1>hii</h1>} />
                    </Routes>
                </Layout>
            </Router>
        </AppContainer>
    );
}

export default App;
