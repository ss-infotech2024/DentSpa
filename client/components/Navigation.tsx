import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT ME", path: "/about" },
    { name: "TREATMENTS", path: "/treatments" },
    { name: "PORTFOLIO", path: "/portfolio", hasDropdown: true },
    { name: "ALUMNI BALL & AWARDS", path: "/alumni" },
    { name: "COURSES", path: "/courses", hasDropdown: true },
    { name: "E-STORE", path: "/store" },
    { name: "PRESS", path: "/press" },
  ];

  return (
    <nav className={cn("flex items-center justify-between w-full px-8 py-6", className)}>
      {/* Left side navigation */}
      <div className="flex items-center space-x-8">
        {navItems.slice(0, 3).map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-gold text-sm font-medium tracking-wide hover:text-gold-light transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Center logo */}
      <div className="flex flex-col items-center">
        <div className="text-gold text-4xl font-thin mb-1">MV</div>
        <div className="text-gold text-xs tracking-[0.2em] font-light">
          DR MONIK VASANT
        </div>
      </div>

      {/* Right side navigation */}
      <div className="flex items-center space-x-8">
        {navItems.slice(3).map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-gold text-sm font-medium tracking-wide hover:text-gold-light transition-colors duration-200 flex items-center"
          >
            {item.name}
            {item.hasDropdown && (
              <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                <path d="M6 8L2 4h8L6 8z" />
              </svg>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
