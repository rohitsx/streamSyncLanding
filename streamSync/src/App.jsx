import React from "react";

const Logo = () => (
  <div className="flex items-center">
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

const ContactInfo = () => (
  <div className="bg-gray-800 rounded p-6 mt-12">
    <h2 className="text-2xl font-semibold mb-4 text-gray-200">
      Send Feedbacks on
    </h2>
    <ul className="space-y-2">
      <li>
        GitHub:{" "}
        <a
          href="https://github.com/rohitsx"
          className="text-blue-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          rohitsx
        </a>
      </li>
      <li>
        X:{" "}
        <a
          href="https://twitter.com/rohitsxx"
          className="text-blue-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @rohitsxx
        </a>
      </li>
      <li>Discord: rohitsx</li>
      <li>
        Email:{" "}
        <a
          href="mailto:rohitrb@gmail.com"
          className="text-blue-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          rohitrb@gmail.com
        </a>
      </li>
    </ul>
  </div>
);

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <header className="mb-12 border-b border-gray-700 pb-4 flex justify-between items-center">
        <Logo />
        <a
          href="https://github.com/rohitsx/streamSync"
          className="text-blue-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </header>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-100">
          StreamSync let's you integrates audioCall with superchats
        </h1>

        <section className="mb-12 p-6 bg-gray-800 rounded">
          <p className="mb-4 text-lg">
            Learn how and what problem streamSync is solving{" "}
            <a
              href="https://github.com/rohitsx/streamSync#introduction"
              className="text-blue-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introduction
            </a>
            .
          </p>
        </section>

        <section className="mb-12 p-6 bg-gray-800 rounded">
          <h2 className="text-3xl font-semibold mb-6 text-gray-100">
            How can I access this tool?
          </h2>
          <div className="space-y-6">
            <p className="mb-4">
              We've developed a prototype that allows users to create rooms
              where hosts can interact with their audience. While the current UI
              is in its early stages, you can experience the core functionality
              at{" "}
              <a
                href="https://streamsync-two.vercel.app/"
                className="text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                streamsync-two.vercel.app
              </a>
              .
            </p>
            <p className="mb-4">
              For guidance on how to use the prototype, check out our{" "}
              <a
                href="https://balsam-orchid-7a6.notion.site/streamSync-Overview-f6da4a368bc841a39542c36961b68c1b"
                className="text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                guide
              </a>
              .
            </p>
            <p>
              We're actively working on improving the user interface. You can
              preview our upcoming UI design (still in progress) at{" "}
              <a
                href="https://stream-sync-ui-sample.vercel.app/"
                className="text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                stream-sync-ui-sample.vercel.app
              </a>
              .
            </p>
          </div>
        </section>

        <section className="mb-12 p-6 bg-gray-800 rounded">
          <h2 className="text-3xl font-semibold mb-6 text-gray-100">
            Feedback
          </h2>
          <p className="mb-4 text-lg">
            I love to here your feedback on the idea and the new Ui
          </p>
          <ol className="list-decimal list-inside space-y-4">
            <li className="pl-4">
              Do you see real-world applications for streamSync? Is it worth
              dedicating serious development time to, or should it remain a
              portfolio project?
            </li>
            <li className="pl-4">
              As a streamer, would you use streamSync if it offered an easy
              setup process for hosts and a seamless, auto-loading experience
              for the audience?
            </li>
            <li className="pl-4">
              Is Solana for superchat is sufficient creteria for radar hackaton?
            </li>
          </ol>
        </section>

        <ContactInfo />
      </main>

      <footer className="mt-16 text-center text-gray-400 border-t border-gray-700 pt-4">
        <p>&copy; 2024 streamSync. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPost;
