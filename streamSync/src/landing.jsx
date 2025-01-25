import React, { useEffect, useState } from "react";
import {
  Download,
  Linkedin,
  Mail,
  Play,
  Twitter,
  Users,
} from "lucide-react";
import { Link } from "react-router"; // Updated import
import Logo from "./logo";

const TabButton = ({ active, onClick, children, Icon }) => (
  <button
    onClick={onClick}
    aria-pressed={active}
    className={`px-8 py-4 rounded-xl transition-all duration-300 text-lg font-medium flex items-center gap-2
      ${
      active
        ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white scale-105 shadow-lg shadow-blue-500/25"
        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:scale-102"
    }`}
  >
    {Icon && <Icon className="w-5 h-5" />}
    {children}
  </button>
);

const Card = ({ children, title, className = "" }) => (
  <div
    className={`bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300 ${className}`}
  >
    {title && (
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
        {title}
      </h3>
    )}
    {children}
  </div>
);

const YouTubeEmbed = ({ videoId, title }) => (
  <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-700/50">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      loading="lazy"
      allowFullScreen
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
    setActiveTab("download");
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabContent = {
    use: {
      title: "Connect with Your Audience",
      Icon: Users,
      content: (
        <Card className="backdrop-blur-xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            Perfect for creators in finance, ed-tech, or consultancy, StreamSync
            enables direct audience interaction. Boost engagement and create
            meaningful connections with your community in real-time.
          </p>
        </Card>
      ),
    },
    download: {
      title: "Get Started Now",
      Icon: Download,
      content: (
        <Card>
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-[#0A101F]/60 p-8 rounded-xl shadow-2xl border border-blue-500/20">
              <h2 className="text-2xl font-bold text-center mb-6 text-blue-400">
                Download StreamSync
              </h2>
              <div className="grid md:grid-cols-2 gap-4 items-center">
                <div className="bg-[#0A101F]/40 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-gray-200">
                    Chrome Extension
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Simple 6-step installation process
                  </p>
                  <a
                    href="https://github.com/user-attachments/files/18546799/streamSync.zip"
                    className="w-full block text-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
                  >
                    Download Extension
                  </a>
                </div>
                <ol className="space-y-2 text-gray-300 bg-[#0A101F]/40 p-6 rounded-lg">
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                    <span>Download Extension</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <span>Unzip the file</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <span>
                      Open{" "}
                      <code className="bg-gray-700 px-1 rounded">
                        chrome://extensions
                      </code>
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </span>
                    <span>Enable "Developer Mode"</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </span>
                    <span>Click "Load unpacked"</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      6
                    </span>
                    <span>Select unzipped StreamSync folder</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Card>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="border-b border-gray-800/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Logo />
        </div>
      </nav>

      <main className="container mx-auto px-6">
        <section className="py-24 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Enhance Your Live Streams
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Seamlessly integrate audio calls with YouTube Live chat for an
            immersive streaming experience
          </p>
          <button
            onClick={handleTryNow}
            className="px-12 py-6 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-blue-500/25 flex items-center gap-3 mx-auto"
          >
            <Play className="w-6 h-6" />
            Try StreamSync
          </button>
        </section>

        <section className="py-16">
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
              showDemo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <YouTubeEmbed
              videoId="36hbYPvvbVQ"
              title="StreamSync Demo Video"
            />
          </div>
        </section>

        <section className="py-16" id="features">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(tabContent).map(([tab, { Icon }]) => (
              <TabButton
                key={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                Icon={Icon}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabButton>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {tabContent[activeTab].title}
            </h2>
            {tabContent[activeTab].content}
          </div>
        </section>

        <section className="py-24" id="contact">
          <Card title="Join the Community" className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-gray-300 text-lg mb-8">
                Help shape the future of StreamSync with your valuable feedback
                and suggestions!
              </p>
              <div className="flex justify-center gap-8">
                {[
                  {
                    Icon: Twitter,
                    href: "https://x.com/rohitsxx",
                    label: "Twitter",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/rohiitrb/",
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
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-8 h-8" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <p className="text-gray-400">
                  Contact: rohittrb@gmail.com
                </p>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default StreamSyncLanding;
