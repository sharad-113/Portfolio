const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey,I am Sharad Kumar Mishra</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack MERN</span>
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            MCA final-year student seeking web or software development
            internships or an entry-level positions.
            <br />
            Proficient in C++, HTML5, CSS, REACT, and MongoDB
            JavaScript,NodeJs,ExpressJs, EJS, Core Java, and MERN STACK
          </p>
        </div>
        <br />
        <a
          href="https://www.linkedin.com/in/sharad-kumar-mishra-9502641b2/"
          style={{ textDecoration: "none" }}
        >
          <button className="btn btn-primary">My Linkedin Profile</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/Optimized-Coding.jpg" alt="Hero Section" />
      </div>
    </section>
  );
};
export default HeroSection;
