import React, { useState } from "react";
import { ExternalLink, Linkedin, Mail, Twitter } from "lucide-react";

// Logo component as provided
const Logo = () => (
  <div className="flex items-center animate-fade-in">
    <svg
      className="w-12 h-12 mr-2"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
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
    <div className="text-xl font-bold text-white">
      stream<span className="text-blue-400">Sync</span>
    </div>
  </div>
);

const StreamSyncLanding = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  React.useEffect(() => {
    // Show video after a slight delay for animation
    const timer = setTimeout(() => setIsVideoVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const tabContent = {
    users: {
      title: "Connecting Creators with Their Audience",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            StreamSync transforms your YouTube live streams by enabling seamless
            real-time interactions:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start animate-slide-in">
              <div className="w-2 h-2 mt-2 mr-2 bg-blue-400 rounded-full"></div>
              <span>
                Direct audience questions appear on your stream overlay
              </span>
            </li>
            <li className="flex items-start animate-slide-in animation-delay-100">
              <div className="w-2 h-2 mt-2 mr-2 bg-blue-400 rounded-full"></div>
              <span>Prioritize and respond to messages in real-time</span>
            </li>
            <li className="flex items-start animate-slide-in animation-delay-200">
              <div className="w-2 h-2 mt-2 mr-2 bg-blue-400 rounded-full"></div>
              <span>Interactive polls and audience engagement features</span>
            </li>
          </ul>
        </div>
      ),
    },
    setup: {
      title: "Quick Setup Guide",
      content: (
        <div className="space-y-4">
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center max-w-lg mx-auto">
            <p className="text-gray-400">Setup Video Placeholder</p>
          </div>
          <ol className="space-y-2 text-gray-300 list-decimal pl-4">
            <li className="animate-slide-in">
              Install StreamSync from the Chrome Web Store
            </li>
            <li className="animate-slide-in animation-delay-100">
              Connect your YouTube account
            </li>
            <li className="animate-slide-in animation-delay-200">
              Configure your overlay settings
            </li>
            <li className="animate-slide-in animation-delay-300">
              Start your stream and engage with your audience!
            </li>
          </ol>
        </div>
      ),
    },
    download: {
      title: "Get StreamSync",
      content: (
        <div className="space-y-4">
          <a
            href="https://chrome.google.com/webstore/placeholder-url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-all hover:scale-105"
          >
            Download Extension
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
          <p className="text-gray-400 text-sm">
            Compatible with Chrome 88+ and other Chromium-based browsers
          </p>
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <Logo />
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Real-Time Audience Engagement for YouTube Live
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-100">
          Enhance your YouTube live streams by allowing your audience to
          directly engage with you in real time.
        </p>
        <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-all hover:scale-105 animate-fade-in animation-delay-200">
          Try StreamSync
        </button>
      </section>

      {/* Video Demo Section */}
      <section className="container mx-auto px-4 py-8">
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVideoVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center shadow-xl">
            <p className="text-gray-400">Interactive Demo Video Placeholder</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 my-12">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg transition-all hover:scale-105 ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 animate-fade-in">
            {tabContent[activeTab].title}
          </h2>
          {tabContent[activeTab].content}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-300 mb-8 animate-fade-in">
            <span className="font-bold text-2xl">Note</span>{" "}
            StreamSync is a test project, and its future depends on user
            interest. If even one person finds value in this tool, I'm ready to
            invest more time into improving it. However, without any positive
            feedback or interest, I won't be able to continue development.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rohittrb@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Contact: rohittrb@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default StreamSyncLanding;
