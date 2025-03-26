import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  KeyboardEvent,
  MouseEvent,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MoveRightIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/About/icon.png';

/** Custom hook to detect if a media query matches */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

interface NavItem {
  name: string;
  path: string;
  dropdownItems?: NavItem[];
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Poultry Products', path: '/poultry' },
  { name: 'Our Work', path: '/products' },
  { name: 'Our Services', path: '/services' },
  {
    name: 'Other Products',
    path: '#',
    dropdownItems: [
      { name: 'Livestock Farming', path: '/livestock' },
      { name: 'Organic Vegetables', path: '/vegetable' },
    ],
  },
  { name: 'Contact Us', path: '/contact' },
];

interface DropdownProps {
  title: string;
  items: NavItem[];
  onItemClick?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, onItemClick }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  // Close dropdown when clicking outside.
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard handler for the dropdown toggle.
  const handleToggleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  // Handle keyboard events on a dropdown item using its index.
  const handleItemKeyDown = (
    e: KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      setFocusedIndex(nextIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      setFocusedIndex(prevIndex);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  // When focusedIndex changes, move focus to that menu item.
  useEffect(() => {
    if (focusedIndex >= 0 && dropdownRef.current) {
      const list = dropdownRef.current.querySelectorAll<HTMLAnchorElement>(
        'a.dropdown-item'
      );
      if (list[focusedIndex]) {
        list[focusedIndex].focus();
      }
    }
  }, [focusedIndex]);

  // For mobile, toggle dropdown via click only.
  const handleToggleClick = () => {
    setIsOpen((prev) => !prev);
  };

  // Render dropdown items with an onClick that also calls onItemClick (if mobile).
  const renderDropdownItems = () => (
    <div className="py-1" role="menu" aria-orientation="vertical">
      {items.map((dropdownItem, index) => (
        <Link
          key={dropdownItem.name}
          to={dropdownItem.path}
          className="dropdown-item flex items-center px-4 py-2 text-sm hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none"
          role="menuitem"
          tabIndex={0}
          onKeyDown={(e) => handleItemKeyDown(e, index)}
          onClick={() => {
            setIsOpen(false);
            // If on mobile and an onItemClick callback is provided, call it to close the nav menu.
            if (isMobile && onItemClick) {
              onItemClick();
            }
          }}
        >
          {dropdownItem.name}
        </Link>
      ))}
    </div>
  );

  return (
    <div
      className="relative inline-block text-left"
      ref={dropdownRef}
      // Only attach hover events on desktop.
      {...(!isMobile && {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => {
          setIsOpen(false);
          setFocusedIndex(-1);
        },
      })}
    >
      <button
        type="button"
        onClick={handleToggleClick}
        onKeyDown={handleToggleKeyDown}
        className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out hover:bg-yellow-300 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown className="ml-2 transition-colors duration-300" size={16} />
      </button>

      {/* Desktop rendering: normal absolute dropdown */}
      {!isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute left-0 mt-2 w-56 origin-top-left bg-yellow-300 text-green-800 rounded-lg shadow-lg z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderDropdownItems()}
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mobile rendering: dropdown pops as an overlay */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-x-0 top-20 bg-yellow-300 text-green-800 rounded-lg shadow-xl z-50 mx-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderDropdownItems()}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <img
              src={Logo}
              alt="Newry Logo"
              className="ml-5 h-16 w-16 md:h-20 md:w-20 rounded-full"
            />
            <span className="ml-3 text-lg md:text-xl font-semibold tracking-wider group-hover:text-green-200 transition-colors duration-300">
              Newry Farm
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) =>
                item.dropdownItems ? (
                  <Dropdown
                    key={item.name}
                    title={item.name}
                    items={item.dropdownItems}
                  />
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`group relative px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-300 ease-in-out hover:bg-white hover:text-green-700 ${
                      location.pathname === item.path
                        ? 'bg-green-800 text-white'
                        : ''
                    }`}
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide-down) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-green-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) =>
                item.dropdownItems ? (
                  <div key={item.name} className="relative">
                    {/* Pass toggleMobileMenu to Dropdown so that clicking a dropdown item closes the mobile menu */}
                    <Dropdown
                      title={item.name}
                      items={item.dropdownItems}
                      onItemClick={toggleMobileMenu}
                    />
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 transition-colors duration-300 ${
                      location.pathname === item.path ? 'bg-green-800 text-white' : ''
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <MoveRightIcon className="h-5 w-5 mr-2 animate-sway" />
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/**
 * EnhancedNavbar wraps the Navbar component and injects global styles.
 * We define a custom keyframe animation (sway) for mobile menu icons.
 */
const EnhancedNavbar: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes sway {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
          .animate-sway {
            animation: sway 3s ease-in-out infinite;
          }
        `}
      </style>
      <Navbar />
    </>
  );
};

export default EnhancedNavbar;
