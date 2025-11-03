export const Logo = () => (
  <div className="flex items-center gap-3">
    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
      Our Projects
    </span>
  </div>
);

export const EaseYouLogo = () => (
  <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gray-800 rounded-3xl shadow-xl mb-6">
    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center">
      <div className="flex gap-2">
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gray-800 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gray-800 rounded-full animate-bounce" style={{ animationDelay: '0.16s' }}></div>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gray-800 rounded-full animate-bounce" style={{ animationDelay: '0.32s' }}></div>
      </div>
      <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform -rotate-12"></div>
    </div>
  </div>
);
