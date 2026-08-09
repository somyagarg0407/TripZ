import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <Navbar />

      <main className="legal__main">
        <div className="legal__container">
          <div className="legal__header">
            <h1 className="legal__title">Privacy Policy</h1>
            <span className="legal__last-updated">Last Updated: August 9, 2026</span>
          </div>

          <div className="legal__content">
            <p>
              This Privacy Policy explains how TripZ ("we", "our", or "us") collects, uses, and discloses information about you when you access or use our website. Currently, TripZ operates primarily as a frontend demonstration interface.
            </p>

            <h2>Information We Collect</h2>
            
            <h3>Information You Provide</h3>
            <p>
              We may collect information you provide directly to us when you use our simulated planner or authentication interfaces. Since the current application runs largely in your local environment, data such as your simulated login credentials or travel preferences (e.g., destination, dates, budget, interests) are processed locally to generate your mock itinerary.
            </p>

            <h3>Information Collected Automatically</h3>
            <p>
              We may automatically collect certain information about your device and how you interact with our website, including:
            </p>
            <ul>
              <li><strong>Theme Preferences:</strong> We store your Light/Dark mode preferences locally in your browser.</li>
              <li><strong>Local State:</strong> We may use browser local storage or session storage to maintain your current UI state while navigating the site.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              Any information processed during your session is used solely to provide, maintain, and improve the TripZ interface and functionality. We use the travel data you input to generate simulated itineraries, curate mock experiences, and adapt the interface to your requests.
            </p>

            <h2>Location and Travel Data</h2>
            <p>
              When you use the AI Planner, you provide destination queries. These queries are processed locally by our frontend application using simulated data (such as mock weather data and mock activities) to demonstrate our platform's capabilities. We do not track your real-time physical location.
            </p>

            <h2>Cookies and Similar Technologies</h2>
            <p>
              We use strictly necessary local storage mechanisms to remember your theme preferences (e.g., `data-theme`). We currently do not deploy third-party tracking or advertising cookies.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              While our interface includes a "Continue with Google" button as a visual element of the design, our current implementation does not actively integrate with third-party authentication providers or data brokers.
            </p>

            <h2>Data Storage and Security</h2>
            <p>
              Currently, TripZ does not transmit your personal data to remote servers or databases for permanent storage. Data entered during a session exists only within the state of the web application in your browser. We implement reasonable frontend security practices, but cannot guarantee absolute security for data transmitted over the internet.
            </p>

            <h2>Data Retention</h2>
            <p>
              Because your data is processed locally, it is generally retained only for the duration of your browser session or until you clear your browser's local storage.
            </p>

            <h2>Your Rights and Choices</h2>
            <p>
              You have the right to access, update, or delete the information you have provided to us. Since your data is stored locally in your browser, you can clear this data at any time by clearing your browser cache and local storage.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13 (or other age as required by local law), and we do not knowingly collect personal information from children.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may change this Privacy Policy from time to time as we evolve TripZ from a demonstration application to a fully integrated platform. If we make changes, we will notify you by revising the date at the top of the policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:[Insert Contact Email]">[Insert Contact Email]</a> or write to us at [Company Name], [Insert Physical Address].
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
