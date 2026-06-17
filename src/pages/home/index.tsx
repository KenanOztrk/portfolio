import SmokeButton from '../../components/SmokeButton.jsx'

const skills = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Oracle Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'UnoCSS', icon: 'https://cdn.simpleicons.org/unocss/333333' },
  { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'Ant Design', icon: 'https://cdn.simpleicons.org/antdesign/0170FE' },
  { name: 'TanStack Query', icon: 'https://cdn.simpleicons.org/reactquery/FF4154' },
  { name: 'Zustand' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'RTK Query', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Formik' },
  { name: 'Yup' },
  { name: 'Storybook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'SignalR', icon: 'https://cdn.simpleicons.org/dotnet/512BD4' },
  { name: 'WebSocket', icon: 'https://cdn.simpleicons.org/socketdotio/FFFFFF', invert: true },
  { name: 'Testing Library', icon: 'https://cdn.simpleicons.org/testinglibrary/E33332' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
]

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'BTS-GROUP',
    project: 'Olympos Automation',
    place: 'Ankara',
    date: '08.2024 - Güncel',
    description:
      'Olympos Automation ve diğer sanallaştırma/otomasyon ürünleri için yönetim paneli üzerinde çalıştım. Envanter yönetimi, observability, rol bazlı erişim, raporlama ve otomasyon modüllerinin arayüzlerini geliştirdim. API entegrasyonları, dinamik dashboardlar ve kullanıcı deneyimini iyileştiren bileşenler üzerinde odaklandım.',
    highlights: ['Olympos Automation yönetim paneli', 'Sanallaştırma ve otomasyon ürünleri', 'Dinamik dashboardlar ve API entegrasyonları'],
  },
  {
    role: 'Fullstack Developer',
    company: 'TCDD Teknik',
    place: 'Ankara',
    date: '03.2022 - 08.2024',
    description:
      'Kurum içi dijitalleşme süreçlerinde React.js, .NET Core ve Material UI ile büyük ölçekli web uygulamaları geliştirdim. LİMAN yönetim sistemi gibi çok ekranlı projelerde Figma tabanlı tasarımlardan pixel-perfect UI ürettim.',
    highlights: ['React.js ve .NET Core entegrasyonları', 'Karmaşık JSON veri modelleri', 'Kurumsal dijital dönüşüm ekranları'],
  },
  {
    role: 'Founder / Software Developer',
    company: 'Liventa Teknoloji',
    project: 'Liventa Kuyum',
    place: '',
    date: '2025 - Güncel',
    description:
      'Canli stok ve subeler arasi stok kontrolunu tek yerden yonetmek icin gelistirildi. Mobil satis, maliyet hesabi, derin ogrenme, raporlama, personel ve urun yonetimi modullerini kapsiyor.',
    highlights: ['Canli stok ve sube kontrolu', 'Mobil satis ve maliyet hesabi', 'Raporlama ve yonetim modulleri'],
  },
  {
    role: 'Founder / Software Developer',
    company: 'Liventa Teknoloji',
    project: 'Liventa Transfer',
    place: '',
    date: '2025 - Güncel',
    description:
      'Mailden veri alip otomatik is kaydi olusturur ve operasyonel sureci takibe alir. WhatsApp uzerinden yol bilgisi, is durumu ve detay bildirimleri gonderir.',
    highlights: ['Mailden is kaydi olusturma', 'WhatsApp ile bilgilendirme', 'Operasyon takibi'],
  },
]

const education = [
  'Kırıkkale Üniversitesi | 09.2009 - 06.2011 | Elektrik-Otomasyon',
  'Atılım Üniversitesi | 10.2012 - 12.2019 | Elektrik-Elektronik Mühendisliği (İngilizce)',
  'BilgeAdam Akademi | 03.2021 - 10.2021 | Fullstack Yazılım Eğitimi',
]

const certificates = [
  {
    issuer: 'BilgeAdam',
    title: 'Boost Yıldız Yazılımcı Sertifikası',
    date: '10.2021',
    file: '/certificates/bilgeadam-boost-yildiz-yazilimci.pdf',
    preview: '/certificates/previews/bilgeadam-boost-yildiz-yazilimci.pdf.png',
  },
  {
    issuer: 'RiseIn ICP.HUB TURKEY',
    title: 'Internet Computer Motoko Sertifikası',
    date: '06.2024',
    file: '/certificates/risein-icp-motoko.pdf',
    preview: '/certificates/previews/risein-icp-motoko.pdf.png',
  },
  {
    issuer: 'Coderspace',
    title: 'Product Management Sertifikası',
    date: '05.2025',
    file: '/certificates/coderspace-product-management.pdf',
    preview: '/certificates/previews/coderspace-product-management.pdf.png',
  },
]

const MailIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 6h16v12H4z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.6 4.8 9 4l2.2 5-1.5 1.1a10.8 10.8 0 0 0 4.2 4.2L15 12.8l5 2.2-.8 2.4c-.3.9-1.2 1.5-2.2 1.4C10.4 18.1 5.9 13.6 5.2 7c-.1-1 .5-1.9 1.4-2.2Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 9h3.3v10H5z" />
    <path d="M6.7 5a1.8 1.8 0 1 1 0 3.6A1.8 1.8 0 0 1 6.7 5Z" />
    <path d="M11 9h3.2v1.4c.5-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.1 3.9 4.9V19H18v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19H11z" />
  </svg>
)

const Home = () => {
  return (
    <main className="home-shell">
      <nav className="home-nav" aria-label="Primary navigation">
        <div className="nav-smoke-group">
          <SmokeButton className="nav-smoke-button" href="#top" width={132}>Home</SmokeButton>
          <SmokeButton className="nav-smoke-button" href="#work" width={132}>Work</SmokeButton>
          <SmokeButton className="nav-smoke-button" href="#skills" width={132}>Skills</SmokeButton>
          <SmokeButton className="nav-smoke-button" href="#contact" width={132}>Contact</SmokeButton>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <div className="hero-avatar-wrap">
            <img className="hero-avatar" src="/src/assets/profile.jpg" alt="Kenan Öztürk" />
          </div>
          <p className="eyebrow">Software Developer / Founder - Liventa Teknoloji</p>
          <h1>Kenan Öztürk</h1>
          <p className="hero-lead">
            Elektrik-elektronik mühendisliği altyapısıyla; React, Next.js, .NET Core
            ve modern frontend mimarileri üzerinde kurumsal ürünler geliştiren
            yazılım geliştirici.
          </p>
          <div className="hero-actions">
            <SmokeButton href="#work" width={224}>Projeleri Gör</SmokeButton>
            <SmokeButton href="/cv.pdf" width={224}>CV</SmokeButton>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Profile summary">
          <div className="hero-panel-top">
            <span className="hero-panel-label">Odak</span>
            <span className="hero-panel-value">UI, veri akışı, operasyon</span>
          </div>
          <div className="hero-panel-grid">
            <div>
              <span className="hero-panel-label">Stack</span>
              <span className="hero-panel-value">React / Next / .NET</span>
            </div>
            <div>
              <span className="hero-panel-label">Alan</span>
              <span className="hero-panel-value">Kurumsal ürünler</span>
            </div>
          </div>
        </aside>
      </section>

      <section id="work" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Profesyonel Deneyim</p>
        </div>

        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.role}`}>
              <div className="experience-meta">
                <p>{item.date}</p>
                <span>{item.place}</span>
              </div>
              <div className="experience-body">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                {item.project ? <p className="project-name">{item.project}</p> : null}
                <p>{item.description}</p>
                <div className="highlight-row">
                  {item.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      <section id="skills" className="content-section skills-section">
        <div className="section-heading">
          <p className="eyebrow">Beceriler</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className={`skill-icon-wrap${skill.invert ? ' is-invert' : ''}`}>
                {skill.icon ? (
                  <img className="skill-icon" src={skill.icon} alt="" aria-hidden="true" />
                ) : (
                  <span className="skill-fallback">{skill.name}</span>
                )}
              </div>
              <span className="skill-name">{skill.name}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section two-column-section">
        <div className="info-panel">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Eğitim</p>
          </div>
          <ul className="detail-list education-list">
            {education.map((item) => (
              <li className="education-card" key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Sertifikalar</p>
          </div>
          <div className="certificate-grid">
            {certificates.map((item) => (
              <a
                className="certificate-card"
                href={item.file}
                key={item.file}
                target="_blank"
                rel="noreferrer"
              >
                <img className="certificate-preview" src={item.preview} alt={item.title} />
                <div className="certificate-copy">
                  <span className="certificate-issuer">{item.issuer}</span>
                  <span className="certificate-title">{item.title}</span>
                  <span className="certificate-date">{item.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">İletişim</p>
        <div className="contact-actions">
          <SmokeButton href="mailto:kenankenan006@gmail.com" width={240}>
            <MailIcon />
            <span>Email</span>
          </SmokeButton>
          <SmokeButton href="tel:+905375055107" width={240}>
            <PhoneIcon />
            <span>Telefon</span>
          </SmokeButton>
          <SmokeButton href="https://www.linkedin.com/in/kenan-%C3%B6zt%C3%BCrk-a90708b6/" width={240}>
            <LinkedInIcon />
            <span>LinkedIn</span>
          </SmokeButton>
        </div>
      </section>
    </main>
  )
}

export default Home
