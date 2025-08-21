import { useState } from "react";
import styled from "styled-components";

const ContentWrap = styled.main`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr; /* 좌(공지/갤러리), 중(배너), 우(바로가기) */
  gap: 20px;
  margin: 20px 0;
`;

const Box = styled.section`
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

/* 좌측 공지/갤러리 탭 */
const TabMenu = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const TabItem = styled.button`
  flex: 1;
  padding: 8px 0;
  background: ${(props) => (props.active ? "#004080" : "#ccc")};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
`;

const TabContent = styled.div`
  background: #f9f9f9;
  padding: 10px;
  border-radius: 0 0 5px 5px;
`;

const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  li:hover {
    color: #004080;
    font-weight: bold;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
  }
`;

/* 중앙 배너 */
const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

/* 우측 바로가기 */
const QuickMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const QuickButton = styled.a`
  background: #004080;
  color: white;
  text-align: center;
  padding: 12px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background: #0066cc;
  }
`;

export default function Content({ onShowPopup }) {
  const tabs = ["공지사항", "갤러리"];
  const [active, setActive] = useState(0);

  return (
    <ContentWrap>
      {/* 좌측 공지/갤러리 */}
      <Box>
        <TabMenu>
          {tabs.map((t, i) => (
            <TabItem key={i} active={active === i} onClick={() => setActive(i)}>
              {t}
            </TabItem>
          ))}
        </TabMenu>
        <TabContent>
          {active === 0 ? (
            <NoticeList>
              <li onClick={onShowPopup}>공지사항 1 - 천체관측 안내</li>
              <li>공지사항 2 - 휴관일 안내</li>
              <li>공지사항 3 - 프로그램 신청</li>
              <li>공지사항 4 - 별 축제 안내</li>
            </NoticeList>
          ) : (
            <GalleryGrid>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="gallery1"
              />
              <img
                src="https://images.unsplash.com/photo-1503264116251-35a269479413"
                alt="gallery2"
              />
              <img
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
                alt="gallery3"
              />
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                alt="gallery4"
              />
            </GalleryGrid>
          )}
        </TabContent>
      </Box>

      {/* 중앙 배너 */}
      <Box>
        <BannerImage
          src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
          alt="센터 배너"
        />
      </Box>

      {/* 우측 바로가기 */}
      <Box>
        <h3>바로가기</h3>
        <QuickMenu>
          <QuickButton href="#">예약하기</QuickButton>
          <QuickButton href="#">오시는 길</QuickButton>
          <QuickButton href="#">프로그램</QuickButton>
          <QuickButton href="#">문의하기</QuickButton>
        </QuickMenu>
      </Box>
    </ContentWrap>
  );
}