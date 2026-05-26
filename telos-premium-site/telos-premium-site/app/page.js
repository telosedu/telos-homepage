export default function Page() {
  return (
    <main style={{
      backgroundColor: "#07111F",
      color: "white",
      minHeight: "100vh",
      padding: "80px 30px",
      fontFamily: "serif"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: "64px",
          lineHeight: "1.3",
          marginBottom: "30px",
          color: "#F5E6B3"
        }}>
          결과를 넘어,<br />
          방향을 설계합니다.
        </h1>

        <p style={{
          fontSize: "22px",
          maxWidth: "800px",
          lineHeight: "1.8",
          color: "#d6d6d6"
        }}>
          텔로스는 학생의 잠재력과 가능성을 깊이 분석하여
          단순한 입시를 넘어 삶의 목적지까지 함께 고민하는
          프리미엄 진로·입시 전략 연구소입니다.
        </p>

        <div style={{
          marginTop: "60px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          <button style={{
            border: "1px solid #D4AF37",
            background: "transparent",
            color: "#D4AF37",
            padding: "16px 36px",
            borderRadius: "999px",
            fontSize: "16px"
          }}>
            상담 신청하기
          </button>

          <button style={{
            border: "1px solid rgba(255,255,255,0.2)",
            background: "transparent",
            color: "white",
            padding: "16px 36px",
            borderRadius: "999px",
            fontSize: "16px"
          }}>
            설명회 예약
          </button>
        </div>
      </div>
    </main>
  )
}
