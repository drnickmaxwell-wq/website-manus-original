'use client';

import React from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LuxuryCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass' | 'coastal' | 'gradient';
  hover?: boolean;
  glow?: boolean;
  shimmer?: boolean;
  tilt?: boolean;
}

const cardVariants = {
  default: 'bg-white border border-gray-100 shadow-sm',
  elevated: 'bg-white shadow-lg border border-gray-50',
  glass: 'bg-white/80 backdrop-blur-md border border-white/20 shadow-xl',
  coastal: 'border border-brand-turquoise/20 shadow-lg',
  gradient: 'border border-brand-turquoise/20 shadow-lg text-white',
} as const;

const variantStyles: Record<NonNullable<LuxuryCardProps['variant']>, React.CSSProperties | undefined> = {
  default: undefined,
  elevated: undefined,
  glass: undefined,
  coastal: {
    background: 'linear-gradient(135deg,color-mix(in oklab,var(--smh-bg) 92%, transparent) 0%, color-mix(in oklab,var(--smh-primary-teal) 18%, var(--smh-bg) 82%) 100%)',
  },
  gradient: {
    background: 'var(--smh-gradient)',
  },
};

export function LuxuryCard({
  children,
  variant = 'default',
  hover = true,
  glow = false,
  shimmer = false,
  tilt = false,
  className,
  style: inlineStyle,
  ...rest
}: LuxuryCardProps) {
  const baseClasses = cn(
    'relative overflow-hidden rounded-lg transition-all duration-300',
    cardVariants[variant],
    {
      'glow-soft': glow,
      'shimmer': shimmer,
    },
    className
  );

  const cardMotionVariants: Variants = {
    initial: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0
    },
    hover: hover ? {
      scale: 1.02,
      y: -4,
      rotateX: tilt ? 5 : 0,
      rotateY: tilt ? 5 : 0,
      z: tilt ? 50 : 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    } : {},
    tap: {
      scale: 0.98,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className={baseClasses}
      variants={cardMotionVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      style={{
        ...variantStyles[variant],
        transformStyle: tilt ? 'preserve-3d' : 'flat',
        perspective: tilt ? 1000 : 'none',
        ...inlineStyle,
      }}
      {...rest}
    >
      {/* Shimmer Effect */}
      {shimmer && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
      )}
      
      {/* Coastal Wave Border */}
      {variant === 'coastal' && (
        <div
          className="absolute top-0 left-0 right-0 h-1 animate-wave"
          style={{ background: 'var(--smh-gradient)' }}
        />
      )}
      
      {/* Glass Reflection */}
      {variant === 'glass' && (
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating Particles for Luxury Effect */}
      {variant === 'gradient' && (
        <>
          <div className="absolute top-4 right-4 w-2 h-2 bg-brand-gold/30 rounded-full animate-float" />
          <div className="absolute bottom-6 left-6 w-1 h-1 bg-brand-turquoise/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-brand-magenta/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </>
      )}
    </motion.div>
  );
}

// Card Header Component
interface LuxuryCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function LuxuryCardHeader({ children, className }: LuxuryCardHeaderProps) {
  return (
    <div className={cn('p-6 pb-4', className)}>
      {children}
    </div>
  );
}

// Card Content Component
interface LuxuryCardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function LuxuryCardContent({ children, className }: LuxuryCardContentProps) {
  return (
    <div className={cn('px-6 pb-6', className)}>
      {children}
    </div>
  );
}

// Card Footer Component
interface LuxuryCardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function LuxuryCardFooter({ children, className }: LuxuryCardFooterProps) {
  return (
    <div className={cn('px-6 py-4 bg-gray-50/50 border-t border-gray-100', className)}>
      {children}
    </div>
  );
}

// Card Title Component
interface LuxuryCardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function LuxuryCardTitle({ children, className }: LuxuryCardTitleProps) {
  return (
    <h3 className={cn('text-content-subtitle font-semibold text-brand-text mb-2', className)}>
      {children}
    </h3>
  );
}

// Card Description Component
interface LuxuryCardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function LuxuryCardDescription({ children, className }: LuxuryCardDescriptionProps) {
  return (
    <p className={cn('text-brand-muted leading-relaxed', className)}>
      {children}
    </p>
  );
}

