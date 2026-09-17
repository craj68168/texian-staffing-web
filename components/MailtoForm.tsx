"use client";

import { FormEvent, useState } from "react";

type FormType = "employer" | "jobSeeker";

type Props = {
  title: string;
  recipient: string;
  subject: string;
  type: FormType;
};

export default function MailtoForm({ title, recipient, subject, type }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const lines: string[] = [];

    formData.forEach((value, key) => {
      const formattedKey = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (char) => char.toUpperCase());

      lines.push(`${formattedKey}: ${String(value)}`);
    });

    const body = encodeURIComponent(lines.join("\n"));
    const encodedSubject = encodeURIComponent(subject);

    window.location.href = `mailto:${recipient}?subject=${encodedSubject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
    }, 500);
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
            <label htmlFor="phone">Phone Number *</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+1 ..."
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email *</label>

            <input
              id="email"
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
            <label htmlFor="phone">Phone Number *</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+1 ..."
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email *</label>

            <input
              id="email"
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
              Because this launch version sends the form through email, please
              provide a shareable resume link.
            </span>
          </div>
        </div>
      )}

      <button
        className="btn btn-primary submit"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Opening Email..."
          : type === "employer"
            ? "Submit Staffing Request"
            : "Submit Job Seeker Information"}
      </button>

      <p className="note">
        Submitting this form will open your email application with the
        information prepared for <strong>{recipient}</strong>.
      </p>
    </form>
  );
}
