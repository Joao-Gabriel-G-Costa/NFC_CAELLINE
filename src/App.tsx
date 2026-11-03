const contactLinks = [
  { label: 'WhatsApp', description: 'Vamos conversar?', href: 'https://wa.me/5564981621002', icon: '✳', external: true },
  { label: 'Instagram', description: 'Acompanhe meu trabalho', href: 'https://www.instagram.com/caellinecosta/', icon: '◎', external: true },
  { label: 'E-mail', description: 'Envie uma mensagem', href: 'mailto:reabilitarfisioemovimento@gmail.com', icon: '✉', external: false },
];

const qualifications = [
  'Reabilitação em Neuropediatria',
  'Transtornos do Neurodesenvolvimento',
  'Therapy Taping — formação básica e avançada',
  'PediaSuit — formação básica e terapia intensiva com gaiola de habilidades',
];

const areas = [
  'Estimulação precoce',
  'Atrasos do desenvolvimento neuropsicomotor',
  'Transtorno do Espectro Autista (TEA)',
  'Síndrome de Down (Trissomia 21)',
  'Síndromes neurológicas',
];

function Section({ eyebrow, title, children, id }: { eyebrow: string; title: string; children: React.ReactNode; id?: string }) {
  return <section className="info-section" id={id}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children}</section>;
}

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Voltar ao início"><img src="/NFC_CAELLINE/assets/logo-original.jpeg" alt="Reabilitar Fisio e Movimento" /></a>
        <a className="header-contact" href="https://wa.me/5564981621002" target="_blank" rel="noopener noreferrer">Entre em contato <span aria-hidden="true">↗</span></a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Fisioterapia neurofuncional pediátrica · Minaçu, GO</p>
            <h1 id="hero-title">Cada conquista merece ser <em>celebrada.</em></h1>
            <p className="lead">Olá! Sou Caelline Costa Jardim, fisioterapeuta neurofuncional pediátrica. Meu trabalho é dedicado ao desenvolvimento, à autonomia e às conquistas de cada criança, respeitando seu tempo e sua individualidade.</p>
            <div className="hero-actions"><a className="button button-primary" href="https://wa.me/5564981621002" target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#sobre">Conheça meu trabalho</a></div>
          </div>
          <div className="portrait-frame"><img src="/NFC_CAELLINE/assets/caelline.jpeg" alt="Retrato profissional de Caelline Costa Jardim" fetchPriority="high" /><div className="portrait-note">Desenvolvimento <span>·</span> Autonomia <span>·</span> Conquista</div></div>
        </section>

        <div className="content-grid" id="sobre">
          <Section eyebrow="Minha trajetória" title="Formação e capacitação"><p>O cuidado começa com escuta, estudo e atenção às necessidades de cada criança e sua família.</p><ul className="detail-list">{qualifications.map(item => <li key={item}>{item}</li>)}</ul></Section>
          <Section eyebrow="Como trabalho" title="Abordagem terapêutica"><p>Uma atuação que valoriza a participação da criança, o vínculo com a família e o desenvolvimento de habilidades no dia a dia.</p><div className="highlight"><span className="highlight-label">Metodologia</span><strong>DIR/Floortime</strong></div></Section>
        </div>

        <Section eyebrow="Áreas de atuação" title="Cuidado em diferentes etapas do desenvolvimento" id="atuacao"><p>Atendimento voltado às necessidades do desenvolvimento infantil, incluindo:</p><ul className="area-list">{areas.map(item => <li key={item}>{item}</li>)}</ul></Section>

        <section className="contact-section" aria-labelledby="contact-title"><div><p className="eyebrow">Vamos nos conectar?</p><h2 id="contact-title">Estou aqui para conversar.</h2><p>Se quiser saber mais sobre meu trabalho, escolha o canal que for melhor para você.</p><p className="location">Atuação em Minaçu, Goiás.</p></div><div className="contact-list">{contactLinks.map(link => <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}><span className="contact-symbol" aria-hidden="true">{link.icon}</span><span><strong>{link.label}</strong><small>{link.description}</small></span><span className="contact-arrow" aria-hidden="true">↗</span></a>)}</div></section>
      </main>
      <footer>© {new Date().getFullYear()} Caelline Costa Jardim · Reabilitar Fisio e Movimento</footer>
    </div>
  );
}
