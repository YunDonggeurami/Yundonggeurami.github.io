function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="포트폴리오 맨 위로">
          <span className="wordmark-mark" aria-hidden="true">Y</span>
          <span>YUN / PORTFOLIO</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#featured">대표 프로젝트</a>
          <a href="#work">다른 작업</a>
          <a href="https://github.com/YunDonggeurami" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span><span className="sr-only">새 창</span>
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> 대표 프로젝트</p>
            <p className="project-name">MY LITTLE GRAND PRIX</p>
            <h1 id="hero-title">
              F1 레이스를 실제 방 안에서 다시 보는
              <strong>Quest 3 MR 리플레이</strong>
            </h1>
            <p className="hero-lede">
              준비된 과거 레이스 데이터를 여러 차량의 공통 시간축으로 재생하고,
              선택 이벤트를 Quest 3 패스스루 공간에 디오라마로 배치한 팀 프로젝트입니다.
            </p>
            <ul className="tag-list" aria-label="주요 기술">
              <li>Quest 3</li>
              <li>Unity</li>
              <li>C#</li>
              <li>OpenXR</li>
              <li>REST</li>
            </ul>
            <div className="hero-actions">
              <a className="button button-primary" href="/f1/">기술 사례 보기</a>
              <a className="button" href="/f1/#demo">시연 영상 보기</a>
            </div>
          </div>

          <a className="hero-media" href="/f1/#demo" aria-label="MY LITTLE GRAND PRIX Quest 3 시연 영상 보기">
            <img
              src="/images/mlgp-quest3-demo-poster.webp"
              alt="Quest 3 패스스루 공간에 배치된 MY LITTLE GRAND PRIX 리플레이 디오라마"
              width="1280"
              height="720"
            />
            <span className="media-caption">QUEST 3 DEMO</span>
            <span className="play-button" aria-hidden="true">▶</span>
          </a>
        </section>

        <section id="featured" className="project-summary" aria-labelledby="role-title">
          <div>
            <p className="section-kicker">담당 영역</p>
            <h2 id="role-title">Quest 3 통합과 리플레이 백엔드</h2>
          </div>
          <p>
            Quest 3 실행 환경과 MR 장면 통합을 맡았고, Unity가 사용할 레이스 데이터를
            catalog·manifest·chunk API로 전달하는 companion backend를 구현했습니다.
          </p>
          <a className="text-link" href="/f1/#contribution">담당 내용 자세히 보기 <span aria-hidden="true">→</span></a>
        </section>

        <section id="work" className="section" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-kicker">다른 작업</p>
            <h2 id="work-title">Pet Log</h2>
          </div>
          <article className="petlog-card">
            <div className="petlog-media">
              <img
                src="/images/petlog-main.png"
                alt="도시 공간에서 동물을 촬영하고 수집하는 Pet Log 게임 장면"
                width="2560"
                height="1600"
                loading="lazy"
              />
              <span>개인 프로젝트 · 개발 중</span>
            </div>
            <div className="petlog-copy">
              <p className="section-kicker">Unity 3D 수집형 어드벤처</p>
              <h3>도시에서 동물을 발견하고 기록하는 게임</h3>
              <p>동물을 촬영해 도감과 게임 내 SNS에 남기는 탐험 경험을 구현하고 있습니다.</p>
              <ul>
                <li>Raycast 기반 촬영 판정</li>
                <li>수집 기록과 SNS UI 흐름</li>
                <li>UI를 제외한 화면 캡처</li>
              </ul>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="section-kicker">YUN / XR &amp; GAMEPLAY</p>
          <h2>데이터와 공간을<br />플레이 가능한 경험으로.</h2>
        </div>
        <div className="footer-links">
          <a href="/f1/">F1 기술 사례</a>
          <a href="https://github.com/YunDonggeurami" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="#top">맨 위로 ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
