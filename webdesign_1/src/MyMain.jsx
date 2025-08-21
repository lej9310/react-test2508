import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  grid-area: main;
  background: #f9f9f9;
  padding: 20px;
`;

const Article = styled.article`
  margin-bottom: 20px;
  padding: 15px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

function MyMain() {
    return (
        <MainContainer>
            <Article>
                <h2>Article 1</h2>
                <p>이곳은 첫 번째 아티클 내용입니다.</p>
            </Article>
            <Article>
                <h2>Article 2</h2>
                <p>이곳은 두 번째 아티클 내용입니다.</p>
            </Article>
        </MainContainer>
    );
}

export default MyMain;