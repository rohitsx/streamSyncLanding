
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

export default Logo
