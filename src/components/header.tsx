import { Logo } from "./ui/logo";

const Header = () => (
  <nav className="border-b border-gray-800/50 backdrop-blur-xl sticky top-0 z-50">
    <div className="container mx-auto px-4 md:px-6 py-4">
      <div className="flex justify-between items-center">
        <Logo />
      </div>
    </div>
  </nav>
);

export default Header;
