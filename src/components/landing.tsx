import Header from "./header";
import StreamSync from "./streamsync";
import Community from "./community";

const StreamSyncLanding: React.FC = () => {

  return (

    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">

      <Header />



      <main className="container mx-auto px-4 md:px-6">

        <section className="py-12 md:py-16">

          <StreamSync />

        </section>



        <Community />

      </main>

    </div>

  );

};



export default StreamSyncLanding;
