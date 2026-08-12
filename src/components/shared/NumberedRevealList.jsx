import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NumberedRevealList.css';

export function NumberedRevealList({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="reveal-list-container">
      <div className="reveal-list-content">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={item.id} 
              className={`reveal-list-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)} // Adding hover support for desktop intuitiveness
            >
              <div className="reveal-list-number">
                {String(index + 1).padStart(2, '0')}{index === 0 ? '1' : ''} {/* For 001 format */}
                {/* Actually simple format based on item data or 001, 002 */}
                {item.number || String(index + 1).padStart(3, '0')}
              </div>
              <div className="reveal-list-text">
                <h3>{item.title}</h3>
                <AnimatePresence>
                  {isActive && item.description && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
      <div className="reveal-list-image-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="reveal-list-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            {items[activeIndex].image || <div className="placeholder-image" />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
