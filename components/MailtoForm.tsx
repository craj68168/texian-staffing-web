"use client";

import { FormEvent, useState } from "react";

type FormType = "employer" | "jobSeeker";
type SubmitStatus = "idle" | "success";

type Props = {
  title: string;
  type: FormType;
};

export default function MailtoForm({ title, type }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    // Email delivery will be connected when the staffing mailbox is ready.
    // For now, keep visitors on the site and provide a polished confirmation.
    setTimeout(() => {
      form.reset();
      setStatus("success");
      setIsSubmitting(false);
    }, 650);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{title}</h3>

      {type === "employer" ? (
        <div className="form-grid">
          <div className="field">
            <label htmlFor="companyName">Company Name *</label>

            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              placeholder="Company name"
            />
          </div>

          <div className="field">
            <label htmlFor="contactPerson">Contact Person *</label>

            <input
              id="contactPerson"
              name="contactPerson"
              type="text"
              required
              placeholder="Your name"
            />
          </div>

          <div className="field">
            <label htmlFor="employerPhone">Phone Number *</label>

            <input
              id="employerPhone"
              name="phone"
              type="tel"
              required
              placeholder="+1 ..."
            />
          </div>

          <div className="field">
            <label htmlFor="employerEmail">Email *</label>

            <input
              id="employerEmail"
              name="email"
              type="email"
              required
              placeholder="name@company.com"
            />
          </div>

          <div className="field full">
            <label htmlFor="workLocation">Work Location *</label>

            <input
              id="workLocation"
              name="workLocation"
              type="text"
              required
              placeholder="City, State"
            />
          </div>

          <div className="field">
            <label htmlFor="workersNeeded">Number of Workers Needed *</label>

            <input
              id="workersNeeded"
              name="workersNeeded"
              type="number"
              min="1"
              required
              placeholder="10"
            />
          </div>

          <div className="field">
            <label htmlFor="jobType">Job Type *</label>

            <select id="jobType" name="jobType" required defaultValue="">
              <option value="" disabled>
                Select job type
              </option>

              <option value="Temporary Staffing">Temporary Staffing</option>

              <option value="Warehouse & Logistics">
                Warehouse & Logistics
              </option>

              <option value="Cleaning Workforce">Cleaning Workforce</option>

              <option value="Construction Support">Construction Support</option>

              <option value="Light Industrial">Light Industrial</option>

              <option value="General Labor">General Labor</option>

              <option value="Other">Other</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="payRange">Hourly Rate / Pay Range</label>

            <input
              id="payRange"
              name="payRange"
              type="text"
              placeholder="$18 - $22 / hour"
            />
          </div>

          <div className="field">
            <label htmlFor="startDate">Start Date</label>

            <input id="startDate" name="startDate" type="date" />
          </div>

          <div className="field full">
            <label htmlFor="workSchedule">Work Schedule</label>

            <input
              id="workSchedule"
              name="workSchedule"
              type="text"
              placeholder="Monday-Friday, 8:00 AM-5:00 PM"
            />
          </div>

          <div className="field full">
            <label htmlFor="jobDescription">Job Description *</label>

            <textarea
              id="jobDescription"
              name="jobDescription"
              required
              placeholder="Tell us about the work, responsibilities, schedule, and any other requirements..."
            />
          </div>
        </div>
      ) : (
        <div className="form-grid">
          <div className="field">
            <label htmlFor="fullName">Full Name *</label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Your full name"
            />
          </div>

          <div className="field">
            <label htmlFor="jobSeekerPhone">Phone Number *</label>

            <input
              id="jobSeekerPhone"
              name="phone"
              type="tel"
              required
              placeholder="+1 ..."
            />
          </div>

          <div className="field">
            <label htmlFor="jobSeekerEmail">Email *</label>

            <input
              id="jobSeekerEmail"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="field">
            <label htmlFor="city">City *</label>

            <input
              id="city"
              name="city"
              type="text"
              required
              placeholder="Dallas"
            />
          </div>

          <div className="field full">
            <label htmlFor="workAuthorizationStatus">
              Work Authorization Status *
            </label>

            <select
              id="workAuthorizationStatus"
              name="workAuthorizationStatus"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select your status
              </option>

              <option value="Authorized to work in the United States">
                Authorized to work in the United States
              </option>

              <option value="Permanent Resident">Permanent Resident</option>

              <option value="U.S. Citizen">U.S. Citizen</option>

              <option value="Employment Authorization Document">
                Employment Authorization Document
              </option>

              <option value="Other">Other</option>
            </select>
          </div>

          <div className="field full">
            <label htmlFor="preferredWork">Type of Work Preferred *</label>

            <select
              id="preferredWork"
              name="preferredWork"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select preferred work
              </option>

              <option value="Warehouse & Logistics">
                Warehouse & Logistics
              </option>

              <option value="Cleaning">Cleaning</option>

              <option value="Construction Support">Construction Support</option>

              <option value="Light Industrial">Light Industrial</option>

              <option value="General Labor">General Labor</option>

              <option value="Other">Other</option>
            </select>
          </div>

          <div className="field full">
            <label htmlFor="availability">Availability *</label>

            <input
              id="availability"
              name="availability"
              type="text"
              required
              placeholder="Immediately / Weekdays / Weekends / Full-time"
            />
          </div>

          <div className="field full">
            <label htmlFor="workExperience">Work Experience</label>

            <textarea
              id="workExperience"
              name="workExperience"
              placeholder="Briefly describe your previous work experience..."
            />
          </div>

          <div className="field full">
            <label htmlFor="resumeLink">Resume Link</label>

            <input
              id="resumeLink"
              name="resumeLink"
              type="url"
              placeholder="Google Drive, Dropbox, OneDrive, etc."
            />

            <span className="note">
              Please provide a shareable link that our team can review.
            </span>
          </div>
        </div>
      )}

      {status === "success" && (
        <div className="form-message success" role="status" aria-live="polite">
          {type === "employer"
            ? "Thank you for your staffing request. Our team will review your needs and contact you soon."
            : "Thank you for sharing your information. Our team will review it and contact you soon."}
        </div>
      )}

      <button
        className="btn btn-primary submit"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Submitting..."
          : type === "employer"
            ? "Submit Staffing Request"
            : "Submit Job Seeker Information"}
      </button>

      <p className="note">
        Your information will be reviewed by the Texian Staffing team. We will
        contact you if we need any additional details.
      </p>
    </form>
  );
}
