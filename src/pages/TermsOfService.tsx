import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

export default function TermsOfService() {
  return (
    <div className="legal-page">
      <Navbar />

      <main className="legal__main">
        <div className="legal__container">
          <div className="legal__header">
            <h1 className="legal__title">Terms of Service</h1>
            <span className="legal__last-updated">Last Updated: August 9, 2026</span>
          </div>

          <div className="legal__content">
            <p>
              Please read these Terms of Service ("Terms") carefully before using the TripZ website and application (the "Service") operated by [Company Name] ("us", "we", or "our").
            </p>

            <h2>Introduction / Acceptance of Terms</h2>
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>

            <h2>Description of TripZ</h2>
            <p>
              TripZ is a demonstration travel itinerary planning tool designed to simulate the curation of personalized travel experiences.
            </p>

            <h2>Use of the Service</h2>
            <p>
              You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service in any way that violates any applicable national or international law or regulation.
            </p>

            <h2>User Accounts</h2>
            <p>
              Currently, user authentication and account creation on TripZ are simulated. Any credentials you enter during testing are processed locally. If we implement full account functionality in the future, you will be responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
            </p>

            <h2>Travel Information and Recommendations</h2>
            <p>
              The travel recommendations, itineraries, and cost estimates provided by TripZ are generated for demonstration purposes. They are based on static or simulated data sets and algorithms that do not represent real-time booking availability, accurate pricing, or factual historical facts. 
            </p>
            
            <h2>AI-Generated Recommendations</h2>
            <p>
              <strong>Important Notice:</strong> Our "AI Suitability Scores," generated itineraries, and curated experiences are simulated outputs. They are purely informational and should not be relied upon as guarantees of satisfaction, safety, or logistical accuracy for actual travel planning.
            </p>

            <h2>Weather and Other External Data</h2>
            <p>
              Any weather forecasts, conditions, or logistical warnings displayed within generated itineraries are simulated data designed to demonstrate the dynamic capabilities of the application. Do not rely on this data for actual weather forecasting or travel safety decisions.
            </p>

            <h2>Accuracy and Availability</h2>
            <p>
              We do not guarantee the accuracy, completeness, or usefulness of any information on the Service. The Service is provided "as is" and "as available". We reserve the right to modify or discontinue the Service (or any part or content thereof) without notice at any time.
            </p>

            <h2>User Responsibilities</h2>
            <p>
              If you use our simulated itineraries as inspiration for real travel, you assume full responsibility for verifying all logistics, safety warnings, visa requirements, and costs independently through certified travel agencies or official sources.
            </p>

            <h2>Prohibited Uses</h2>
            <p>
              You agree not to use the Service to:
            </p>
            <ul>
              <li>Attempt to bypass or break any security mechanism of the frontend interface.</li>
              <li>Impersonate or attempt to impersonate [Company Name], a [Company Name] employee, another user, or any other person or entity.</li>
              <li>Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of [Company Name] and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>

            <h2>Third-Party Services and Links</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by [Company Name]. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL [COMPANY NAME], NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
            </p>

            <h2>Changes to the Service</h2>
            <p>
              We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law provisions.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:[Insert Contact Email]">[Insert Contact Email]</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
