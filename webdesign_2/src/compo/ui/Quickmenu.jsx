import React from 'react';
import styled from 'styled-components';

// 팝업 오버레이
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

// 팝업 콘텐츠
const PopupContent = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

// 팝업 헤더
const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  background-color: #15397f;
  color: #ffffff;
  border-radius: 8px 8px 0 0;
`;

// 팝업 제목
const PopupTitle = styled.h3`
  font-size: 16px;
  margin: 0;
`;

// 팝업 닫기 버튼
const PopupCloseButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 팝업 본문
const PopupBody = styled.div`
  padding: 20px;
`;

// 팝업 텍스트
const PopupText = styled.p`
  margin-bottom: 10px;
  line-height: 1.6;
  margin-top: 0;
`;

// 팝업 날짜
const PopupDate = styled.p`
  color: #999;
  font-size: 12px;
  border-top: 1px solid #eee;
  padding-top: 10px;
  margin-top: 15px;
  margin-bottom: 0;
`;

// 레이어 팝업을 담당하는 컴포넌트
const Popup = ({ popupContent, onClose }) => {
  if (!popupContent) return null;

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <PopupHeader>
          <PopupTitle>{popupContent.title}</PopupTitle>
          <PopupCloseButton onClick={onClose}>×</PopupCloseButton>
        </PopupHeader>
        <PopupBody>
          <PopupText>{popupContent.content}</PopupText>
          <PopupDate>작성일: {popupContent.date}</PopupDate>
        </PopupBody>
      </PopupContent>
    </PopupOverlay>
  );
};

export default Popup;