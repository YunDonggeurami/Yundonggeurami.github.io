const projects = [
  {
    title: "Pet Log",
    type: "3D Low Poly 탐험형 동물 촬영·수집 게임",
    status: "In Progress",
    image: "/images/petlog-main.png",
    description:
        "도시를 탐험하며 동물을 발견하고, 카메라로 촬영한 뒤 게임 내 SNS인 Set Log에 기록을 업로드하는 짧은 수집형 어드벤처 게임입니다.",
    roles: [
      "Raycast 기반 동물 감지",
      "촬영 성공/실패 판정",
      "Set Log 게시글 및 친구 반응 UI 연동",
      "UI 제외 스크린샷 저장",
    ],
    trouble:
        "촬영 직후 UI가 스크린샷에 포함되는 문제가 발생했습니다. UI를 비활성화한 뒤 WaitForEndOfFrame으로 프레임 렌더링 종료 시점을 기다린 후 캡처하도록 수정했습니다.",
    links: {
      github: "#",
      video: "#",
      build: "#",
    },
  },
  {
    title: "Small Project 01",
    type: "작은 프로젝트",
    status: "Planned",
    image: null,
    description:
        "작은 범위에서 하나의 핵심 게임 메커니즘을 검증하는 프로젝트를 추가할 예정입니다.",
    roles: ["핵심 기능 2~3개 구현 예정", "트러블슈팅 1개 기록 예정", "30초 영상 제작 예정"],
    trouble: null,
    links: null,
  },
  {
    title: "Small Project 02",
    type: "작은 프로젝트",
    status: "Planned",
    image: null,
    description:
        "첫 번째 작은 프로젝트와 다른 기술 포인트를 보여주는 프로젝트를 추가할 예정입니다.",
    roles: ["중복되지 않는 기술 주제 선택", "핵심 코드 일부 정리", "GIF 2~3개 제작 예정"],
    trouble: null,
    links: null,
  },
  {
    title: "MY LITTLE GRAND PRIX",
    type: "Unity / Meta Quest / Mixed Reality",
    status: "In Progress",
    image: null,
    mediaLabel: "Quest MR Capture Pending",
    description:
        "과거 F1 데이터셋을 하나의 시간축에서 다중 차량 리플레이로 재구성하고, 선택한 이벤트를 실제 방의 Hero 지점에 MR 디오라마로 다시 배치한 기술 프로젝트입니다.",
    rolesTitle: "기술 하이라이트 · 개인 담당 범위 확인 필요",
    roles: [
      "manifest/chunk 기반 다중 차량 replay pipeline",
      "AR plane 기반 Entry · Exit · Hero room layout",
      "logical replay와 room presentation transform 분리",
      "event-local two-car RoomDiorama",
    ],
    trouble:
        "현재 기본 디오라마는 Hero 중심 강체 배치이며, Entry와 Exit 벽을 차량이 반드시 통과하는 구조는 아닙니다. setup preview와 실제 vehicle mapper를 하나의 검증된 path로 통합하는 것이 다음 핵심 개선 과제입니다.",
    links: {
      github: "https://github.com/SiyeolKwak/F1_XR_Visualizer",
      githubLabel: "Team GitHub",
      caseStudy: "/f1/",
    },
  },
];

function App() {
  return (
      <main style={styles.page} className="page">
        <section style={styles.hero}>
          <p style={styles.label}>Unity Gameplay Portfolio</p>

          <h1 style={styles.title} className="hero-title">
            Unity와 C#으로 게임 시스템을 구현하는 개발자 포트폴리오
          </h1>

          <p style={styles.description}>
            카메라 촬영, UI 흐름, 저장 시스템, 플레이어 상호작용을 중심으로
            직접 구현한 기능과 문제 해결 과정을 정리합니다.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>

          {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
          ))}
        </section>
      </main>
  );
}

function ProjectCard({ project }) {
  const isPlanned = project.status === "Planned";

  return (
      <article style={isPlanned ? styles.emptyCard : styles.card} className="project-card">
        {project.image ? (
            <div style={styles.mediaBox}>
              <img
                  src={project.image}
                  alt={`${project.title} 대표 이미지`}
                  style={styles.projectImage}
              />
            </div>
        ) : (
            <div style={styles.placeholderBox}>
              <p style={styles.mediaText}>{project.mediaLabel ?? "Coming Soon"}</p>
            </div>
        )}

        <div style={styles.cardHeader}>
          <p style={styles.projectType}>{project.type}</p>
          <span style={isPlanned ? styles.plannedBadge : styles.progressBadge}>
          {project.status}
        </span>
        </div>

        <h3 style={styles.projectTitle}>{project.title}</h3>

        <p style={styles.projectDescription}>{project.description}</p>

        <h4 style={styles.subTitle}>{project.rolesTitle ?? "담당 / 예정 구현"}</h4>
        <ul style={styles.list}>
          {project.roles.map((role) => (
              <li key={role}>{role}</li>
          ))}
        </ul>

        {project.trouble && (
            <>
              <h4 style={styles.subTitle}>문제 해결</h4>
              <p style={styles.projectDescription}>{project.trouble}</p>
            </>
        )}

        {project.links && (
            <div style={styles.buttonRow}>
              {project.links.caseStudy && (
                  <a
                      style={styles.button}
                      href={project.links.caseStudy}
                      target="_blank"
                      rel="noreferrer"
                  >
                    Case Study
                  </a>
              )}
              {project.links.github && (
                  <a
                      style={styles.button}
                      href={project.links.github}
                      target={project.links.github === "#" ? undefined : "_blank"}
                      rel={project.links.github === "#" ? undefined : "noreferrer"}
                  >
                    {project.links.githubLabel ?? "GitHub"}
                  </a>
              )}
              {project.links.video && (
                  <a style={styles.button} href={project.links.video}>
                    Video
                  </a>
              )}
              {project.links.build && (
                  <a style={styles.button} href={project.links.build}>
                    Build
                  </a>
              )}
            </div>
        )}
      </article>
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
    marginTop: "24px",
    padding: "32px",
    borderRadius: "24px",
    background: "#181b24",
    border: "1px solid #2a2f3a",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
  },
  emptyCard: {
    maxWidth: "900px",
    marginTop: "24px",
    padding: "32px",
    borderRadius: "24px",
    background: "#131722",
    border: "1px dashed #333b4f",
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
  placeholderBox: {
    width: "100%",
    height: "180px",
    marginBottom: "32px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #232838, #111827)",
    border: "1px solid #333b4f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    alignItems: "center",
  },
  projectType: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#9ca3af",
  },
  progressBadge: {
    padding: "6px 10px",
    borderRadius: "999px",
    background: "#1f2937",
    color: "#d1d5db",
    fontSize: "12px",
    fontWeight: "700",
  },
  plannedBadge: {
    padding: "6px 10px",
    borderRadius: "999px",
    background: "#111827",
    color: "#9ca3af",
    fontSize: "12px",
    fontWeight: "700",
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
};

export default App;
