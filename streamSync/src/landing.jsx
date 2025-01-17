import React, { useEffect, useState } from "react";
import {
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  Play,
  Settings,
  Twitter,
  Users,
  X,
  XIcon,
  XSquare,
} from "lucide-react";
import { Link } from "react-router";

const Logo = () => (
  <div className="flex items-center">
    <svg
      className="w-14 h-14 mr-3 transform hover:rotate-12 transition-transform duration-300"
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
        className="animate-pulse"
      />
      <circle cx="30" cy="70" r="10" fill="#60A5FA">
        <animate
          attributeName="r"
          values="10;12;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="70" cy="70" r="10" fill="#8B5CF6">
        <animate
          attributeName="r"
          values="10;12;10"
          dur="2s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>
    </svg>
    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
      stream<span className="font-extrabold">Sync</span>
    </div>
  </div>
);

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
    setup: {
      title: "Easy Setup Process",
      Icon: Settings,
      content: (
        <Card>
          <div className="space-y-8">
            <YouTubeEmbed
              videoId="XltO9rEGPiE"
              title="StreamSync Setup Tutorial"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Install StreamSync extension",
                "Connect your YouTube account",
                "Go Live on YouTube",
                "Open ChatBox from Host Stream",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-700/30 p-4 rounded-xl"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ),
    },
    download: {
      title: "Get Started Now",
      Icon: Download,
      content: (
        <Card>
          <div className="text-center space-y-6">
            <div className="px-8 py-6 bg-gray-700/50 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">
                Chrome Extension Status
              </h4>
              <p className="text-gray-300 mb-4">
                The Chrome extension is currently under review process and will
                be published soon.
              </p>
              <p className="text-sm text-gray-400">
                Compatible with Chrome 88+ and other Chromium browsers
              </p>
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
              videoId="Auui1py6Nvs"
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
