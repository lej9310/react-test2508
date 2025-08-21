import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../ui/Header';
import Navigation from '../ui/Navigation';
import Slider from '../ui/Slider';
import TabSection from '../lists/TabSection';
import Banner from '../ui/Banner';
import QuickMenu from '../ui/QuickMenu';
import Footer from '../ui/Footer';
import Popup from '../ui/Popup';

// 메인 페이지 전체 컨테이너 - 대한은행 웹사이트의 메인 화면
const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: 'Malgun Gothic', sans-serif;
  background-color: #f1f1f1;
  color: #333333;
  line-height: 1.6;
`;

// 메인 콘텐츠 영역
const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// 콘텐츠 그리드 레이아웃 (공지사항/갤러리, 배너, 바로가기)
const ContentGrid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainPage = () => {
  // 팝업 상태 관리 - 공지사항 클릭 시 레이어 팝업 표시
  const [popupContent, setPopupContent] = useState(null);

  // 팝업 열기 함수
  const openPopup = (content) => {
    setPopupContent(content);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <AppContainer>
      <Header />

      <Navigation />

      <MainContent>
        <Slider />

        <ContentGrid>
          <TabSection onPopupOpen={openPopup} />

          <Banner />

          <QuickMenu />
        </ContentGrid>
      </MainContent>

      <Footer />

      <Popup popupContent={popupContent} onClose={closePopup} />
    </AppContainer>
  );
};

export default MainPage;