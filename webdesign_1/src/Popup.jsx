import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupBox = styled.div`
  background: white;
  padding: 20px;
  width: 400px;
  text-align: center;
  border-radius: 8px;
`;

export default function Popup({ onClose }) {
    return (
        <Overlay onClick={onClose}>
            <PopupBox onClick={(e) => e.stopPropagation()}>
                <h3>공지사항</h3>
                <p>이곳은 공지 팝업 내용입니다.</p>
                <button onClick={onClose}>닫기</button>
            </PopupBox>
        </Overlay>
    );
}