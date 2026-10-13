import { Link } from 'react-router-dom';
import {
  Quote,
  ArrowRight,
  UserCircle,
  Sparkles,
  Rocket,
  Briefcase,
  Lightbulb,
  Compass,
  Brain,
  Users,
  Layers,
  Crown,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PointItem from '@/components/PointItem';
import { founderData } from '@/data/founderData';

const bioIcons = [Rocket, Briefcase, Lightbulb, Compass, Brain, Users, Layers];

export default function Founder() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-36 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gold-500/6 rounded-full blur-[120px]" />
        <div className="container-c relative z-10 text-center">
          <Reveal>
            <p className="eyebrow mb-4">Founder</p>
            <h1 className="heading-lg mb-6 text-glow">The Visionary Behind Ojasviq</h1>
            <div className="gold-divider mb-8" />
            <p className="body-text mx-auto text-center max-w-2xl">
              A story of conviction, insight, and the belief that every individual's potential deserves to be seen — not guessed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Profile Card */}
      <section className="py-16">
        <div className="container-c max-w-4xl">
          <Reveal>
            <div className="card p-8 sm:p-12 border-gold-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* Photo placeholder */}
                <div className="shrink-0">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 border-2 border-gold-500/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-electric-500/10" />
                    <img
                      src={founderData.photoPlaceholder}
                      alt="Ojasviq brand mark"
                      className="relative z-10 w-[90%] h-[70%] object-contain opacity-90"
                    />
                    <UserCircle size={24} className="absolute bottom-3 text-navy-200" />
                  </div>
                </div>

                {/* Name & designation */}
                <div className="text-center sm:text-left">
                  <h2 className="font-serif text-3xl sm:text-4xl text-white mb-2">{founderData.name}</h2>
                  <p className="text-gold-400 font-medium text-sm tracking-wide mb-4">{founderData.designation}</p>
                  <div className="h-px w-16 bg-gold-500/40 mx-auto sm:mx-0 mb-4" />
                  <p className="text-navy-200 text-sm leading-relaxed max-w-md">
                    Driven by a deep conviction that every individual carries within them a unique constellation of strengths, abilities, and untapped potential.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow mb-4">The Journey</p>
            <h2 className="heading-sm mb-6">A Vision Born From Insight</h2>
            <div className="gold-divider-left mb-8" />
          </Reveal>

          <div className="space-y-6">
            {founderData.bio.map((para, i) => (
              <Reveal key={i} delay={i * 100}>
                <PointItem icon={bioIcons[i % bioIcons.length]}>{para}</PointItem>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-20 bg-navy-950/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="container-c max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 mb-8">
              <Sparkles size={28} className="text-gold-400 icon-float" />
            </div>
            <Quote size={36} className="text-gold-500/30 mx-auto mb-8" />
            <blockquote className="font-serif text-2xl sm:text-3xl text-gold-100 italic leading-snug mb-6">
              {founderData.visionQuote}
            </blockquote>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </section>

      {/* Additional Info */}
      <section className="py-16">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow mb-4">Leadership & Affiliation</p>
            <h2 className="heading-sm mb-6">Guiding Ojasviq Forward</h2>
            <div className="gold-divider-left mb-6" />
            <PointItem icon={Crown}>{founderData.additionalInfo}</PointItem>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="container-c text-center">
          <Reveal>
            <h2 className="heading-sm mb-6">Connect With Ojasviq</h2>
            <p className="body-text mx-auto text-center mb-8">
              Discover how our founder's vision can help you unlock your unique potential.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
