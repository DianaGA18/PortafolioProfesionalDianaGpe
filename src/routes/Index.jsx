import Contactos from "./Contactos";

const Index = () => {
  return (
    <div className="content">
      <div className="top-section">
        <div className="left-column">
          <div className="profile-image">
            <img src="https://avatars.githubusercontent.com/u/82452616?v=4" alt="Profile Image" />
          </div>
          <div className="intro-text">
            <h1 className="font-medium">Hola... Mucho Gusto!</h1>
            <h2 className="font-semibold">Soy Diana Guadalupe González Alfaro</h2>
            <p>Ingeniera en Sistemas Computacionales </p>
          </div>
        </div>
        <div className="right-column">
          <h2 className="mb-5">Información sobre mí:</h2>
          
          <p>
            Soy estudiante del 8vo semestre de la Ingeniería en Sistemas Computacionales en el Tecnológico de Estudios Superiores de Jilotepec, Edo.Méx.
          </p>
          <p>
            Al igual, estudié en el Colegio de Estudios Científicos y Tecnológicos del Estado de México Plantel Villa del Carbón, donde obtuve el título como Técnica en Programación.
          </p>
          <p>
            ¡Me encanta programar! Mi carrera se ha vuelto una parte muy indispensable en mi día a día. Me gusta también poder conocer cosas nuevas y así poder ampliar mis conocimientos.
          </p>
          <p>
            He participado en varios proyectos escolares, los cuales me han permitido ampliar y poner en práctica mis habilidades. Esto me ha ayudado en mi formación personal y profesional.
          </p>
          <p>
            Me emociona pensar en todos los proyectos en los que podré participar, ¡siendo parte de su equipo! Si desean tener más información de mí, no duden en contactarme.
          </p>
          <p className="font-bold">Muchas gracias, quedo a sus órdenes.</p>
        </div>
      </div>

      <div className="centered-section">
        <h2 className="mb-5">Tecnologías conocidas:</h2>
        <div className="tech-icons">
          <img
            src="https://skillicons.dev/icons?i=androidstudio,angular,aws,bootstrap,c,cs,cpp,java,php,dart,flask,py,css,html,mongodb,octave,react,js,nodejs,mysql,sqlite,firebase,git,github,eclipse,vscode,linux,django,&perline=12"
            alt="Tech Stack Icons"
          />
        </div>
      </div>

      <div className="centered-section">
        <h2 className="mb-5">Contáctame!</h2>
        <div className="contact-link">
          <a
            href="https://github-readme-streak-stats.herokuapp.com/?user=DianaGA18&theme=tokyonight&hide_border=false"
            title="Go to Source"
          >
            <Contactos />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
