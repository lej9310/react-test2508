import styled from "styled-components";

const AsideContainer = styled.aside`
  grid-area: aside;
  background: #efefef;
  padding: 20px;
  border-left: 2px solid #ddd;
`;

function Aside() {
    return (
        <AsideContainer>
            <h3>사이드바</h3>
            <ul>
                <li>
                    공지사항
                    <img
                        src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
                        alt="공지 배너"
                        style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
                    />
                </li>
                <li>빠른 링크</li>
                <li>
                    광고 영역
                    <img
                        src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
                        alt="광고 배너"
                        style={{ width: "100%", borderRadius: "8px" }}
                    />
                </li>
            </ul>
        </AsideContainer>
    );
}

export default Aside;