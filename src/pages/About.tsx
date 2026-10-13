import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Compass,
  ArrowRight,
  Quote,
  Fingerprint,
  CircleCheck,
  HelpCircle,
  ScanEye,
  TrendingUp,
  Brain,
  Microscope,
  GraduationCap,
  Heart,
  Cpu,
  Network,
  Sparkles,
  Users,
  Puzzle,
  Layers,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PointItem from '@/components/PointItem';

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-36 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gold-500/6 rounded-full blur-[120px]" />
        <div className="container-c relative z-10 text-center">
          <Reveal>
            <p className="eyebrow mb-4">About Us</p>
            <h1 className="heading-lg mb-6 text-glow">The Story Behind Ojasviq</h1>
            <div className="gold-divider mb-8" />
            <p className="body-text mx-auto text-center max-w-2xl">
              A journey born from a simple belief: that every person carries within them a unique constellation of potential — waiting to be understood, not guessed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container-narrow space-y-6">
          <Reveal>
            <h2 className="heading-sm mb-6">Who We Are</h2>
            <div className="gold-divider-left mb-6" />
            <PointItem icon={Sparkles}>
              Ojasviq is an AI-powered personality and human potential assessment platform designed to help students and working professionals discover their unique strengths, capabilities, personality traits, and potential — empowering them to make more informed decisions about education, careers, relationships, and life.
            </PointItem>
            <PointItem icon={Users} className="mt-5">
              We exist because we believe that the key to better outcomes lies not in comparing yourself to others, but in understanding yourself more deeply.
            </PointItem>
          </Reveal>
        </div>
      </section>

      {/* Our Belief */}
      <section className="py-20 bg-navy-950/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow mb-4">Our Belief</p>
            <h2 className="heading-sm mb-6">Better Outcomes Begin With Better Self-Understanding</h2>
            <div className="gold-divider-left mb-6" />
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={100}>
              <PointItem icon={Fingerprint}>
                We believe every individual is unique, with their own strengths, abilities, personality, and potential.
              </PointItem>
            </Reveal>
            <Reveal delay={200}>
              <PointItem icon={Compass}>
                Yet, people often struggle — not because they lack potential, but because they lack the right understanding of themselves and how to channel their abilities in the right direction.
              </PointItem>
            </Reveal>
            <Reveal delay={300}>
              <blockquote className="my-10 border-l-2 border-gold-500 pl-6 py-2">
                <p className="font-serif text-2xl text-gold-200 italic leading-snug">
                  At Ojasviq, we believe that better outcomes begin with better self-understanding.
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={400}>
              <PointItem icon={Eye}>
                Our goal is to help individuals gain deeper insights into who they are, what they are naturally capable of, and where their potential can take them.
              </PointItem>
            </Reveal>
            <Reveal delay={500}>
              <PointItem icon={CircleCheck}>
                Because when you understand yourself better, you can make better choices.
              </PointItem>
            </Reveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow mb-4">Our Approach</p>
            <h2 className="heading-sm mb-6">A Different Way of Understanding People</h2>
            <div className="gold-divider-left mb-6" />
            <PointItem icon={Puzzle}>
              Traditional personality assessments often rely on self-reported questionnaires, asking individuals to describe themselves. However, responses can be influenced — consciously or unconsciously — by self-perception, expectations, social conditioning, or the desire to present oneself in a particular way.
            </PointItem>
          </Reveal>
          <Reveal delay={100}>
            <div className="my-8 card p-6 border-gold-500/20 bg-gold-500/5">
              <p className="font-serif text-xl text-gold-200 italic text-center">
                Ojasviq takes a different approach.
              </p>
            </div>
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={150}>
              <PointItem icon={HelpCircle}>
                Instead of simply asking, "Who do you think you are?" we seek to explore, "What makes you uniquely capable?"
              </PointItem>
            </Reveal>
            <Reveal delay={250}>
              <PointItem icon={ScanEye}>
                Using iris scanning, AI technology, and our proprietary assessment framework, Ojasviq analyzes distinctive iris patterns and applies computational models and structured assessment methodologies to generate personalized insights and recommendations.
              </PointItem>
            </Reveal>
            <Reveal delay={350}>
              <PointItem icon={TrendingUp}>
                Our objective is to move beyond simply asking people to describe themselves and toward a more data-informed approach to understanding individual characteristics, strengths, and potential.
              </PointItem>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-navy-950/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="container-c max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="card p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/30 flex items-center justify-center mb-6">
                  <Target size={26} className="text-gold-400 icon-float" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">Our Mission</h3>
                <div className="h-px w-12 bg-gold-500/40 mb-5" />
                <p className="text-navy-100 leading-relaxed">
                  To help individuals gain deeper insights into who they are, what they are naturally capable of, and where their potential can take them — using a data-informed approach that goes beyond self-reporting to reveal what makes each person uniquely capable.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="card p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-500/20 to-electric-500/5 border border-electric-400/30 flex items-center justify-center mb-6">
                  <Eye size={26} className="text-electric-400 icon-float" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">Our Vision</h3>
                <div className="h-px w-12 bg-gold-500/40 mb-5" />
                <p className="text-navy-100 leading-relaxed">
                  To create a world where every individual has access to deep, personalized understanding of their own potential — empowering better decisions about education, careers, relationships, and life. A world where self-discovery is not limited by self-perception, but illuminated by insight.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Pull quote */}
          <Reveal delay={200}>
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <Quote size={32} className="text-gold-500/40 mx-auto mb-6" />
              <p className="font-serif text-2xl sm:text-3xl text-gold-100 italic leading-snug">
                Because understanding yourself shouldn't end with a score — it should begin with insight.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-c max-w-4xl">
          <Reveal className="text-center mb-12">
            <p className="eyebrow mb-4">Our Team</p>
            <h2 className="heading-sm mb-6">A Multidisciplinary Approach</h2>
            <div className="gold-divider mb-8" />
            <p className="body-text mx-auto text-center">
              Human behaviour is complex. Personality, emotions, cognition, learning, relationships, career choices, and professional performance are all interconnected. That is why Ojasviq brings together expertise from multiple disciplines.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="body-text mx-auto text-center mb-10">
              Our multidisciplinary approach combines perspectives from psychology, neuroscience, education, behavioural science, technology, and AI to create a more comprehensive understanding of human potential.
            </p>
          </Reveal>

          <div className="space-y-4">
            {[
              { icon: Brain, title: 'Psychologists', desc: 'To understand human behaviour, emotions, personality, and psychological patterns.' },
              { icon: Microscope, title: 'Neurologists & Neuroscience Experts', desc: 'To contribute expertise in the brain and nervous system, including cognition, memory, attention, learning, and brain–behaviour relationships.' },
              { icon: GraduationCap, title: 'Education & Career Counselors', desc: 'To understand the challenges students and professionals face when choosing education, careers, and life directions.' },
              { icon: Heart, title: 'Relationship Counselors', desc: 'To understand interpersonal dynamics, communication patterns, and relationship challenges.' },
              { icon: Cpu, title: 'AI/ML Experts', desc: 'To transform complex data into meaningful patterns, insights, and personalized recommendations.' },
              { icon: Network, title: 'Software Developers', desc: 'To build technology that makes these insights accessible, scalable, and practical.' },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div className="group card card-hover p-6 flex items-start gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <m.icon size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-gold-200 mb-1">{m.title}</h3>
                    <p className="text-navy-200 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 card p-8 text-center border-gold-500/20">
              <p className="text-navy-100 leading-relaxed mb-2">
                Our methodology is associated with the{' '}
                <span className="text-gold-300 font-medium">American Research Institute of Dermis & Genetic Evaluation (ARIDGE)</span>
                , USA.
              </p>
              <p className="text-navy-200 text-sm">
                Their published materials describe iris analysis as an approach intended to explore individual characteristics and inherent abilities through iris patterns.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="container-c text-center">
          <Reveal>
            <h2 className="heading-sm mb-6">Begin Your Journey of Self-Discovery</h2>
            <p className="body-text mx-auto text-center mb-8">
              Connect with us to learn how Ojasviq can help you understand your unique potential.
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
