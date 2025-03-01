import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, .hover-effect').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  const cursorClasses = `cursor-dot fixed pointer-events-none z-50 transition-transform duration-150 ease-out transform ${
    hidden ? 'opacity-0' : 'opacity-100'
  } ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`;

  const cursorRingClasses = `cursor-ring fixed pointer-events-none z-40 rounded-full border border-secondary transition-transform duration-300 ease-out transform ${
    hidden ? 'opacity-0' : 'opacity-100'
  } ${clicked ? 'scale-100' : ''} ${linkHovered ? 'scale-150 bg-secondary bg-opacity-20' : ''}`;

  return (
    <>
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          backgroundColor: '#64ffda',
          borderRadius: '50%',
          marginLeft: '-4px',
          marginTop: '-4px',
        }}
      />
      <div
        className={cursorRingClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '40px',
          height: '40px',
          marginLeft: '-20px',
          marginTop: '-20px',
        }}
      />
    </>
  );
};

export default Cursor;
