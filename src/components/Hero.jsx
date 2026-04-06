
const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            I am John Andrei Jayme
          </h1>
          <h2 className="hero-subtitle">
            Web Developer, Designer
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Welcome to my portfolio!
          </p>
          <p style={{ marginBottom: '2rem', maxWidth: '600px', color: 'var(--text-light)' }}>
            Dedicated to building the future of the web by creating innovative, accessible, and beautiful digital products.
          </p>
          <a href="#contact" className="btn">Let's Talk</a>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="./src/assets/images/Messenger_creation_8C06F3AA-FBA3-40E1-8415-B316AC88D7F8.jpg"
            alt="John Andrei Jayme"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
