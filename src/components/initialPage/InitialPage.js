import React from "react";

import Header from "./components/Header"
import CardMainContent from "./components/CardMainContent"
import MainContent from "./components/MainContent"
import SubHeader from "./components/SubHeader"

import "./initialPage.scss"

export default function InitialPage() {

    return (
        <div className="initialPage">
            <Header />
            <SubHeader />
            <MainContent />
        </div>
    )
}