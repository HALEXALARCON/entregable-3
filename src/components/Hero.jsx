import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="/rick-and-morty-escape-portal-moewalls-com.mp4" type="video/mp4" />
        Your browser does not support videos.
      </video>
      <div className="hero-content">
        <h1>Welcome to Rick and Morty API</h1>
      </div>
    </div>
  );
}

export default Hero;
