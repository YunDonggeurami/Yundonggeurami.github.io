function App() {
  return (
      <main style={styles.page}>
        <section style={styles.hero}>
          <p style={styles.label}>Unity Gameplay Portfolio</p>

          <h1 style={styles.title}>
            Unity와 C#으로 게임 시스템을 구현하는 개발자 포트폴리오
          </h1>

          <p style={styles.description}>
            카메라 촬영, UI 흐름, 저장 시스템, 플레이어 상호작용을 중심으로
            직접 구현한 기능과 문제 해결 과정을 정리합니다.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>

          <article style={styles.card}>
            <div style={styles.mediaBox}>
              <img
                  src="/images/petlog-main.png"
                  alt="Pet Log 인게임 카메라 촬영 화면"
                  style={styles.projectImage}
              />
            </div>

            <div>
              <p style={styles.projectType}>3D Low Poly 탐험형 동물 촬영·수집 게임</p>
              <h3 style={styles.projectTitle}>Pet Log</h3>

              <p style={styles.projectDescription}>
                도시를 탐험하며 동물을 발견하고, 카메라로 촬영한 뒤 게임 내 SNS인
                Set Log에 기록을 업로드하는 짧은 수집형 어드벤처 게임입니다.
              </p>

              <h4 style={styles.subTitle}>담당 구현</h4>
              <ul style={styles.list}>
                <li>Raycast 기반 동물 감지</li>
                <li>촬영 성공/실패 판정</li>
                <li>Set Log 게시글 및 친구 반응 UI 연동</li>
                <li>UI 제외 스크린샷 저장</li>
              </ul>

              <h4 style={styles.subTitle}>문제 해결</h4>
              <p style={styles.projectDescription}>
                촬영 직후 UI가 스크린샷에 포함되는 문제가 발생했습니다.
                UI를 비활성화한 뒤 WaitForEndOfFrame으로 프레임 렌더링 종료 시점을
                기다린 후 캡처하도록 수정했습니다.
              </p>
              <div style={styles.buttonRow}>
                <a style={styles.button} href="#" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a style={styles.button} href="#" target="_blank" rel="noreferrer">
                  Video
                </a>
                <a style={styles.button} href="#" target="_blank" rel="noreferrer">
                  Build
                </a>
              </div>
            </div>
          </article>
          <article style={styles.emptyCard}>
            <p style={styles.projectType}>Small Project 01</p>
            <h3 style={styles.projectTitle}>Coming Soon</h3>
            <p style={styles.projectDescription}>
              작은 범위에서 하나의 핵심 게임 메커니즘을 검증하는 프로젝트를 추가할 예정입니다.
            </p>
          </article>

          <article style={styles.emptyCard}>
            <p style={styles.projectType}>Small Project 02</p>
            <h3 style={styles.projectTitle}>Coming Soon</h3>
            <p style={styles.projectDescription}>
              첫 번째 작은 프로젝트와 다른 기술 포인트를 보여주는 프로젝트를 추가할 예정입니다.
            </p>
          </article>

          <article style={styles.emptyCard}>
            <p style={styles.projectType}>Main Project</p>
            <h3 style={styles.projectTitle}>Coming Soon</h3>
            <p style={styles.projectDescription}>
              더 긴 플레이 루프와 구조화된 시스템을 보여주는 메인 프로젝트를 추가할 예정입니다.
            </p>
          </article>
        </section>
      </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "64px",
    fontFamily: "Arial, sans-serif",
    background: "#0f1117",
    color: "#f5f5f5",
  },
  hero: {
    maxWidth: "900px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#9ca3af",
    letterSpacing: "1px",
  },
  title: {
    marginTop: "16px",
    fontSize: "48px",
    lineHeight: "1.15",
    maxWidth: "850px",
    color: "#ffffff",
  },
  description: {
    marginTop: "24px",
    fontSize: "20px",
    lineHeight: "1.7",
    color: "#c7c7c7",
    maxWidth: "760px",
  },
  section: {
    marginTop: "72px",
  },
  sectionTitle: {
    fontSize: "32px",
    marginBottom: "24px",
    color: "#ffffff",
  },
  card: {
    maxWidth: "900px",
    padding: "32px",
    borderRadius: "24px",
    background: "#181b24",
    border: "1px solid #2a2f3a",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
  },
  projectType: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#9ca3af",
  },
  projectTitle: {
    marginTop: "8px",
    fontSize: "32px",
    color: "#ffffff",
  },
  projectDescription: {
    marginTop: "16px",
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#d1d5db",
  },
  subTitle: {
    marginTop: "28px",
    fontSize: "18px",
    color: "#ffffff",
  },
  list: {
    marginTop: "12px",
    lineHeight: "1.8",
    color: "#d1d5db",
  },
  mediaBox: {
    width: "100%",
    aspectRatio: "16 / 9",
    marginBottom: "32px",
    borderRadius: "20px",
    overflow: "hidden",
    background: "#111827",
    border: "1px solid #333b4f",
  },
  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  },
  mediaText: {
    color: "#9ca3af",
    fontSize: "16px",
    fontWeight: "700",
  },
  buttonRow: {
    display: "flex",
    gap: "12px",
    marginTop: "32px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 16px",
    borderRadius: "999px",
    border: "1px solid #3b4252",
    color: "#f5f5f5",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "700",
    background: "#111827",
  },
  emptyCard: {
    maxWidth: "900px",
    marginTop: "24px",
    padding: "32px",
    borderRadius: "24px",
    background: "#131722",
    border: "1px dashed #333b4f",
  },
};

export default App;