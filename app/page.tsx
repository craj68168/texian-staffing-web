import MailtoForm from "@/components/MailtoForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const services = [
  [
    "01",
    "Temporary Staffing",
    "Flexible workforce support for short-term, seasonal, project-based, and changing labor requirements.",
  ],
  [
    "02",
    "Warehouse & Logistics",
    "Workers for warehouses, distribution centers, packaging operations, order fulfillment, loading, unloading, and related operations.",
  ],
  [
    "03",
    "Cleaning Workforce",
    "Staffing support for commercial cleaning companies, facilities, and cleaning projects.",
  ],
  [
    "04",
    "Construction Support",
    "General workforce support for construction-related businesses and projects where legally permitted and appropriate.",
  ],
  [
    "05",
    "Light Industrial",
    "Workforce solutions for manufacturing, production, assembly, packaging, and other light industrial operations.",
  ],
  [
    "06",
    "General Labor",
    "Flexible general labor support based on the client's operational requirements.",
  ],
];

const reasons = [
  [
    "Flexible Workforce Solutions",
    "Staffing levels can be adjusted according to changing business demand, schedules, and project requirements.",
  ],
  [
    "Business-Focused Service",
    "We work to understand the real workforce needs of each employer before discussing staffing options.",
  ],
  [
    "Multiple Industries",
    "We support businesses across warehouse, logistics, cleaning, construction support, light industrial, and general labor operations.",
  ],
  [
    "Responsive Communication",
    "Our goal is to respond quickly, understand the workforce problem, and work toward a practical staffing solution.",
  ],
];

const testimonials = [
  [
    "Operations Manager",
    "Warehouse - Dallas",
    "The staffing process was easy to understand and the communication around our workforce requirements was straightforward.",
  ],
  [
    "Facility Supervisor",
    "Commercial Cleaning - Frisco",
    "We needed additional workers for changing schedules, and having a staffing partner that understood flexibility made the process easier.",
  ],
  [
    "Distribution Manager",
    "Logistics Facility - DFW",
    "The team focused on the type of workers, schedule, and operational requirements instead of offering a one-size-fits-all solution.",
  ],
  [
    "Project Coordinator",
    "Construction Support - Fort Worth",
    "The workforce request process was clear and helped us communicate exactly what kind of support we needed for the project.",
  ],
  [
    "Production Supervisor",
    "Light Industrial - Plano",
    "We appreciated the business-focused approach and the effort to understand our shift requirements before discussing staffing.",
  ],
  [
    "Business Owner",
    "General Labor - Irving",
    "Communication was responsive and the staffing discussion stayed focused on the actual needs of our operation.",
  ],
  [
    "Job Seeker",
    "Dallas-Fort Worth",
    "The registration process was simple and gave me a clear way to share my work preferences and availability.",
  ],
  [
    "Warehouse Coordinator",
    "North Texas",
    "Having a staffing contact who understood warehouse operations made it easier to explain the type of workforce support we needed.",
  ],
  [
    "Facility Manager",
    "Texas",
    "The overall process felt practical and business-focused, especially when discussing schedule changes and workforce demand.",
  ],
];

const employerFields = [
  "Company Name",
  "Contact Person",
  "Phone Number",
  "Email",
  "Work Location",
  "Number of Workers Needed",
  "Job Type",
  "Hourly Rate / Pay Range",
  "Start Date",
  "Work Schedule",
  "Job Description",
];

const seekerFields = [
  "Full Name",
  "Phone Number",
  "Email",
  "City",
  "Work Authorization Status",
  "Type of Work Preferred",
  "Availability",
  "Work Experience",
  "Resume",
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-content">
            <div className="eyebrow">
              Workforce Solutions for Texas Businesses
            </div>

            <h1>Connecting Texas businesses with the workforce they need.</h1>

            <p>
              Texian Staffing helps businesses find dependable workers for
              day-to-day operations, temporary staffing needs, projects, and
              growing teams across multiple industries.
            </p>

            <div className="hero-actions">
              <a href="#employers" className="btn btn-primary">
                Need Workers?
              </a>

              <a href="#job-seekers" className="btn btn-outline">
                Looking for Work?
              </a>
            </div>

            <div className="hero-strip">
              <span>Warehouse & Logistics</span>
              <span>Temporary Staffing</span>
              <span>General Labor</span>
              <span>Responsive Support</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="solutions">
          <div className="container">
            <div className="section-head">
              <div className="kicker">Staffing Solutions</div>

              <h2>Flexible workforce support for growing operations</h2>

              <p>
                Whether you need short-term support, project workers, or help
                managing changing workforce demand, Texian Staffing can discuss
                practical staffing options for your operation.
              </p>
            </div>

            <div className="grid services">
              {services.map(([number, title, text]) => (
                <article className="card" key={title}>
                  <div className="icon">{number}</div>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="how-section">
          <div className="container">
            <div className="section-head">
              <div className="kicker">How Texian Staffing Works</div>

              <h2>A simple process for employers and job seekers</h2>

              <p>
                Our goal is to make it easy for businesses to explain their
                workforce needs and for job seekers to share their availability,
                experience, and work preferences.
              </p>
            </div>

            <div className="process-grid">
              <article className="process-card">
                <div className="process-label">For Employers</div>

                <h3>Tell us what your business needs</h3>

                <div className="process-step">
                  <span>1</span>

                  <div>
                    <strong>Share your workforce requirement</strong>
                    <p>
                      Tell us the job type, number of workers, location, pay
                      range, schedule, start date, and job responsibilities.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span>2</span>

                  <div>
                    <strong>We review the staffing request</strong>
                    <p>
                      Our team reviews your operational requirements and
                      discusses the type of workforce support that may fit.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span>3</span>

                  <div>
                    <strong>Coordinate the next steps</strong>
                    <p>
                      We communicate with your business regarding availability,
                      schedule requirements, and staffing coordination.
                    </p>
                  </div>
                </div>

                <a href="#employers" className="btn btn-dark">
                  Request Workers
                </a>
              </article>

              <article className="process-card">
                <div className="process-label">For Job Seekers</div>

                <h3>Tell us what type of work you are looking for</h3>

                <div className="process-step">
                  <span>1</span>

                  <div>
                    <strong>Submit your basic information</strong>
                    <p>
                      Share your contact details, city, availability, work
                      authorization status, experience, and preferred work.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span>2</span>

                  <div>
                    <strong>We review your profile</strong>
                    <p>
                      Our team can review your information when relevant
                      staffing opportunities become available.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <span>3</span>

                  <div>
                    <strong>We contact you when appropriate</strong>
                    <p>
                      If a suitable opportunity is available, our team may
                      contact you to discuss the position and next steps.
                    </p>
                  </div>
                </div>

                <a href="#job-seekers" className="btn btn-dark">
                  Submit Your Information
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why" className="why">
          <div className="container">
            <div className="section-head">
              <div className="kicker">Why Texian Staffing</div>

              <h2>Practical staffing support for real business needs</h2>
            </div>

            <div className="grid why-grid">
              {reasons.map(([title, text]) => (
                <article className="card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <div className="section-head testimonial-head">
              <div className="kicker">Client Experience Preview</div>

              <h2>The kind of staffing experience we aim to provide</h2>

              <p>
                These testimonial cards are sample launch content for the
                website design. Replace them with verified customer or worker
                reviews before presenting them as actual testimonials.
              </p>
            </div>

            <div className="testimonial-grid">
              {testimonials.map(([name, context, quote], index) => (
                <article className="testimonial-card" key={`${name}-${index}`}>
                  <div
                    className="stars"
                    aria-label="Five star design placeholder"
                  >
                    ★★★★★
                  </div>

                  <blockquote>&ldquo;{quote}&rdquo;</blockquote>

                  <div className="testimonial-person">
                    <div className="avatar" aria-hidden="true">
                      {name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <strong>{name}</strong>
                      <span>{context}</span>
                    </div>
                  </div>

                  <div className="sample-label">
                    Sample testimonial — replace with verified review
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="workforce-cta">
          <div className="container">
            <div className="cta-box">
              <div>
                <div className="eyebrow">Let's Build Your Workforce</div>

                <h2>Need one worker or a larger team?</h2>

                <p>
                  Tell us your location, job requirements, schedule, and number
                  of workers needed. We can review the request and discuss the
                  next steps.
                </p>
              </div>

              <a href="#employers" className="btn btn-primary">
                Request Staffing
              </a>
            </div>
          </div>
        </section>

        {/* EMPLOYERS */}
        <section id="employers">
          <div className="container form-layout">
            <div className="form-intro">
              <div className="kicker">For Employers</div>

              <h2>Need workers?</h2>

              <p>
                Send us your basic staffing requirements. Our team will review
                your request and contact you to discuss your workforce needs.
              </p>

              <div className="field-preview">
                {employerFields.map((field) => (
                  <span key={field}>{field}</span>
                ))}
              </div>
            </div>

            <MailtoForm
              title="Employer Staffing Request"
              recipient="info@himac.us"
              subject="Texian Staffing - Employer Staffing Request"
              type="employer"
            />
          </div>
        </section>

        {/* JOB SEEKERS */}
        <section id="job-seekers" className="job-seeker-section">
          <div className="container form-layout reverse-layout">
            <MailtoForm
              title="Job Seeker Information"
              recipient="info@himac.us"
              subject="Texian Staffing - Job Seeker Submission"
              type="jobSeeker"
            />

            <div className="form-intro">
              <div className="kicker">For Job Seekers</div>

              <h2>Looking for work?</h2>

              <p>
                Submit your basic information so our team can understand your
                availability, experience, location, and preferred type of work.
              </p>

              <div className="field-preview">
                {seekerFields.map((field) => (
                  <span key={field}>{field}</span>
                ))}
              </div>

              <p className="small-note">
                Submitting information does not guarantee placement or
                employment. Opportunities depend on employer demand,
                qualifications, availability, and applicable requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="container">
            <div className="contact-box">
              <div>
                <div className="eyebrow">Contact Texian Staffing</div>

                <h2>Let's discuss your workforce requirements.</h2>

                <p>Texian Staffing is a business service of HI mac USA Inc.</p>
              </div>

              <div className="contact-details">
                <div>
                  <strong>HI mac USA Inc.</strong>
                  <br />
                  Stonebriar Center
                  <br />
                  7460 Warren Parkway, Suite 100
                  <br />
                  Frisco, TX 75034, USA
                </div>

                <div>
                  <strong>Phone</strong>
                  <br />

                  <a href="tel:+14692470295">+1 (469) 247-0295</a>
                </div>

                <div>
                  <strong>Email</strong>
                  <br />

                  <a href="mailto:info@himac.us">info@himac.us</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <a className="mobile-cta" href="#employers">
        Request Staffing
      </a>
    </>
  );
}
