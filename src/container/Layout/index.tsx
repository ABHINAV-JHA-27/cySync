import styled from "styled-components";
import NavbarComponent from "../../component/Navbar";
import SidebarComponent from "../../component/Sidebar";

type LayoutProps = {
    children: React.ReactNode;
};

const LayoutContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const BodyContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutContainer>
            <NavbarComponent />
            <BodyContainer>
                <SidebarComponent />
                {children}
            </BodyContainer>
        </LayoutContainer>
    );
};

export default Layout;
