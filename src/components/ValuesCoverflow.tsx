import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Belief {
  title: string;
  desc: string;
}

interface ValuesCoverflowProps {
  beliefs: Belief[];
}

export const ValuesCoverflow: React.FC<ValuesCoverflowProps> = ({ beliefs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Duplicate the beliefs to create a full continuous ring of 10 items
  const ringItems = [...beliefs, ...beliefs];
  const totalItems = ringItems.length;
  const angleDeg = 360 / totalItems;
  // Concave cylinder settings
  const radius = 500; // Radius of the 3D cylinder
  const cardWidth = 320;
  
  const nextSlide = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => prev - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 40) prevSlide();
    else if (diff < -40) nextSlide();
    setTouchStart(null);
  };

  // Mouse drag support
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) {
      setIsDragging(false);
      setDragStartX(null);
      return;
    }
    const dragEndX = e.clientX;
    const diff = dragStartX - dragEndX;
    // We only trigger if the user dragged significantly
    if (diff > 40) prevSlide();
    else if (diff < -40) nextSlide();
    setIsDragging(false);
    setDragStartX(null);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMouseUp(e);
    }
  };

  // Calculate the current rotation of the entire ring
  const ringRotation = activeIndex * angleDeg;

  return (
    <div className="relative w-full py-8 sm:py-16 overflow-hidden select-none">
      
      {/* 3D Ring Stage */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className="relative h-[400px] sm:h-[450px] md:h-[500px] w-full flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing"
        style={{ perspective: '1000px' }}
      >
        <div 
          className="relative w-[320px] h-[400px] md:h-[450px]"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `translateZ(${radius}px) rotateY(${ringRotation}deg)`,
            transition: 'transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        >
          {ringItems.map((belief, index) => {
            // Determine if this item is currently facing the front
            // Because activeIndex can be negative or positive infinity, we use modulo
            const normalizedActiveIndex = ((activeIndex % totalItems) + totalItems) % totalItems;
            const isCenter = normalizedActiveIndex === index;
            
            const itemRotation = index * -angleDeg;
            
            return (
              <div
                key={`${belief.title}-${index}`}
                onClick={() => {
                  if (!isCenter) {
                    // Figure out the shortest path to this index
                    let diff = index - normalizedActiveIndex;
                    if (diff > totalItems / 2) diff -= totalItems;
                    if (diff < -totalItems / 2) diff += totalItems;
                    setActiveIndex(activeIndex + diff);
                  }
                }}
                style={{
                  transform: `rotateY(${itemRotation}deg) translateZ(-${radius}px)`,
                  transition: 'opacity 500ms ease, filter 500ms ease',
                  opacity: isCenter ? 1 : 0.8,
                  filter: isCenter ? 'brightness(1) blur(0px)' : 'brightness(0.6) blur(0.5px)'
                }}
                className={`absolute inset-0 rounded-[24px] overflow-hidden cursor-pointer flex flex-col justify-end p-6 border ${
                  isCenter ? 'border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.8)]' : 'border-transparent shadow-2xl'
                }`}
              >
                {/* Background Image */}
                <img src={`/about/whatwebelieve${(index % beliefs.length) + 1}.png`} alt={belief.title} className="absolute inset-0 w-full h-full object-cover -z-20" />
                
                {/* Image Overlay Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay -z-10"></div>
                
                {/* Gradient Overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03101D] via-[#03101D]/40 to-transparent -z-10"></div>

                <div className="relative z-10 flex flex-col">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-sm border ${
                    isCenter ? 'bg-cyan-500 text-white border-cyan-400' : 'bg-white/10 text-white/70 border-white/10'
                  }`}>
                    <span className="font-bold text-sm">{(index % beliefs.length) + 1}</span>
                  </div>
                  
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 ${isCenter ? 'text-white' : 'text-white/90'}`}>
                    {belief.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${isCenter ? 'text-slate-300' : 'text-slate-400'} ${!isCenter && 'line-clamp-2'}`}>
                    {belief.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls: Arrows and Dots */}
      <div className="flex items-center justify-center gap-6 mt-12 relative z-10">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer shadow-md backdrop-blur-md"
          aria-label="Previous value"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-3">
          {beliefs.map((_, originalIdx) => {
            const normalizedActiveIndex = ((activeIndex % totalItems) + totalItems) % totalItems;
            // The active indicator maps to activeIndex modulo 5 (since we duplicated)
            const isActive = (normalizedActiveIndex % beliefs.length) === originalIdx;
            
            return (
              <button
                key={originalIdx}
                onClick={() => {
                  // Jump to the closest original or duplicated index that corresponds to this belief
                  let targetIdx1 = originalIdx;
                  let targetIdx2 = originalIdx + beliefs.length;
                  
                  let diff1 = targetIdx1 - normalizedActiveIndex;
                  if (diff1 > totalItems / 2) diff1 -= totalItems;
                  if (diff1 < -totalItems / 2) diff1 += totalItems;
                  
                  let diff2 = targetIdx2 - normalizedActiveIndex;
                  if (diff2 > totalItems / 2) diff2 -= totalItems;
                  if (diff2 < -totalItems / 2) diff2 += totalItems;
                  
                  const diff = Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2;
                  setActiveIndex(activeIndex + diff);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer shadow-sm ${
                  isActive
                    ? 'w-10 h-2.5 bg-cyan-500'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to value ${originalIdx + 1}`}
              />
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer shadow-md backdrop-blur-md"
          aria-label="Next value"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="text-center mt-4 text-[11px] font-mono text-slate-500 relative z-10">
        Click any side card or use arrow keys / swipe to spin the ring
      </div>
    </div>
  );
};
