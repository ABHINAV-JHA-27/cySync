import styled from "styled-components";
import NavbarComponent from "../../component/Navbar";

type LayoutProps = {
    children: React.ReactNode;
};

const LayoutContainer = styled.div`
    display: flex;
    flex: 1;
`;

const BodyContainer = styled.div``;

const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutContainer>
            <NavbarComponent />
            {children}
        </LayoutContainer>
    );
};

export default Layout;
