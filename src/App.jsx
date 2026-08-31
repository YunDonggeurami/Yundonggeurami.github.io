function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="포트폴리오 맨 위로">
          <span className="wordmark-mark" aria-hidden="true">Y</span>
          <span>YUN / XR PORTFOLIO</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#featured">Featured</a>
          <a href="#role">My Role</a>
          <a href="#work">Work</a>
          <a href="/f1/">F1 Case Study</a>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Featured XR Project · 2026</p>
            <h1 id="hero-title">
              레이스 데이터를
              <strong>Quest 3의 공간 경험으로.</strong>
            </h1>
            <p className="hero-lede">
              과거 F1 리플레이를 공간형 MR 경험으로 재구성한 팀 프로젝트입니다.
              저는 Meta Quest 3 관련 구현·실기기 통합과 companion backend를 담당했습니다.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/f1/">F1 기술 사례 보기</a>
              <a className="button" href="/f1/#demo">Quest 3 시연 영상</a>
              <a
                className="button button-quiet"
                href="https://github.com/SiyeolKwak/F1_XR_Visualizer"
                target="_blank"
                rel="noreferrer"
              >팀 GitHub <span aria-hidden="true">↗</span><span className="sr-only">새 창</span></a>
            </div>
            <dl className="hero-facts" aria-label="대표 프로젝트 요약">
              <div><dt>Platform</dt><dd>Meta Quest 3</dd></div>
              <div><dt>Stack</dt><dd>Unity · OpenXR</dd></div>
              <div><dt>My role · confirmed</dt><dd>Quest 3 · Backend</dd></div>
            </dl>
          </div>

          <a className="hero-media" href="/f1/#demo" aria-label="MY LITTLE GRAND PRIX Quest 3 시연 영상 보기">
            <img
              src="/images/mlgp-quest3-demo-poster.webp"
              alt="Quest 3 패스스루 공간에 배치된 MY LITTLE GRAND PRIX 리플레이 디오라마"
              width="1280"
              height="720"
            />
            <span className="media-kicker">MY LITTLE GRAND PRIX</span>
            <span className="play-button" aria-hidden="true">▶</span>
          </a>
        </section>

        <section id="featured" className="section featured-section" aria-labelledby="featured-title">
          <div className="section-heading">
            <p className="section-index">01 / Featured project</p>
            <div>
              <p className="section-kicker">Team project · In development</p>
              <h2 id="featured-title">MY LITTLE GRAND PRIX</h2>
            </div>
          </div>

          <div className="featured-panel">
            <div className="featured-copy">
              <span className="status-label">Unity · OpenXR · Meta Quest</span>
              <h3>데이터 리플레이와 공간 연출을 하나의 경험으로 연결했습니다.</h3>
              <p>
                companion REST 서비스가 제공하는 과거 레이스 데이터셋을 공유 시간축에서 재생하고,
                선택한 이벤트를 실제 방의 Hero 지점에 MR 디오라마로 배치합니다. 상세 페이지에서는
                저장소로 확인한 구현, 시연 영상에서 관찰한 장면, 실험 상태를 분리해 공개합니다.
              </p>
              <div className="inline-actions">
                <a className="text-link" href="/f1/">전체 기술 사례 읽기 <span aria-hidden="true">→</span></a>
                <a className="text-link" href="/f1/#architecture">아키텍처 보기 <span aria-hidden="true">→</span></a>
              </div>
              <p className="claim-note">
                OpenF1 직접·실시간 연동, Quest 성능 수치, Entry/Exit 벽 관통 보장은 공개 주장에 포함하지 않습니다.
              </p>
            </div>

            <ol className="system-flow" aria-label="대표 프로젝트 시스템 흐름">
              <li>
                <span className="flow-number">01</span>
                <div>
                  <span className="evidence-tag tag-confirmed">작성자 확인</span>
                  <h3>Companion backend</h3>
                  <p>catalog·dataset·manifest·chunk REST 계약으로 replay dataset을 전달합니다.</p>
                </div>
              </li>
              <li>
                <span className="flow-number">02</span>
                <div>
                  <span className="evidence-tag tag-repository">저장소 확인</span>
                  <h3>Shared replay time</h3>
                  <p>로드된 다중 차량을 하나의 source-time에서 pause·speed·seek합니다.</p>
                </div>
              </li>
              <li>
                <span className="flow-number">03</span>
                <div>
                  <span className="evidence-tag tag-repository">저장소 확인</span>
                  <h3>Room-scale presentation</h3>
                  <p>이벤트 로컬 트랙을 Hero 중심의 MR 디오라마로 강체 배치합니다.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section id="role" className="section role-section" aria-labelledby="role-title">
          <div className="section-heading">
            <p className="section-index">02 / My role</p>
            <div>
              <p className="section-kicker">User-confirmed contribution</p>
              <h2 id="role-title">Quest 3와 backend를 맡았습니다.</h2>
            </div>
          </div>

          <div className="role-grid">
            <article className="role-card">
              <span className="role-code">XR–01</span>
              <div>
                <span className="evidence-tag tag-confirmed">작성자 확인</span>
                <h3>Meta Quest 3 Integration</h3>
                <p>
                  Quest 3 관련 구현과 MR 실기기 통합을 담당했습니다. 패스스루 공간에서 리플레이 스테이지와
                  이벤트 연출이 동작하는 장면은 제공된 시연 영상에서 확인할 수 있습니다.
                </p>
                <a className="text-link" href="/f1/#demo">시연 영상 보기 <span aria-hidden="true">→</span></a>
              </div>
            </article>
            <article className="role-card">
              <span className="role-code">BE–02</span>
              <div>
                <span className="evidence-tag tag-confirmed">작성자 확인</span>
                <h3>Companion REST Backend</h3>
                <p>
                  Unity 클라이언트가 소비하는 replay dataset 전달 경로를 담당했습니다. catalog부터 ready chunk까지
                  명시적인 REST 계약으로 나눠 재생 데이터가 단계적으로 로드되도록 구성했습니다.
                </p>
                <a className="text-link" href="/f1/#pipeline">데이터 흐름 보기 <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>

          <div className="evidence-band" aria-label="포트폴리오 근거 구분">
            <article>
              <span className="evidence-dot dot-repository" aria-hidden="true" />
              <h3>저장소 확인</h3>
              <p>호출점·씬 연결·활성 플랫폼 설정으로 확인한 구현</p>
            </article>
            <article>
              <span className="evidence-dot dot-observed" aria-hidden="true" />
              <h3>시연 관찰</h3>
              <p>제공된 Quest 3 편집 영상에서 보이는 실행 장면</p>
            </article>
            <article>
              <span className="evidence-dot dot-confirmed" aria-hidden="true" />
              <h3>작성자 확인</h3>
              <p>Quest 3 관련 구현과 companion backend 개인 담당 범위</p>
            </article>
          </div>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-index">03 / Other work</p>
            <div>
              <p className="section-kicker">Gameplay systems</p>
              <h2 id="work-title">다른 작업과 기술 관심사</h2>
            </div>
          </div>

          <div className="work-grid">
            <article className="petlog-card">
              <div className="petlog-media">
                <img
                  src="/images/petlog-main.png"
                  alt="도시 공간에서 동물을 촬영하고 수집하는 Pet Log 게임 장면"
                  width="2560"
                  height="1600"
                  loading="lazy"
                />
                <span>In development</span>
              </div>
              <div className="petlog-copy">
                <p className="section-kicker">Unity gameplay · Personal project</p>
                <h3>Pet Log</h3>
                <p>
                  도시를 탐험하며 동물을 발견하고 촬영한 뒤, 게임 내 SNS에 기록하는 3D 수집형 어드벤처입니다.
                </p>
                <ul>
                  <li>Raycast 기반 동물 감지와 촬영 판정</li>
                  <li>Set Log 게시글·친구 반응 UI 흐름</li>
                  <li>UI를 제외한 프레임 캡처와 저장</li>
                </ul>
              </div>
            </article>

            <aside className="focus-card" aria-labelledby="focus-title">
              <p className="section-kicker">Current focus</p>
              <h3 id="focus-title">시스템 사이의 경계를 연결하는 개발</h3>
              <p>
                클라이언트와 backend, 논리 상태와 시각 표현, 화면 UX와 공간 UX 사이의 계약을 명확히 만드는 데 관심이 있습니다.
              </p>
              <ul className="stack-list" aria-label="주요 기술">
                <li>Unity 6</li>
                <li>C#</li>
                <li>Meta Quest 3</li>
                <li>OpenXR</li>
                <li>REST / JSON</li>
                <li>Android</li>
              </ul>
              <a className="text-link" href="https://github.com/YunDonggeurami" target="_blank" rel="noreferrer">
                Personal GitHub <span aria-hidden="true">↗</span><span className="sr-only">새 창</span>
              </a>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="section-kicker">Selected work / 2026</p>
          <h2>Build the system.<br />Show the evidence.</h2>
        </div>
        <div className="footer-links">
          <a href="/f1/">F1 Case Study</a>
          <a href="/f1/#demo">Quest 3 Demo</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
