import React from 'react';

export default function About() {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column */}
          <div className="about-left">
            <span className="eyebrow">ABOUT CAMBEDOR</span>
            <h2 className="about-left-title">
              Building opportunities beyond the classroom.
            </h2>
          </div>

          {/* Right Column */}
          <div className="about-right">
            <p>
              Cambedor connects ambitious students with real-world opportunities,
              communities, campaigns, and growing startups.
            </p>
            <p>
              Students can discover initiatives, collaborate with communities,
              build meaningful connections, and gain practical industry exposure.
            </p>
            <p>
              Startups and communities can connect with motivated students and
              build a strong talent and engagement network.
            </p>

            <div className="about-quote-box">
              “Your college journey shouldn't be limited to the classroom.
              Build skills, connections, and real-world experience.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
