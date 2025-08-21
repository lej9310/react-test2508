import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./pages/Home";
import Page from "./pages/Page";
import Popup from "./Popup";
import Slider from "./Slider";

const Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Layout = () => {
    const [popupVisible, setPopupVisible] = useState(false);

    return (
        <>
            <Wrap>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* 메인 메뉴별 라우팅 */}
                        <Route path="/menu1/*" element={<Page title="Outer" />} />
                        <Route path="/menu2/*" element={<Page title="Top" />} />
                        <Route path="/menu3/*" element={<Page title="Bottom" />} />
                        <Route path="/menu4/*" element={<Page title="Dress" />} />
                    </Routes>
                </Router>
                <Slider />
                <Content onShowPopup={() => setPopupVisible(true)} />
                <Footer />
                {popupVisible && <Popup onClose={() => setPopupVisible(false)} />}
            </Wrap>
        </>
    );
};

export default Layout;