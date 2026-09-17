export default function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <a href="tel:+14692470295">+1 (469) 247-0295</a>

          <a href="mailto:info@himac.us">info@himac.us</a>

          <span>Frisco, Texas</span>
        </div>
      </div>

      <header>
        <div className="container nav">
          <a className="brand" href="#top">
            <span className="brand-mark">TS</span>

            <span>
              TEXIAN STAFFING
              <small>A Business Service of HI mac USA Inc.</small>
            </span>
          </a>

          <nav className="navlinks" aria-label="Main navigation">
            <a href="#solutions">Solutions</a>

            <a href="#how-it-works">How It Works</a>

            <a href="#testimonials">Testimonials</a>

            <a href="#employers">Employers</a>

            <a href="#job-seekers">Job Seekers</a>

            <a href="#employers" className="btn btn-primary">
              Get Started
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
