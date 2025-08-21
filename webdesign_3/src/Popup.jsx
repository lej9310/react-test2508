import React, { useEffect, useRef, useState } from 'react'
import './Popup.css'

function Popup() {
  const [isToastOpen, setIsToastOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSpecialModal, setIsSpecialModal] = useState(false)
  const [title, setTitle] = useState('안내')
  const [message, setMessage] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      const adButton = e.target && e.target.closest && e.target.closest('.ad-cta')
      if (adButton) {
        setTitle('신규 회원 혜택')
        setMessage('첫 방문 50% 할인 + 무료 장비 렌탈 혜택을 지금 확인해 보세요!')
        setIsModalOpen(true)
        setIsSpecialModal(true)
        if (timerRef.current) clearTimeout(timerRef.current)
        return
      }

      const button = e.target && e.target.closest && e.target.closest('.slide-cta')
      if (!button) return
      const label = (button.textContent || '').trim()

      switch (label) {
        case '예약하기':
          setTitle('예약 안내')
          setMessage('예약 서비스는 곧 제공됩니다. 잠시만 기다려 주세요!')
          break
        case '코스 둘러보기':
          setTitle('코스 안내')
          setMessage('코스 상세 페이지가 준비 중입니다.')
          break
        case '레슨 신청':
          setTitle('레슨 안내')
          setMessage('레슨 신청은 곧 오픈됩니다.')
          break
        case '패키지 보기':
          setTitle('패키지 안내')
          setMessage('패키지 정보 업데이트 중입니다.')
          break
        default:
          setTitle('안내')
          setMessage(`${label} 기능이 준비 중입니다.`)
      }

      setIsToastOpen(true)
      setIsSpecialModal(false)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setIsToastOpen(false), 2200)
    }

    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <>
      {isToastOpen && (
        <div className="popup-toast" role="status" aria-live="polite">
          <div className="popup-title">{title}</div>
          <div className="popup-text">{message}</div>
          <div className="popup-actions">
            <button className="popup-close" onClick={() => setIsToastOpen(false)}>닫기</button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="popup-overlay">
          {isSpecialModal ? (
            <div className="popup-modal special" role="dialog" aria-modal="true" aria-label="신규 회원 특별 혜택">
              <button className="popup-close-icon" aria-label="닫기" onClick={() => setIsModalOpen(false)}>X</button>
              <div className="special-hero">
                <span className="special-badge">WELCOME</span>
                <h2 className="special-title">신규 회원 특별 혜택</h2>
                <p className="special-subtitle">첫 방문 50% 할인 + 무료 장비 렌탈</p>
              </div>
              <div className="special-body">
                <ul className="special-benefits">
                  <li>당일 현장 결제 시 즉시 할인 적용</li>
                  <li>프리미엄 클럽 대여 무료 제공</li>
                  <li>주중/주말 모두 이용 가능</li>
                  <li>이벤트 주간 그린피 1+1 프로모션</li>
                  <li>2인 이상 동반 라운딩 추가 할인</li>
                </ul>

                <div className="special-sections">
                  <div className="special-section">
                    <h3 className="special-section-title">할인 행사</h3>
                    <ul className="benefit-list">
                      <li><span className="benefit-icon">%</span> 첫 가입자 웰컴 쿠폰 50% 즉시 적용</li>
                      <li><span className="benefit-icon">₩</span> 평일 오후 타임 추가 10% 세이브</li>
                      <li><span className="benefit-icon">★</span> 이벤트 주간 한정 그린피 1+1</li>
                    </ul>
                  </div>
                  <div className="special-section">
                    <h3 className="special-section-title">라운딩 혜택</h3>
                    <ul className="benefit-list">
                      <li><span className="benefit-icon">⛳</span> 라운딩 18H 이용 시 커피 바우처 제공</li>
                      <li><span className="benefit-icon">🏌️</span> 2인 동반 라운딩 추가 5% 할인</li>
                      <li><span className="benefit-icon">🎁</span> 누적 3회 라운딩 시 프리볼 증정</li>
                    </ul>
                  </div>
                </div>

                <div className="special-actions">
                  <a href="#" className="special-cta-primary">지금 혜택 받기</a>
                  <button className="special-cta-secondary" onClick={() => setIsModalOpen(false)}>나중에 보기</button>
                </div>

                <p className="special-note">이벤트 및 혜택은 기간 한정이며 일부 시간대는 제외될 수 있습니다.</p>
              </div>
            </div>
          ) : (
            <div className="popup-modal" role="dialog" aria-modal="true" aria-label="자세히 보기">
              <div className="popup-header">{title}</div>
              <div className="popup-body">
                <p className="popup-message">{message}</p>
                <a href="#" className="popup-cta">자세히 보기</a>
              </div>
              <div className="popup-footer">
                <button className="popup-close" onClick={() => setIsModalOpen(false)}>닫기</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Popup

