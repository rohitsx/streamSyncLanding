import { useState } from "react";
import { Heart, Play } from "lucide-react";
import TabButton from "./ui/tab-button";
import Header from "./header";
import EaseYou from "./easeyou";
import StreamSync from "./streamsync";
import Community from "./community";

const DualProjectLanding: React.FC = () => {
  const [activeProject, setActiveProject] = useState<"easeyou" | "streamsync">("easeyou");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />

      <main className="container mx-auto px-4 md:px-6">
        <section className="py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <TabButton
              active={activeProject === "easeyou"}
              onClick={() => setActiveProject("easeyou")}
              Icon={Heart}
            >
              EaseYou (New!)
            </TabButton>
            <TabButton
              active={activeProject === "streamsync"}
              onClick={() => setActiveProject("streamsync")}
              Icon={Play}
            >
              StreamSync
            </TabButton>
          </div>

          {activeProject === "easeyou" ? <EaseYou /> : <StreamSync />}
        </section>

        <Community />
      </main>
    </div>
  );
};

export default DualProjectLanding;