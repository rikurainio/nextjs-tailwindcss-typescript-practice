import * as React from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface LayoutProps {
    children: JSX.Element[] | JSX.Element;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className="layout">
        <Navbar />
        {children}
        <Footer />
        </div>
    )
};

export { Layout };