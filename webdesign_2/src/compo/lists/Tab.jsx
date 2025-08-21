import React, { useState } from 'react';
import styled from 'styled-components';

// 탭 컨테이너
const TabContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 탭 버튼 컨테이너
const TabButtons = styled.div`
  display: flex;
  background-color: #f5f5f5;
`;

// 탭 버튼
const TabButton = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  background-color: ${props => props.active ? '#15397f' : 'transparent'};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.active ? '#ffffff' : '#666'};
  transition: all 0.3s ease;
`;

// 탭 콘텐츠
const TabContent = styled.div`
  padding: 20px;
  min-height: 200px;
`;

// 공지사항 리스트
const NoticeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

// 공지사항 아이템
const NoticeItem = styled.li`
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

// 공지사항 링크
const NoticeLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #15397f;
  }
`;

// 공지사항 제목
const NoticeTitle = styled.span`
  font-size: 14px;
  flex: 1;
  text-align: left;
`;

// 공지사항 날짜
const NoticeDate = styled.span`
  font-size: 12px;
  color: #999;
`;

// 갤러리 그리드
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

// 갤러리 아이템
const GalleryItem = styled.div`
  height: 60px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  background-color: ${props => props.color};
`;

// 공지사항/갤러리 탭 기능을 담당하는 컴포넌트
const TabSection = ({ onPopupOpen }) => {
  const [activeTab, setActiveTab] = useState('notice');

  // 공지사항 데이터
  const notices = [
    { id: 1, title: "대한은행 인터넷뱅킹 시스템 점검 안내", date: "2024-01-15" },
    { id: 2, title: "신규 금융상품 출시 안내", date: "2024-01-14" },
    { id: 3, title: "보안카드 재발급 안내", date: "2024-01-13" },
    { id: 4, title: "대한은행 모바일앱 업데이트", date: "2024-01-12" }
  ];

  // 갤러리 데이터 (이미지 대신 색상으로 표현)
  const galleries = [
    { id: 1, title: "대한은행 본점", color: "#15397f" },
    { id: 2, title: "고객센터", color: "#2d5aa0" },
    { id: 3, title: "ATM 코너", color: "#4a7bc8" }
  ];

  // 공지사항 클릭 시 팝업 열기
  const handleNoticeClick = (notice) => {
    onPopupOpen({
      title: notice.title,
      content: `${notice.title}에 대한 자세한 내용입니다. 공지사항 상세 정보를 여기에 표시합니다.`,
      date: notice.date
    });
  };

  return (
    <TabContainer>
      <TabButtons>
        <TabButton
          active={activeTab === 'notice'}
          onClick={() => setActiveTab('notice')}
        >
          공지사항
        </TabButton>
        <TabButton
          active={activeTab === 'gallery'}
          onClick={() => setActiveTab('gallery')}
        >
          갤러리
        </TabButton>
      </TabButtons>
      <TabContent>
        {activeTab === 'notice' && (
          <NoticeList>
            {notices.map((notice) => (
              <NoticeItem key={notice.id}>
                <NoticeLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNoticeClick(notice);
                  }}
                >
                  <NoticeTitle>{notice.title}</NoticeTitle>
                  <NoticeDate>{notice.date}</NoticeDate>
                </NoticeLink>
              </NoticeItem>
            ))}
          </NoticeList>
        )}
        {activeTab === 'gallery' && (
          <GalleryGrid>
            {galleries.map((item) => (
              <GalleryItem key={item.id} color={item.color}>
                <span>{item.title}</span>
              </GalleryItem>
            ))}
          </GalleryGrid>
        )}
      </TabContent>
    </TabContainer>
  );
};

export default TabSection;