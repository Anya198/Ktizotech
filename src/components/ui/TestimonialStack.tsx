'use client'

import React, { useState, useRef, useEffect, useCallback, CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Zap, CheckCircle2, Star } from 'lucide-react';

const ICON_MAP = {
  Clock: Clock,
  Zap: Zap,
  CheckCircle2: CheckCircle2,
  Star: Star,
};

export interface Testimonial {
  id: string | number;
  initials: string;
  name: string;
  role: string;
  quote: string;
  tags: { text: string; type: 'featured' | 'default' }[];
  stats: { icon: string; text: string; }[];
  avatarGradient: string;
}

export interface TestimonialStackProps {
  testimonials: Testimonial[];
  visibleBehind?: number;
}

export const TestimonialStack = ({ testimonials, visibleBehind = 2 }: TestimonialStackProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartRef = useRef(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalCards = testimonials.length;

  const navigate = useCallback((newIndex: number) => {
    setActiveIndex((newIndex + totalCards) % totalCards);
  }, [totalCards]);

  // Auto-advance logic
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      navigate(activeIndex + 1);
    }, 5000); // 5 seconds per card

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, isDragging, navigate]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, index: number) => {
    if (index !== activeIndex) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartRef.current = clientX;
    cardRefs.current[activeIndex]?.classList.add('is-dragging');
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStartRef.current);
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    cardRefs.current[activeIndex]?.classList.remove('is-dragging');
    if (Math.abs(dragOffset) > 50) {
      navigate(activeIndex + (dragOffset < 0 ? 1 : -1));
    }
    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset, activeIndex, navigate]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);
  
  if (!testimonials?.length) return null;

  return (
    <section 
        className="relative h-[500px] w-full max-w-[600px] mx-auto flex flex-col items-center justify-center py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full">
        {testimonials.map((testimonial, index) => {
          const displayOrder = (index - activeIndex + totalCards) % totalCards;
          const isActive = displayOrder === 0;

          const style: CSSProperties = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            maxWidth: '520px',
            transform: 'translate(-50%, -50%)',
            transition: isDragging && isActive ? 'none' : 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
            cursor: isActive ? (isDragging ? 'grabbing' : 'grab') : 'default',
            userSelect: 'none',
          };

          if (displayOrder === 0) {
            style.transform = `translate(calc(-50% + ${dragOffset}px), -50%) rotate(${dragOffset * 0.05}deg)`;
            style.opacity = 1;
            style.zIndex = totalCards;
          } else if (displayOrder <= visibleBehind) {
            const scale = 1 - 0.04 * displayOrder; // More subtle scaling
            const translateY = -1.8 * displayOrder; // More offset to "peek" better
            style.transform = `translate(-50%, calc(-50% + ${translateY}rem)) scale(${scale})`;
            style.opacity = 1 - 0.3 * displayOrder; // Sharper fade to distinguish layers
            style.zIndex = totalCards - displayOrder;
          } else {
            style.transform = 'translate(-50%, -50%) scale(0.8)';
            style.opacity = 0;
            style.zIndex = 0;
            style.pointerEvents = 'none';
          }

          return (
            <div
              ref={el => { cardRefs.current[index] = el; }}
              key={testimonial.id}
              className={cn(
                "bg-white border-2 border-border/50 rounded-[2rem] p-8 md:p-10 shadow-elevated transition-shadow duration-300",
                isActive ? "hover:border-blue/30" : "pointer-events-none"
              )}
              style={style}
              onMouseDown={(e) => handleDragStart(e, index)}
              onTouchStart={(e) => handleDragStart(e, index)}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{ background: testimonial.avatarGradient }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-navy font-bold text-xl">{testimonial.name}</h3>
                    <p className="text-sm text-text3">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="relative mb-8">
                    <span className="absolute -top-4 -left-2 text-blue/10 text-6xl font-serif">"</span>
                    <blockquote className="text-text2 leading-relaxed text-lg relative z-10 italic">
                        {testimonial.quote}
                    </blockquote>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border/40 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="flex flex-wrap gap-2">
                        {testimonial.tags.map((tag, i) => (
                            <span 
                                key={i} 
                                className={cn(
                                    "px-3 py-1 rounded-pill text-[10px] font-bold uppercase tracking-wider",
                                    tag.type === 'featured' ? "bg-blue/10 text-blue border border-blue/20" : "bg-bg3 text-text3"
                                )}
                            >
                                {tag.text}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        {testimonial.stats.map((stat, i) => {
                            const IconComponent = (ICON_MAP[stat.icon as keyof typeof ICON_MAP] || Star) as React.ComponentType<{ className?: string }>;
                            return (
                                <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-text3">
                                    <IconComponent className="h-4 w-4 text-blue" />
                                    <span>{stat.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex gap-3 justify-center mt-12 bg-white/50 backdrop-blur-md p-2 rounded-pill border border-border/50">
        {testimonials.map((_, index) => (
          <button 
            key={index} 
            aria-label={`Go to testimonial ${index + 1}`} 
            onClick={() => navigate(index)} 
            className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                activeIndex === index ? "bg-blue w-8" : "bg-blue-mid hover:bg-blue-mid/80"
            )} 
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialStack;
