import MailtoForm from "@/components/MailtoForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const solutions = [
  ["01", "Temporary Staffing", "Short-term, seasonal, project-based, and changing workforce support based on business demand."],
  ["02", "Warehouse & Logistics", "Workers for distribution, packaging, fulfillment, loading, unloading, inventory, and related operations."],
  ["03", "Cleaning Workforce", "Staffing support for commercial cleaning companies, facilities, janitorial teams, and cleaning projects."],
  ["04", "Construction Support", "General workforce support for construction-related businesses and projects where legally permitted and appropriate."],
  ["05", "Light Industrial", "Workforce solutions for manufacturing, production, assembly, packaging, and other light industrial operations."],
  ["06", "General Labor", "Flexible general labor support tailored to the client’s location, schedule, scope, and operational requirements."],
];

const reasons = [
  ["Flexible Workforce", "Staffing can be adjusted around demand, project volume, seasonal peaks, and changing operational needs."],
  ["Business-Focused", "We work to understand the role, schedule, location, and practical workforce needs behind each request."],
  ["Multiple Industries", "Support across warehouse, logistics, cleaning, construction support, light industrial, and general labor operations."],
  ["Responsive Communication", "Our goal is to understand the workforce problem quickly and work toward a practical staffing solution."],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero"><div className="container hero-content"><div className="eyebrow">Workforce Solutions for Texas Businesses</div><h1>The people you need, when your operation needs them.</h1><p>Texian Staffing helps businesses connect with dependable workers for day-to-day operations, temporary demand, projects, seasonal needs, and growing teams.</p><div className="hero-actions"><a href="#employers" className="btn btn-red">I Need Workers</a><a href="#jobseekers" className="btn btn-light">I’m Looking for Work</a></div><div className="stats"><span>Warehouse & Logistics</span><span>Cleaning Workforce</span><span>Light Industrial</span><span>General Labor</span></div></div></section>

        <section id="solutions"><div className="container"><div className="section-head"><div className="kicker">Staffing Solutions</div><h2>Flexible workforce support for real operating needs</h2><p>We focus on practical staffing support for employers who need people quickly, efficiently, and in line with applicable workplace and employment requirements.</p></div><div className="grid solutions">{solutions.map(([number,title,text]) => <article className="card" key={title}><div className="number">{number}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="split"><div className="container grid audience"><div className="panel dark"><div className="eyebrow">For Employers</div><h3>Need workers?</h3><p>Send us the basics and our team can review your staffing requirement.</p><ul className="checklist"><li>Number of workers needed</li><li>Job type and work location</li><li>Pay range and schedule</li><li>Preferred start date</li><li>Role requirements and job description</li></ul><a href="#employers" className="btn btn-red">Submit Staffing Request</a></div><div className="panel light"><div className="kicker">For Job Seekers</div><h3>Looking for work?</h3><p>Share your availability and preferred work type so we can contact you when suitable opportunities are available.</p><ul className="checklist"><li>Basic contact information</li><li>City and availability</li><li>Work authorization status</li><li>Preferred type of work</li><li>Experience and resume</li></ul><a href="#jobseekers" className="btn btn-red">Submit Your Information</a></div></div></section>

        <section><div className="container"><div className="section-head"><div className="kicker">Why Texian Staffing</div><h2>Business-focused staffing with responsive communication</h2></div><div className="grid why-grid">{reasons.map(([title,text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section><div className="container"><div className="cta-band"><div><h2>Whether you need one worker or a larger team, tell us what your business needs.</h2><p>Start with a quick staffing request and our team can follow up.</p></div><a href="#employers" className="btn">Build Your Workforce</a></div></div></section>

        <section id="employers"><div className="container"><div className="section-head"><div className="kicker">Get Started</div><h2>Employers and job seekers can contact us here</h2></div><div className="forms">
          <MailtoForm subject="Texian Staffing - Employer Staffing Request"><h3>Employer Staffing Request</h3><p>Tell us about your workforce requirement.</p><div className="field"><label>Company Name *</label><input name="Company Name" required /></div><div className="field"><label>Contact Person *</label><input name="Contact Person" required /></div><div className="field"><label>Phone Number *</label><input name="Phone" type="tel" required /></div><div className="field"><label>Email *</label><input name="Email" type="email" required /></div><div className="field"><label>Work Location *</label><input name="Work Location" required /></div><div className="field"><label>Number of Workers Needed *</label><input name="Workers Needed" type="number" min="1" required /></div><div className="field"><label>Job Type *</label><input name="Job Type" required /></div><div className="field"><label>Hourly Rate / Pay Range</label><input name="Pay Range" /></div><div className="field"><label>Start Date</label><input name="Start Date" type="date" /></div><div className="field"><label>Work Schedule</label><input name="Work Schedule" placeholder="Days / hours / shift" /></div><div className="field"><label>Job Description</label><textarea name="Job Description" /></div><button type="submit" className="btn btn-red submit">Send Staffing Request</button><p className="note">This opens your email app with the request pre-filled.</p></MailtoForm>

          <div id="jobseekers"><MailtoForm subject="Texian Staffing - Job Seeker Information"><h3>Job Seeker Information</h3><p>Share your basic information and preferred work.</p><div className="field"><label>Full Name *</label><input name="Full Name" required /></div><div className="field"><label>Phone Number *</label><input name="Phone" type="tel" required /></div><div className="field"><label>Email *</label><input name="Email" type="email" required /></div><div className="field"><label>City *</label><input name="City" required /></div><div className="field"><label>Work Authorization Status *</label><select name="Work Authorization" required defaultValue=""><option value="" disabled>Select</option><option>Authorized to work in the U.S.</option><option>Requires further review</option><option>Prefer to discuss</option></select></div><div className="field"><label>Type of Work Preferred *</label><select name="Work Preferred" required defaultValue=""><option value="" disabled>Select</option><option>Warehouse / Logistics</option><option>Cleaning</option><option>Construction Support</option><option>Light Industrial</option><option>General Labor</option><option>Other</option></select></div><div className="field"><label>Availability</label><input name="Availability" placeholder="Immediately / date / shift" /></div><div className="field"><label>Work Experience</label><textarea name="Work Experience" /></div><div className="field"><label>Resume Link (optional)</label><input name="Resume Link" placeholder="Google Drive / Dropbox / other link" /></div><button type="submit" className="btn btn-red submit">Submit Job Seeker Information</button><p className="note">For this fast version, applicants can share a resume link. A future backend can support direct file uploads.</p></MailtoForm></div>
        </div></div></section>

        <section className="contact" id="contact"><div className="container contact-grid"><div><div className="section-head"><div className="kicker">Contact Texian Staffing</div><h2>Let’s build your workforce.</h2><p>Contact us to discuss staffing requirements, work opportunities, service areas, or next steps.</p></div><p className="legal">Staffing availability, assignments, worker eligibility, pay, classification, and placements are subject to applicable federal, state, and local laws and the specific requirements of each engagement.</p></div><div className="contact-box"><div className="contact-line"><strong>HI mac USA Inc.</strong><br />Stonebriar Center<br />7460 Warren Parkway, Suite 100<br />Frisco, TX 75034, USA</div><div className="contact-line"><strong>Phone</strong><br /><a href="tel:+14692470295">+1 (469) 247-0295</a></div><div className="contact-line"><strong>Email</strong><br /><a href="mailto:info@himac.us">info@himac.us</a></div><div className="contact-line"><strong>Business Hours</strong><br />Monday–Friday, 9:00 AM–6:00 PM CST</div></div></div></section>
      </main>
      <SiteFooter />
      <a className="mobile-cta" href="#employers">I Need Workers</a>
    </>
  );
}
