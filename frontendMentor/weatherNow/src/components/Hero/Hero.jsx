import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-heading">
        <h2>How's the sky looking today?</h2>
      </div>

      <div className="hero-search">
        <div className="search-bar">
          <img src="icon-search.svg" alt="icon-seach" />
          <input type="search" />
        </div>

        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default Hero;
