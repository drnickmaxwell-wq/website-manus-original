'use client';

import React from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ArrowRight, Sparkles, Award, Users, Clock } from 'lucide-react';
import { CoastalWaves } from '@/components/effects/coastal-waves';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { LuxuryCard, LuxuryCardContent } from '@/components/ui/luxury-card';
import BrandHeroGradient from '@/components/brand/BrandHeroGradient';
import IridescentHeading from '@/components/brand/IridescentHeading';

const heroStats = [
  { icon: Users, value: '2,500+', label: 'Happy Patients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Sparkles, value: '98%', label: 'Satisfaction Rate' },
  { icon: Clock, value: '24/7', label: 'Emergency Care' },
];

const easeInOutCubic: [number, number, number, number] = [0.65, 0.05, 0.36, 1];

export function HeroSection() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 240], [0, shouldReduceMotion ? 0 : -6]);
  const opacity = useTransform(scrollY, [0, 200], [1, shouldReduceMotion ? 1 : 0.7]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.16,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
        ease: easeInOutCubic,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOutCubic },
    },
  };

  return (
    <BrandHeroGradient
      className="relative overflow-hidden py-24 md:py-36"
      backgroundImageSrc="/waves/hero-waves-alone.webp"
      particles={["gold", "teal", "magenta"]}
      filmGrain={true}
    >
      {/* Main Content */}
      <motion.div
        className="relative z-20 container-luxury text-center text-balance flex min-h-screen flex-col items-center justify-center text-smh-text"
        style={{ y: shouldReduceMotion ? 0 : y, opacity: shouldReduceMotion ? 1 : opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full px-6 py-2 mb-8 smh-glass smh-gold-border"
          >
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span className="text-brand-text font-medium">AI-Powered 3D Dentistry</span>
            {!shouldReduceMotion && (
              <motion.div
                className="w-2 h-2 rounded-full bg-brand-turquoise"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: easeInOutCubic }}
              />
            )}
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <IridescentHeading className="text-front-headline font-bold text-brand-text mb-6 leading-tight">
              Luxury Dentistry, Redefined by Technology
            </IridescentHeading>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-front-subtitle text-brand-muted mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Advanced 3D dentistry meets coastal tranquility at St Mary's House. 
            From same-day veneers to digital twin smile simulations, we're{' '}
            <span className="text-brand-magenta font-semibold">"Going the Extra Smile"</span> 
            for every patient in Shoreham-by-Sea.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <LuxuryButton
              variant="primary"
              size="lg"
              glow
              shimmer
              className="group"
            >
              Book Your Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </LuxuryButton>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {heroStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <LuxuryCard
                  key={stat.label}
                  variant="glass"
                  hover
                  glow
                  className="text-center smh-gold-border"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.6 + index * 0.1, duration: 0.6, ease: easeInOutCubic }}
                >
                  <LuxuryCardContent className="py-6 smh-glass">
                    <div className="flex justify-center mb-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full smh-gradient-bg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-brand-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-brand-muted">
                      {stat.label}
                    </div>
                  </LuxuryCardContent>
                </LuxuryCard>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 1.2, ease: easeInOutCubic }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-brand-muted text-sm">Discover More</span>
              <motion.div
                className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-[color:color-mix(in_oklab,var(--smh-gold)_85%,white)]"
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { y: [0, 6, 0] }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 2.4, repeat: Infinity, ease: easeInOutCubic }
                }
              >
                <motion.div
                  className="mt-2 h-3 w-1 rounded-full bg-brand-turquoise"
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { y: [0, 6, 0] }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { duration: 2.4, repeat: Infinity, ease: easeInOutCubic }
                  }
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute top-20 left-10 h-20 w-20 rounded-full smh-gradient-bg opacity-20 blur-xl" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-32 w-32 rounded-full smh-gradient-bg opacity-20 blur-2xl" />

      <CoastalWaves
        className="absolute bottom-0 left-0 right-0 z-5 h-16"
        variant="hero"
        animated={!shouldReduceMotion}
      />
    </BrandHeroGradient>
  );
}

