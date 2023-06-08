import React from "react";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                    <span>@Copyright 2023 Sofwan Hidayat Nasution</span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
