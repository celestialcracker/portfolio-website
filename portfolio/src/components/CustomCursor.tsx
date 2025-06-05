import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
      
      // If mobile, add a class to body to use default cursor
      if (isMobileDevice) {
        document.body.classList.add('no-custom-cursor');
      } else {
        document.body.classList.remove('no-custom-cursor');
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only apply custom cursor on non-mobile devices
    if (!isMobile) {
      const addEventListeners = () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
      };

      const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseleave', onMouseLeave);
      };

      const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const onMouseDown = () => {
        setClicked(true);
      };

      const onMouseUp = () => {
        setClicked(false);
      };

      const onMouseEnter = () => {
        setHidden(false);
      };

      const onMouseLeave = () => {
        setHidden(true);
      };

      const onLinkHoverStart = () => {
        setLinkHovered(true);
      };

      const onLinkHoverEnd = () => {
        setLinkHovered(false);
      };

      document.querySelectorAll('a, button, [role="button"], input, select, textarea').forEach(el => {
        el.addEventListener('mouseenter', onLinkHoverStart);
        el.addEventListener('mouseleave', onLinkHoverEnd);
      });

      addEventListeners();

      return () => {
        removeEventListeners();
        document.querySelectorAll('a, button, [role="button"], input, select, textarea').forEach(el => {
          el.removeEventListener('mouseenter', onLinkHoverStart);
          el.removeEventListener('mouseleave', onLinkHoverEnd);
        });
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 z-50 pointer-events-none"
      animate={{
        x: position.x - (linkHovered ? 24 : clicked ? 16 : 12),
        y: position.y - (linkHovered ? 24 : clicked ? 16 : 12),
        opacity: hidden ? 0 : 1,
        scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        damping: 35,
        stiffness: 300,
        mass: 0.1,
      }}
    >
      <div 
        className={`
          w-6 h-6 rounded-full border-2
          ${linkHovered 
            ? 'border-primary-400 bg-primary-400/20' 
            : 'border-primary-500 bg-transparent'}
          flex items-center justify-center
          transition-all duration-200
        `}
      >
        {linkHovered && (
          <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
        )}
      </div>
    </motion.div>
  );
};

export default CustomCursor;