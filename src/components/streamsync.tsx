import { useState, useEffect } from "react";
import { Chrome, ArrowRight } from "lucide-react";
import Card from "./ui/card";
import YouTubeEmbed from "./ui/youtube-embed";

const StreamSync = () => {
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDemo(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          StreamSync
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
          Enhance Your Live Streams with Seamless Audio Integration
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Seamlessly integrate audio calls with YouTube Live chat for an immersive streaming experience. Perfect for creators in finance, ed-tech, or consultancy.
        </p>
      </div>

      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
          showDemo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <YouTubeEmbed videoId="36hbYPvvbVQ" title="StreamSync Demo Video" />
      </div>

      <Card className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Connect with Your Audience
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            StreamSync enables direct audience interaction during your live streams. Boost engagement and create meaningful connections with your community in real-time through integrated audio calls.
          </p>
        </div>
      </Card>

      <Card className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Download StreamSync
          </h2>

          <div className="bg-gray-900/60 p-6 md:p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Chrome className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    Chrome Extension
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Recommended installation method
                  </p>
                </div>
              </div>
              <a
                href="https://chromewebstore.google.com/detail/streamsync/ppjkekdbgjemggkeicnfochciccdhkhk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 rounded-lg font-medium transition-all duration-300 group"
              >
                Download
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StreamSync;
