import React, { useEffect, useState } from "react";
import { ExternalLink, Linkedin, Mail, Twitter } from "lucide-react";

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

// Improved TabButton with proper accessibility
const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    aria-pressed={active}
    className={`px-6 py-3 rounded-lg transition-colors duration-200 text-lg font-medium
      ${
      active
        ? "bg-blue-500 text-white"
        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
    }`}
  >
    {children}
  </button>
);

// Enhanced Card component with optional title
const Card = ({ children, title }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
    {children}
  </div>
);

// YouTube iframe component with proper security and loading
const YouTubeEmbed = ({ videoId, title }) => (
  <div className="aspect-video">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      loading="lazy"
    />
  </div>
);

const StreamSyncLanding = () => {
  const [activeTab, setActiveTab] = useState("use");
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDemo(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleTryNow = () => {
    const downloadSection = document.getElementById("download");
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabContent = {
    use: {
      title: "Connect with Your Audience",
      content: (
        <Card>
          <p className="text-gray-300">
            This tool is perfect for creators in finance, ed-tech, or
            consultancy, allowing them to interact more directly with their
            audience while maintaining the familiar experience of superchats.
          </p>
        </Card>
      ),
    },
    setup: {
      title: "Easy Setup Process",
      content: (
        <Card>
          <div className="space-y-6">
            <YouTubeEmbed
              videoId="KqD8kV4B7wI"
              title="StreamSync Setup Tutorial"
            />
            <ol className="space-y-4 list-decimal list-inside">
              {[
                "Install StreamSync extension",
                "Connect your YouTube account",
                "Configure overlay settings",
                "Go live and engage!",
              ].map((step, index) => (
                <li key={index} className="text-gray-300">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </Card>
      ),
    },
    download: {
      title: "Get Started Now",
      content: (
        <Card>
          <div className="text-center space-y-4">
            <button
              onClick={() =>
                window.open(
                  "https://chrome.google.com/webstore/placeholder-url",
                  "_blank",
                  "noopener noreferrer",
                )}
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors duration-200"
              aria-label="Download Chrome Extension"
            >
              Download Extension
              <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
            </button>
            <p className="text-sm text-gray-400">
              Works with Chrome 88+ and other Chromium browsers
            </p>
          </div>
        </Card>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <Logo />
        </div>
      </nav>

      <main className="container mx-auto px-4">
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Enhance Your Live Streams
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            StreamSync lets you integrate audio calls with YouTube Live chat
          </p>
          <button
            onClick={handleTryNow}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Try StreamSync
          </button>
        </section>

        <section className="py-12">
          <div
            className={`max-w-3xl mx-auto transition-opacity duration-500 ${
              showDemo ? "opacity-100" : "opacity-0"
            }`}
          >
            <YouTubeEmbed
              videoId="KqD8kV4B7wI"
              title="StreamSync Demo Video"
            />
          </div>
        </section>

        <section className="py-12" id="features">
          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(tabContent).map((tab) => (
              <TabButton
                key={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabButton>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              {tabContent[activeTab].title}
            </h2>
            {tabContent[activeTab].content}
          </div>
        </section>

        <section className="py-16 text-center" id="contact">
          <Card title="Join the Community">
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-300 mb-6">
                StreamSync is evolving with your feedback. Help shape its
                future!
              </p>
              <div className="flex justify-center space-x-6">
                {[
                  {
                    Icon: Twitter,
                    href: "https://twitter.com/placeholder",
                    label: "Twitter",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://linkedin.com/in/placeholder",
                    label: "LinkedIn",
                  },
                  {
                    Icon: Mail,
                    href: "mailto:rohittrb@gmail.com",
                    label: "Email",
                  },
                ].map(({ Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Contact: rohittrb@gmail.com
              </p>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default StreamSyncLanding;
