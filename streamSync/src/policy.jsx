import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

// Separate Logo component with improved accessibility
const Logo = () => (
  <div className="flex items-center">
    <svg
      className="w-12 h-12 mr-2"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      <path
        d="M20 80 Q50 20, 80 80"
        stroke="url(#gradient)"
        strokeWidth="8"
        fill="none"
      />
      <circle cx="30" cy="70" r="10" fill="#60A5FA" />
      <circle cx="70" cy="70" r="10" fill="#8B5CF6" />
    </svg>
    <div className="text-2xl font-bold">
      stream<span className="text-blue-400">Sync</span>
    </div>
  </div>
);

// Enhanced Card component with optional title
const Card = ({ children, title }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
    {children}
  </div>
);

const PrivacyPolicy = () => {
  const [showContent, setShowContent] = useState(false);

  // Scroll to the content after a short delay
  setTimeout(() => setShowContent(true), 500);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <Logo />
        </div>
      </nav>

      <main className="container mx-auto px-4">
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            At StreamSync, your privacy is important to us. This Privacy Policy
            explains how we collect, use, and protect your personal information.
          </p>
        </section>

        <section className="py-12">
          <div
            className={`max-w-3xl mx-auto transition-opacity duration-500 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <Card title="1. Information We Collect">
              <p className="text-gray-300">
                StreamSync collects the following information:
                <ul className="list-inside list-disc ml-4 mt-4">
                  <li>User profile information (name, email address, profile picture) for authentication.</li>
                  <li>Google OAuth refresh token for maintaining YouTube account access.</li>
                </ul>
              </p>
            </Card>

            <Card title="2. How We Use Your Data">
              <p className="text-gray-300">
                We use the collected data for the following purposes:
                <ul className="list-inside list-disc ml-4 mt-4">
                  <li>Authenticate users with their Google accounts and YouTube integration.</li>
                  <li>Store a refresh token for reauthenticating the YouTube connection without user involvement.</li>
                </ul>
              </p>
            </Card>

            <Card title="3. Data Security">
              <p className="text-gray-300">
                We take appropriate security measures to protect your personal data, including storing authentication
                tokens securely. We do not sell or share your personal information with third parties.
              </p>
            </Card>

            <Card title="4. Data Sharing">
              <p className="text-gray-300">
                We do not share, sell, or transfer any personal information or YouTube data to third parties, except
                as required by law.
              </p>
            </Card>

            <Card title="5. Data Retention">
              <p className="text-gray-300">
                We retain your authentication data (name, email) and refresh token as long as you use the Extension. You
                can revoke access by uninstalling the extension or disconnecting your Google account.
              </p>
            </Card>

            <Card title="6. Your Rights">
              <p className="text-gray-300">
                You have the right to access, update, or delete your personal data. To do so, simply disconnect your Google
                account from the Extension or uninstall it completely.
              </p>
            </Card>

            <Card title="7. Contact Us">
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-300 mt-4">
                Email: <a href="mailto:rohittrb@gmail.com" className="text-blue-400">rohittrb@gmail.com</a>
              </p>
            </Card>
          </div>
        </section>

        <section className="py-16 text-center">
          <button
            onClick={() => window.location.href = "https://chrome.google.com/webstore/placeholder-url"}
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors duration-200"
            aria-label="Download Chrome Extension"
          >
            Download Extension
            <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
          </button>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
