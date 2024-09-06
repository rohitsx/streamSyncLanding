import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, Globe, FileText, Menu, X, ChevronDown, Code, Users, Tv } from 'lucide-react';
import { FaGithub } from 'react-icons/fa'


const Logo = () => (
  <div className="logo-container">
    <div className="logo">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
    <div className="text-xl font-bold text-white ml-3">
      stream<span className="text-blue-400">Sync</span>
    </div>
  </div>
);

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:transform hover:scale-105 hover:shadow-xl">
    <div className="text-blue-400 mb-4">{icon}</div>
    <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
    <p className="text-center text-gray-400">{description}</p>
  </div>
);

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute w-full h-full bg-grid-pattern opacity-10"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full filter blur-[150px] animate-pulse opacity-20"></div>
  </div>
);

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <AnimatedBackground />

      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#features" className="text-gray-300 hover:text-blue-400 transition duration-300">Features</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition duration-300">About</a></li>
              <li><a href="#roadmap" className="text-gray-300 hover:text-blue-400 transition duration-300">Roadmap</a></li>
            </ul>
          </nav>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4">
            <ul className="flex flex-col items-center space-y-4">
              <li><a href="#features" className="text-gray-300 hover:text-blue-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Features</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#roadmap" className="text-gray-300 hover:text-blue-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Roadmap</a></li>
            </ul>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="pt-32 pb-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">Chat Better with Voice.</h1>
            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">StreamSync integrates voice with super chats for a more interactive streaming experience.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://stream-sync-virid.vercel.app/" className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Try Beta Version
                <ArrowRight className="ml-2" />
              </a>
              <a href="https://github.com/rohitsx/streamSync" className="inline-flex items-center bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <FaGithub size={24} className="mr-2" /> {/* GitHub icon */}
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Planned Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature
                icon={<Zap size={48} />}
                title="Solana Integration"
                description="Send and receive Solana seamlessly during streams."
              />
              <Feature
                icon={<Shield size={48} />}
                title="Secure Transactions"
                description="Payments only debited after successful interactions."
              />
              <Feature
                icon={<Globe size={48} />}
                title="Multi-Currency Support"
                description="Plans to integrate more cryptocurrencies in the future."
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">About StreamSync</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-10">
              StreamSync is a browser extension that enhances creator-audience interaction by allowing users to send priority super chats with Solana, and offers the unique option for creators to engage directly with contributors through voice conversations.
            </p>
            <div className="text-center">
              <a
                href="https://balsam-orchid-7a6.notion.site/streamSync-Overview-f6da4a368bc841a39542c36961b68c1b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FileText className="mr-2" />
                View Project Overview
              </a>
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Development Roadmap</h2>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-8">
                <Code size={32} className="text-blue-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Beta Testing</h3>
                  <p className="text-gray-400">The extension is still in development. For testing purposes, you can access the extension at <a href="http://yourdomain.com" className="text-blue-300">this domain</a>.</p>
                </div>
              </div>
              <div className="flex items-center mb-8" >
                <Tv size={32} className="text-blue-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Official Launch</h3>
                  <p className="text-gray-400">The extension will be released on the Google Chrome store once it's fully developed. Stay tuned!</p>
                </div>
              </div>
              <div className="flex items-center  bg-gray-700 p-4 rounded-lg">
                <div className="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">[LOG] We know the current UI is shit. We are working on an update to improve it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-400">Try StreamSync</h2>
            <a href="https://stream-sync.devrohit.tech/" className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Access Beta Version
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <Logo />
          <p className="mt-4">&copy; 2024 StreamSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}