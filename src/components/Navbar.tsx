import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/papyris_logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "realisations", label: "Réalisations" },
    { id: "temoignages", label: "Clients" },
    { id: "contact", label: "Contact" },
  ];

  const simulators = [
    { href: "/simulator", label: "Néon" },
    { href: "/simulator/stickers", label: "Autocollants Muraux" },
    { href: "/simulator/textile", label: "Textile Personnalisé" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-[0_0_30px_hsl(190_100%_50%/0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="font-display text-3xl gradient-text">Papyris</span>
            <img src={logo} alt="Papyris Logo" className="h-20 w-20 -ml-5" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => handleSectionClick(link.id, e)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            
            {/* Simulateurs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSimulatorOpen(true)}
              onMouseLeave={() => setIsSimulatorOpen(false)}
            >
              <button className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center gap-1">
                Simulateurs
                <ChevronDown className={`w-4 h-4 transition-transform ${isSimulatorOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isSimulatorOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden animate-slide-up">
                    {simulators.map((simulator) => (
                      <Link
                        key={simulator.href}
                        to={simulator.href}
                        className="block px-4 py-3 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        onClick={() => setIsSimulatorOpen(false)}
                      >
                        {simulator.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/quote">
              <Button variant="neon-gold-filled" size="lg">
                Devis Gratuit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={(e) => handleSectionClick(link.id, e)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              
              {/* Simulateurs Mobile */}
              <div className="border-t border-border pt-2">
                <div className="text-sm font-semibold text-foreground mb-2">Simulateurs</div>
                {simulators.map((simulator) => (
                  <Link
                    key={simulator.href}
                    to={simulator.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {simulator.label}
                  </Link>
                ))}
              </div>
              
              <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
                <Button variant="neon-gold-filled" size="lg" className="mt-2 w-full">
                  Devis Gratuit
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
