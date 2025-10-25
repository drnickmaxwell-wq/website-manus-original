'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Calendar,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Heart,
  Shield,
} from 'lucide-react';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { LuxuryCard, LuxuryCardContent } from '@/components/ui/luxury-card';
import BrandHeroGradient from '@/components/brand/BrandHeroGradient';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us Now',
    description: 'Speak directly with our friendly team',
    action: 'Call 01273 453109',
    href: 'tel:01273453109',
    color: 'from-brand-magenta to-brand-magenta-light',
    badge: '24/7 Emergency',
  },
  {
    icon: Calendar,
    title: 'Book Online',
    description: 'Schedule your appointment instantly',
    action: 'Book Consultation',
    href: '/booking',
    color: 'from-brand-turquoise to-brand-turquoise-light',
    badge: 'Same Day Available',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Find us in beautiful Shoreham-by-Sea',
    action: 'Get Directions',
    href: '/contact',
    color: 'from-brand-gold to-brand-gold-light',
    badge: 'Coastal Location',
  },
];

const guarantees = [
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'All treatments backed by our quality promise',
  },
  {
    icon: Heart,
    title: 'Comfort Promise',
    description: 'Anxiety-free dentistry with sedation options',
  },
  {
    icon: Sparkles,
    title: 'Latest Technology',
    description: '3D imaging, AI diagnostics, and digital twins',
  },
];

const easeInOutCubic: [number, number, number, number] = [0.65, 0.05, 0.36, 1];

export function CTASection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
        ease: easeInOutCubic,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOutCubic },
    },
  };

  return (
    <BrandHeroGradient className="py-16 text-brand-text" particles={["gold"]} filmGrain>
      <div className="container-luxury">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="smh-glass smh-gold-border mb-6 inline-flex items-center gap-2 rounded-full px-6 py-2">
              <Calendar className="h-4 w-4 text-brand-magenta" />
              <span className="font-medium">Ready to Start?</span>
            </div>

            <h2 className="text-content-headline font-bold text-brand-text mb-6">
              Your Perfect Smile is Just{' '}
              <span className="bg-gradient-to-r from-brand-magenta to-brand-turquoise bg-clip-text text-transparent">
                One Click Away
              </span>
            </h2>

            <p className="text-content-body mx-auto mb-8 max-w-3xl text-brand-muted">
              Experience the future of dentistry with our AI-powered 3D treatments, luxury coastal setting, and award-winning
              patient care. Book your consultation today and discover why we're "Going the Extra Smile."
            </p>

            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/booking" className="inline-flex">
                <LuxuryButton
                  variant="primary"
                  size="xl"
                  glow
                  shimmer
                  className="group px-12 text-lg"
                >
                  Book Free Consultation
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </LuxuryButton>
              </Link>

              <Link href="/digital-twin" className="inline-flex">
                <LuxuryButton
                  variant="outline"
                  size="xl"
                  className="border-brand-turquoise px-12 text-lg text-brand-turquoise hover:bg-brand-turquoise hover:text-white"
                >
                  Try AI Smile Quiz
                </LuxuryButton>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-brand-muted">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-brand-turquoise" />
                <span>CQC Outstanding Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-turquoise" />
                <span>Same-Day Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-brand-turquoise" />
                <span>98% Patient Satisfaction</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <motion.div key={method.title} variants={itemVariants}>
                  <Link href={method.href} className="block h-full">
                    <LuxuryCard
                      variant="elevated"
                      hover
                      glow
                      className="group relative h-full overflow-hidden smh-gold-border"
                    >
                      <div className="absolute inset-0 -z-[1] smh-glass" />

                      <div className="absolute top-4 right-4 z-20">
                        <span className="smh-glass smh-gold-border rounded-full px-3 py-1 text-xs font-semibold text-brand-text">
                          {method.badge}
                        </span>
                      </div>

                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color}`} />

                      <LuxuryCardContent className="relative py-8 text-center">
                        <div className="mb-6 flex justify-center">
                          <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${method.color} transition-transform duration-300 group-hover:scale-110`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                        </div>

                        <h3 className="mb-3 text-xl font-semibold text-brand-text">{method.title}</h3>
                        <p className="mb-6 text-brand-muted">{method.description}</p>

                        <LuxuryButton
                          variant="outline"
                          className="group w-full border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white"
                        >
                          {method.action}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </LuxuryButton>
                      </LuxuryCardContent>
                    </LuxuryCard>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto mb-12 max-w-4xl text-center">
            <h3 className="mb-8 text-2xl font-semibold text-brand-text">Our Promise to You</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {guarantees.map((guarantee) => {
                const Icon = guarantee.icon;
                return (
                  <div key={guarantee.title} className="smh-glass smh-gold-border rounded-3xl p-6 text-left">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-brand-magenta to-brand-turquoise">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-brand-text">{guarantee.title}</h4>
                    <p className="text-sm text-brand-muted">{guarantee.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <LuxuryCard variant="gradient" glow className="mx-auto max-w-2xl text-center smh-gold-border">
              <LuxuryCardContent className="py-8 smh-glass">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-brand-magenta to-brand-turquoise">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-semibold text-brand-text">Dental Emergency?</h3>
                <p className="mb-4 text-brand-muted">
                  Don't wait – we provide 24/7 emergency dental care for urgent situations.
                </p>

                <Link href="tel:01273453109" className="inline-flex">
                  <LuxuryButton
                    variant="primary"
                    size="lg"
                    className="px-8"
                  >
                    Call Emergency Line: 01273 453109
                  </LuxuryButton>
                </Link>
              </LuxuryCardContent>
            </LuxuryCard>
          </motion.div>
        </motion.div>
      </div>
    </BrandHeroGradient>
  );
}
