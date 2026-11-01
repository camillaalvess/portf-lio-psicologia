
import { useState } from "react";
import "./App.css";

const whatsappLink =
  "https://wa.me/5583996090031?text=Ol%C3%A1%2C%20Nathalia!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20psicol%C3%B3gico.";

const instagramNathalia =
  "https://www.instagram.com/psinathaliabarbosa/";

const instagramPsiComJogos =
  "https://www.instagram.com/psi.comjogospb/";

const instagramFormacoes =
  "https://www.instagram.com/desenvolvimento.emjogos/";

const linkTDAHFlow = "https://pay.kiwify.com.br/5EmXKg8";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="social-icon"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="social-icon"
    >
      <path
        d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.5c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.3-.1.5.5.9 1.2 1.6 2.1 2.1.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.2.3.4 0 .3-.1 1-.6 1.4-.5.5-1.2.7-1.9.5-1.1-.3-2.4-.9-3.8-2.3-1.2-1.2-2-2.8-2.1-3.6-.1-.7.2-1.3.6-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="arrow-icon"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AdolescentIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="15"
        r="7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 39V35C12 28.9 17 24 23 24H25C31 24 36 28.9 36 35V39"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 27L24 33L30 27"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13L12 15L15 11M33 9L35 12L39 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AdultIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="13"
        r="7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 40V35C10 28.4 15.4 23 22 23H26C32.6 23 38 28.4 38 35V40"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 25L24 31L31 25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 36H30"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GamesIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="15"
        width="32"
        height="20"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16 25H24M20 21V29"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="31" cy="23" r="1.5" fill="currentColor" />
      <circle cx="34" cy="27" r="1.5" fill="currentColor" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          aria-label="Nathalia Barbosa - página inicial"
          onClick={closeMenu}
        >
          <img
            src="/images/logo-nathalia-horizontal.png"
            alt="Nathalia Barbosa — Psicóloga"
            className="brand-logo"
          />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`navigation ${menuOpen ? "navigation-open" : ""}`}
        >
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
          <a href="#atuacao" onClick={closeMenu}>Atuação</a>
          <a href="#cursos" onClick={closeMenu}>Cursos e recursos</a>
          <a href="#abordagem" onClick={closeMenu}>Abordagem</a>
          <a className="nav-contact" href="#contato" onClick={closeMenu}>
            Vamos conversar <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        {/* INÍCIO */}
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              PSICOLOGIA · PALESTRANTE · EMPREENDEDORA
            </span>

            <h1>
              Um espaço para
              <br />
              <span>ser você,</span>
              <br />
              por inteiro.
            </h1>

            <p className="hero-description">
              Transformando conhecimento científico em estratégias
              práticas para pessoas, famílias, escolas e profissionais.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Agende uma conversa
              </a>

              <a className="text-link" href="#sobre">
                Conheça meu trabalho <ArrowIcon />
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-backdrop" />

            <div className="photo-frame">
              <img
                src="/images/nathalia-barbosa.jpeg"
                alt="Nathalia Barbosa, psicóloga"
                className="nathalia-photo"
              />
            </div>

            <div className="photo-caption">
              <span className="caption-mark">“</span>
              <div>
                <strong>Nathalia Barbosa</strong>
                <span>Psicóloga · CRP 13/6589</span>
              </div>
            </div>

            <div className="floating-seal">
              <span>ESCUTA</span>
              <span className="seal-dot">✳</span>
              <span>ACOLHIMENTO</span>
            </div>

            <div className="decorative-circle circle-one" />
            <div className="decorative-circle circle-two" />
          </div>

          <div className="hero-bottom-label" />
        </section>

        {/* SOBRE MIM — COM FOTO OFICIAL */}
        <section className="intro-section" id="sobre">
          <div className="section-wrap intro-grid">
            <div className="section-kicker">
              <span className="kicker-number">01 /</span>
              <span>UM POUCO SOBRE MIM</span>
            </div>

            <div className="intro-content">
              <div className="intro-photo-grid">
                <div className="intro-photo-wrap">
                  <img
                    src="/images/foto-oficial.jpeg"
                    alt="Nathalia Barbosa, psicóloga"
                    className="intro-photo"
                  />

                  <span className="intro-photo-caption">
                    Nathalia Barbosa · Psicóloga
                  </span>
                </div>

                <div className="intro-text-content">
                  <h2>
                    Olá, me chamo{" "}
                    <span>Nathalia Barbosa</span>
                  </h2>

                  <div className="intro-text-grid">
                    <p>
                      Sou psicóloga há 12 anos e, ao longo dessa trajetória,
                      compreendi que cada pessoa precisa de estratégias que
                      façam sentido para a sua realidade.
                    </p>

                    <p>
                      Minha história ganhou um novo significado quando recebi
                      o diagnóstico de TDAH na vida adulta, após enfrentar
                      episódios de depressão e períodos de intensa exaustão.
                      Essa experiência ampliou meu olhar como profissional e
                      fortaleceu ainda mais meu propósito: ajudar pessoas a
                      compreenderem seu funcionamento e desenvolverem
                      estratégias para viver com mais qualidade de vida.
                    </p>

                    <p>
                      Além da prática clínica, também empreendo por meio da
                      Psi com Jogos, desenvolvendo e selecionando recursos
                      terapêuticos que tornam o processo de aprendizagem e
                      intervenção mais dinâmico e significativo.
                    </p>

                    <p>
                      Em breve, lançarei também o curso O Invisível em Jogo,
                      ampliando meu compromisso com a formação de profissionais
                      que desejam utilizar os jogos de forma estratégica na
                      prática clínica.
                    </p>

                    <p>
                      Meu trabalho é construir, junto com você, um ambiente
                      seguro de escuta e acolhimento, respeitando seu tempo,
                      suas experiências e suas necessidades.
                    </p>
                  </div>

                  <a className="underlined-link" href="#contato">
                    Vamos nos conhecer? <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA E FORMAÇÃO */}
        <section className="experience-section" id="experiencia">
          <div className="section-wrap">
            <div className="experience-heading">
              <div className="section-kicker">
                <span className="kicker-number">02 /</span>
                <span>EXPERIÊNCIA E FORMAÇÃO</span>
              </div>

              <h2>
                Conhecimento que se transforma em{" "}
                <span>cuidado.</span>
              </h2>
            </div>

            <div className="experience-list">
              <p><span aria-hidden="true">✔</span>Mais de 12 anos de experiência clínica</p>
              <p><span aria-hidden="true">✔</span>Foco em TDAH e funções executivas</p>
              <p><span aria-hidden="true">✔</span>Vivência pessoal com o TDAH na vida adulta</p>
              <p><span aria-hidden="true">✔</span>Atuação baseada em evidências científicas</p>
              <p><span aria-hidden="true">✔</span>Estratégias práticas para aplicação no dia a dia</p>
              <p><span aria-hidden="true">✔</span>Experiência com jogos aplicados à prática clínica</p>
            </div>

            <div className="education-note">
              <h3>Formação e atuação</h3>
              <p>
                Graduação em Psicologia pelo UNIPÊ e pós-graduações em
                Saúde Mental e Dependência Química, e em TCC com Crianças
                e Adolescentes. Fundadora da Psi com Jogos, com atuação
                em recursos terapêuticos, capacitações e palestras.
              </p>
            </div>
          </div>
        </section>

        {/* ATUAÇÃO */}
        <section className="practice-section" id="atuacao">
          <div className="section-wrap practice-inner">
            <div className="practice-heading">
              <div className="section-kicker">
                <span className="kicker-number">03 /</span>
                <span>COMO POSSO TE ACOMPANHAR</span>
              </div>

              <h2>
                Cuidado psicológico que considera{" "}
                <span>quem você é.</span>
              </h2>

              <p>
                Cada processo é construído de maneira individualizada,
                considerando o momento de vida, as necessidades e os
                objetivos de cada pessoa.
              </p>
            </div>

            <div className="practice-cards">
              <article className="practice-card">
                <span className="card-index">01</span>

                <div className="card-icon icon-adolescent">
                  <AdolescentIcon />
                </div>

                <h3>Adolescentes</h3>

                <p>
                  Um espaço para compreender emoções, atravessar mudanças,
                  fortalecer a autoestima e desenvolver recursos para os
                  desafios dessa fase.
                </p>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Saiba mais <ArrowIcon />
                </a>
              </article>

              <article className="practice-card featured-card">
                <span className="card-index">02</span>

                <div className="card-icon icon-adult">
                  <AdultIcon />
                </div>

                <h3>Adultos</h3>

                <p>
                  Acompanhamento para olhar com mais cuidado para sentimentos,
                  relações, padrões de comportamento e questões que afetam
                  o bem-estar.
                </p>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Saiba mais <ArrowIcon />
                </a>
              </article>

              <article className="practice-card">
                <span className="card-index">03</span>

                <div className="card-icon icon-flower">
                  <GamesIcon />
                </div>

                <h3>Orientação e recursos</h3>

                <p>
                  Palestras, capacitações e recursos terapêuticos voltados
                  ao desenvolvimento e à prática profissional.
                </p>

                <a
                  href={instagramPsiComJogos}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conheça a Psi com Jogos <ArrowIcon />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* CURSOS E RECURSOS */}
        <section className="courses-section" id="cursos">
          <div className="section-wrap courses-inner">
            <div className="courses-heading">
              <div className="section-kicker">
                <span className="kicker-number">04 /</span>
                <span>CONHEÇA MEU TRABALHO</span>
              </div>

              <h2>
                Conhecimento que se transforma em{" "}
                <span>prática.</span>
              </h2>

              <p>
                Ciência, experiência clínica e estratégias práticas para
                apoiar pessoas, famílias, escolas e profissionais.
              </p>
            </div>

            <div className="courses-grid">
              <article className="course-card course-card-featured">
                <span className="course-category">MATERIAL PRÁTICO</span>

                <div className="course-symbol" aria-hidden="true">✳</div>

                <h3>TDAH Flow</h3>

                <p className="course-highlight">
                  Compreender para desenvolver novas estratégias.
                </p>

                <p>
                  Um material desenvolvido para auxiliar pessoas com TDAH
                  a compreenderem seu funcionamento e desenvolverem
                  estratégias para organização, planejamento e rotina.
                </p>

                <a
                  className="course-link"
                  href={linkTDAHFlow}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conhecer o material <ArrowIcon />
                </a>
              </article>

              <article className="course-card">
                <span className="course-category">
                  DESENVOLVIMENTO PROFISSIONAL
                </span>

                <div className="course-symbol" aria-hidden="true">↗</div>

                <h3>Cursos e formações</h3>

                <p className="course-highlight">
                  Conhecimento para ampliar possibilidades.
                </p>

                <p>
                  Capacitações para psicólogos e profissionais que desejam
                  aprofundar seus conhecimentos e transformar a teoria em
                  estratégias aplicáveis à prática clínica.
                </p>

                <a
                  className="course-link"
                  href={instagramFormacoes}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conhecer as formações <ArrowIcon />
                </a>
              </article>

              <article className="course-card">
                <span className="course-category">JOGOS E RECURSOS</span>

                <div className="course-symbol" aria-hidden="true">❋</div>

                <h3>Psi com Jogos</h3>

                <p className="course-highlight">
                  Recursos que enriquecem as intervenções.
                </p>

                <p>
                  Jogos e recursos terapêuticos selecionados para
                  potencializar intervenções clínicas e educacionais
                  e contribuir para o desenvolvimento de habilidades.
                </p>

                <a
                  className="course-link"
                  href={instagramPsiComJogos}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conhecer a loja <ArrowIcon />
                </a>
              </article>

              <article className="course-card">
                <span className="course-category">FORMAÇÃO CLÍNICA</span>

                <div className="course-symbol" aria-hidden="true">✳</div>

                <h3>
                  Formação e Desenvolvimento na Prática Clínica com Jogos
                </h3>

                <p className="course-highlight">
                  Jogos como recursos na prática clínica.
                </p>

                <p>
                  Como monitora do programa, Nathalia contribui para a
                  formação de psicólogos e estudantes interessados em
                  utilizar os jogos de maneira estratégica como ferramentas
                  de avaliação e intervenção clínica.
                </p>

                <a
                  className="course-link"
                  href={instagramFormacoes}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conhecer o programa <ArrowIcon />
                </a>
              </article>
            </div>

            <div className="courses-footer">
              <p>
                Conhecimento científico, recursos práticos e novas
                possibilidades para aprender e desenvolver.
              </p>

              <a
                className="button button-primary"
                href={instagramPsiComJogos}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conheça meus projetos <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ABORDAGEM */}
        <section className="approach-section section-wrap" id="abordagem">
          <div className="approach-decoration" aria-hidden="true">
            <span>+</span>
            <span>✳</span>
            <span>+</span>
          </div>

          <div className="approach-content">
            <div className="section-kicker">
              <span className="kicker-number">05 /</span>
              <span>MINHA ABORDAGEM</span>
            </div>

            <h2>
              Compreender para transformar.{" "}
              <span>Um passo de cada vez.</span>
            </h2>

            <p>
              Minha prática clínica tem como base a Terapia
              Cognitivo-Comportamental (TCC), uma abordagem que ajuda a
              compreender as relações entre pensamentos, emoções e
              comportamentos.
            </p>

            <p>
              O processo é colaborativo e individualizado. Juntos,
              podemos identificar padrões, desenvolver estratégias e
              construir caminhos mais alinhados com o que faz sentido
              para você.
            </p>

            <a
              className="button button-primary"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vamos conversar <ArrowIcon />
            </a>
          </div>

          <div className="approach-aside">
            <span className="aside-quote">“</span>

            <p>
              Conheça todas as teorias, domine todas as técnicas, mas ao tocar
              uma alma humana, seja apenas outra alma humana.
            </p>

            <span className="aside-signature">Nathalia Barbosa</span>
          </div>
        </section>

        {/* CONTATO */}
        <section className="contact-section" id="contato">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <span className="contact-eyebrow">
                SEU PRÓXIMO PASSO COMEÇA AQUI
              </span>

              <h2>
                Vamos conversar
                <br />
                <span>com tranquilidade?</span>
              </h2>

              <p>
                Se você deseja saber mais sobre o atendimento, entre em
                contato. Será um prazer conversar com você.
              </p>

              <a
                className="button button-light"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Fale comigo pelo WhatsApp
              </a>
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-label">E-MAIL</span>
                <a href="mailto:nathaliab.psicologa@gmail.com">
                  nathaliab.psicologa@gmail.com
                </a>
              </div>

              <div className="contact-detail">
                <span className="detail-label">WHATSAPP</span>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (83) 9 9609-0031
                </a>
              </div>

              <div className="contact-detail">
                <span className="detail-label">ATENDIMENTO</span>
                <p>Presencial em João Pessoa – PB</p>
                <p>On-line em todo o Brasil</p>
              </div>

              <div className="contact-socials">
                <a
                  href={instagramNathalia}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Nathalia Barbosa"
                >
                  <InstagramIcon />
                  <span>@psinathaliabarbosa</span>
                </a>

                <a
                  href={instagramFormacoes}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do projeto de formação"
                >
                  <InstagramIcon />
                  <span>@desenvolvimento.emjogos</span>
                </a>

                <a
                  href={instagramPsiComJogos}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Psi com Jogos"
                >
                  <InstagramIcon />
                  <span>@psi.comjogospb</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a
            href="#inicio"
            className="footer-brand"
            aria-label="Voltar ao início"
          >
            <img
              src="/images/logo-nathalia-horizontal.png"
              alt="Nathalia Barbosa — Psicóloga"
            />
          </a>

          <p>Um espaço de escuta, acolhimento e cuidado.</p>

          <a className="back-top" href="#inicio">
            Voltar ao topo ↑
          </a>
        </div>

        <div className="footer-bottom section-wrap">
          <span>
            © {new Date().getFullYear()} Nathalia Barbosa. Todos os
            direitos reservados.
          </span>

          <span>Psicologia com ética, respeito e acolhimento.</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entre em contato pelo WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

export default App;
