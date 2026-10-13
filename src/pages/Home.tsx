import { Link } from 'react-router-dom';
import {
  Brain,
  Sparkles,
  GraduationCap,
  Heart,
  BookOpen,
  Users,
  Briefcase,
  Lightbulb,
  TrendingUp,
  Infinity,
  Scan,
  Cpu,
  Target,
  ArrowRight,
  Quote,
  Microscope,
  Network,
  Fingerprint,
  Compass,
  Eye,
  CircleCheck,
  Puzzle,
  Link2,
  Layers,
  ScanEye,
  Handshake,
  Waypoints,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PointItem from '@/components/PointItem';
import TiltCard from '@/components/TiltCard';

const whatYouGet = [
  { icon: Brain, title: 'Personality & Behaviour Insights', desc: 'Understand your personality characteristics, behavioural tendencies, and individual patterns.' },
  { icon: Sparkles, title: 'Strengths & Growth Opportunities', desc: 'Identify your key strengths while discovering areas where you can develop further.' },
  { icon: GraduationCap, title: 'Stream Selection & Career Guidance', desc: 'Gain insights that can support more informed education, stream, and career decisions.' },
  { icon: Heart, title: 'Emotional Intelligence Indicators', desc: 'Explore indicators related to emotional awareness, interpersonal understanding, and emotional responses.' },
  { icon: BookOpen, title: 'Learning Patterns', desc: 'Understand your learning tendencies, including visual, auditory, and kinesthetic preferences.' },
  { icon: Users, title: 'Relationship & Communication Traits', desc: 'Gain insights into communication tendencies, interpersonal behaviour, and relationship dynamics.' },
  { icon: Briefcase, title: 'Professional & Leadership Insights', desc: 'Explore workplace capabilities, professional tendencies, and potential leadership styles.' },
  { icon: Lightbulb, title: 'Creativity & Decision-Making', desc: 'Understand indicators related to creative thinking, problem-solving, and decision-making tendencies.' },
  { icon: TrendingUp, title: 'Personalized Growth Recommendations', desc: 'Receive recommendations designed around your individual insights and development areas.' },
  { icon: Infinity, title: 'Human Potential Development Roadmap', desc: 'Transform insights into a practical direction for personal and professional growth.' },
];

const teamMembers = [
  { icon: Brain, title: 'Psychologists', desc: 'To understand human behaviour, emotions, personality, and psychological patterns.' },
  { icon: Microscope, title: 'Neurologists & Neuroscience Experts', desc: 'To contribute expertise in the brain and nervous system, including cognition, memory, attention, learning, and brain–behaviour relationships.' },
  { icon: GraduationCap, title: 'Education & Career Counselors', desc: 'To understand the challenges students and professionals face when choosing education, careers, and life directions.' },
  { icon: Heart, title: 'Relationship Counselors', desc: 'To understand interpersonal dynamics, communication patterns, and relationship challenges.' },
  { icon: Cpu, title: 'AI/ML Experts', desc: 'To transform complex data into meaningful patterns, insights, and personalized recommendations.' },
  { icon: Network, title: 'Software Developers', desc: 'To build technology that makes these insights accessible, scalable, and practical.' },
];

const steps = [
  { icon: Scan, title: 'Iris Scan', desc: 'Distinctive iris patterns are captured using advanced scanning technology.', num: '01' },
  { icon: Cpu, title: 'AI Analysis', desc: 'Computational models and structured assessment methodologies analyze the data.', num: '02' },
  { icon: Target, title: 'Personalized Insights', desc: 'Receive a multidimensional view of your strengths, traits, and potential.', num: '03' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
        {/* Background gradient + glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/8 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-electric-500/6 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />

        {/* Decorative iris ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] opacity-[0.06] pointer-events-none">
          <div className="w-full h-full rounded-full border-2 border-gold-400 animate-slow-spin" />
          <div className="absolute inset-12 rounded-full border border-dashed border-gold-400/60 animate-[spin_90s_linear_infinite_reverse]" />
          <div className="absolute inset-24 rounded-full border border-electric-400/50" />
          <div className="absolute inset-36 rounded-full border border-gold-400/40" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {[
            { top: '22%', left: '14%', delay: '0s', size: 6 },
            { top: '68%', left: '9%', delay: '1.5s', size: 4 },
            { top: '30%', left: '86%', delay: '0.8s', size: 5 },
            { top: '74%', left: '82%', delay: '2.2s', size: 7 },
            { top: '14%', left: '58%', delay: '3s', size: 4 },
            { top: '56%', left: '30%', delay: '4s', size: 3 },
          ].map((d, i) => (
            <span
              key={i}
              className="float-dot absolute rounded-full bg-gold-400 shadow-[0_0_12px_rgba(212,168,58,0.8)]"
              style={{ top: d.top, left: d.left, width: d.size, height: d.size, animationDelay: d.delay }}
            />
          ))}
        </div>

        <div className="container-c relative z-10 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
              <Sparkles size={14} className="text-gold-400" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold-300">AI-Powered Human Potential Assessment</span>
            </div>
          </div>

          <h1 className="heading-lg mb-6 animate-fade-in-up text-glow" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Decode Your
            <span className="block bg-gradient-to-r from-gold-500 via-gold-200 to-gold-500 bg-clip-text text-transparent text-shimmer">Human Potential</span>
          </h1>

          <p className="body-text mx-auto text-center text-navy-100 text-lg max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
            Ojasviq uses iris scanning and AI technology to help students and working professionals discover their unique strengths, capabilities, personality traits, and potential — empowering them to make more informed decisions about education, careers, relationships, and life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <Link to="/contact" className="btn-primary">
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-gold-500/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-gold-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─────────────── OUR BELIEF ─────────────── */}
      <section className="py-24 lg:py-32 relative">
        <div className="container-c">
          <Reveal className="text-center mb-16">
            <p className="eyebrow mb-4">Our Belief</p>
            <h2 className="heading-md mb-6">Every Individual Is Unique</h2>
            <div className="gold-divider mb-8" />
          </Reveal>

          <div className="max-w-2xl mx-auto space-y-6">
            <Reveal>
              <PointItem icon={Fingerprint}>
                We believe every individual is unique, with their own strengths, abilities, personality, and potential.
              </PointItem>
            </Reveal>
            <Reveal delay={100}>
              <PointItem icon={Compass}>
                Yet, people often struggle — not because they lack potential, but because they lack the right understanding of themselves and how to channel their abilities in the right direction.
              </PointItem>
            </Reveal>
            <Reveal delay={200}>
              <div className="my-12 flex items-center justify-center">
                <div className="h-px w-16 bg-gold-500/40" />
                <Quote size={28} className="text-gold-500 mx-4 animate-pulse" />
                <div className="h-px w-16 bg-gold-500/40" />
              </div>
              <blockquote className="font-serif text-2xl sm:text-3xl text-gold-200 text-center italic leading-snug max-w-2xl mx-auto">
                At Ojasviq, we believe that better outcomes begin with better self-understanding.
              </blockquote>
            </Reveal>
            <Reveal delay={300}>
              <PointItem icon={Eye} className="mt-8">
                Our goal is to help individuals gain deeper insights into who they are, what they are naturally capable of, and where their potential can take them.
              </PointItem>
            </Reveal>
            <Reveal delay={400}>
              <PointItem icon={CircleCheck}>
                Because when you understand yourself better, you can make better choices.
              </PointItem>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────── AI LENS ─────────────── */}
      <section className="py-20 lg:py-28 bg-navy-950/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent" />
        <div className="container-c">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden border border-electric-500/30 ai-image-glow">
                <img
                  src="https://images.pexels.com/photos/17483867/pexels-photo-17483867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Abstract neural network representing AI-powered human insight"
                  className="w-full aspect-[4/3] object-cover ai-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-electric-500/10" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/90">Human Insight Engine</span>
                  <span className="flex items-center gap-2 text-xs text-gold-200"><span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" /> Processing</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <p className="eyebrow mb-4">The Ojasviq Difference</p>
                <h2 className="heading-md mb-6">Where Human Understanding Meets AI</h2>
                <div className="gold-divider-left mb-7" />
                <PointItem icon={ScanEye} className="mb-5">
                  Ojasviq brings together iris scanning, artificial intelligence, behavioral science, and multidisciplinary expertise to create a richer lens for understanding human potential.
                </PointItem>
                <PointItem icon={Handshake} className="mb-8">
                  Technology does not replace human guidance. It helps make patterns visible — so your strengths, tendencies, and possibilities can become a clearer starting point for meaningful growth.
                </PointItem>
                <Link to="/about" className="btn-outline">Explore Our Approach <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────── HOW IT WORKS ─────────────── */}
      <section className="py-24 lg:py-32 bg-navy-950/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="container-c">
          <Reveal className="text-center mb-20">
            <p className="eyebrow mb-4">How Ojasviq Works — And How We're Different</p>
            <h2 className="heading-md mb-6">Beyond Self-Reported Questionnaires</h2>
            <div className="gold-divider mb-8" />
            <p className="body-text mx-auto text-center max-w-2xl">
              Traditional personality assessments often rely on self-reported questionnaires, asking individuals to describe themselves. However, responses can be influenced — consciously or unconsciously — by self-perception, expectations, social conditioning, or the desire to present oneself in a particular way.
            </p>
          </Reveal>

          {/* Contrast box */}
          <Reveal delay={100}>
            <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
              <div className="card p-8 text-center border-navy-600/30">
                <p className="text-xs uppercase tracking-widest text-navy-300 mb-3">Traditional Approach</p>
                <p className="font-serif text-2xl text-navy-200 italic">"Who do you think you are?"</p>
              </div>
              <div className="card p-8 text-center border-gold-500/30 bg-gold-500/5">
                <p className="text-xs uppercase tracking-widest text-gold-400 mb-3">Ojasviq Approach</p>
                <p className="font-serif text-2xl text-gold-200 italic">"What makes you uniquely capable?"</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="body-text mx-auto text-center max-w-2xl mb-16">
              Using iris scanning, AI technology, and our proprietary assessment framework, Ojasviq analyzes distinctive iris patterns and applies computational models and structured assessment methodologies to generate personalized insights and recommendations.
            </p>
          </Reveal>

          {/* 3 steps */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 150}>
                <div className="card card-hover p-8 text-center group relative">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 font-serif text-5xl text-gold-500/20 font-bold">
                    {step.num}
                  </div>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:from-gold-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <step.icon size={28} className="text-gold-400 icon-float" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-navy-200 text-sm leading-relaxed">{step.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gold-500/30" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="body-text mx-auto text-center max-w-2xl mt-16 text-navy-200">
              Our objective is to move beyond simply asking people to describe themselves and toward a more data-informed approach to understanding individual characteristics, strengths, and potential.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </section>

      {/* ─────────────── WHAT YOU GET ─────────────── */}
      <section className="py-24 lg:py-32">
        <div className="container-c">
          <Reveal className="text-center mb-20">
            <p className="eyebrow mb-4">What You Get</p>
            <h2 className="heading-md mb-4 text-white drop-shadow-[0_2px_18px_rgba(255,255,255,0.12)]">More Than a Report.</h2>
            <p className="font-serif text-2xl text-gold-100 italic font-medium">A Deeper View of You.</p>
            <div className="gold-divider mt-8" />
            <p className="body-text mx-auto text-center max-w-2xl mt-8">
              Ojasviq is designed to provide a multidimensional view of an individual, bringing together insights that can support personal, academic, professional, and interpersonal development.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGet.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 120} className="tilt-reveal">
                <TiltCard className="p-7 bg-navy-800/90 border border-navy-500/70">
                  <span className="tilt-index tilt-layer-1" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
                  <div className="relative flex items-start gap-4">
                    <div className="tilt-layer-3 tilt-icon shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/25 to-gold-500/5 border border-gold-500/30 flex items-center justify-center">
                      <item.icon size={22} className="text-gold-400" />
                    </div>
                    <div className="tilt-layer-2">
                      <h3 className="font-serif text-lg text-white mb-2 transition-colors duration-300 group-hover:text-gold-100">{item.title}</h3>
                      <p className="text-navy-50 text-[15px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-14">
              <p className="font-serif text-xl text-gold-200 italic">
                And Much More...
              </p>
              <p className="body-text mx-auto text-center mt-4 text-navy-200">
                Because understanding yourself shouldn't end with a score — it should begin with insight.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── AI INTELLIGENCE ECOSYSTEM ─────────────── */}
      <section className="py-24 lg:py-32 relative">
        <div className="container-c">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <Reveal>
              <div>
                <p className="eyebrow mb-4">AI-Powered Collaboration</p>
                <h2 className="heading-md mb-6">Human Expertise, Connected Through AI</h2>
                <div className="gold-divider-left mb-7" />
                <PointItem icon={Layers} className="mb-5">
                  Ojasviq brings psychology, neuroscience, education, counselling, AI/ML, and software engineering together around one shared purpose: making human potential easier to understand.
                </PointItem>
                <PointItem icon={Waypoints} className="mb-8">
                  Our technology helps connect complex signals into meaningful patterns, while experienced human disciplines keep every insight grounded, thoughtful, and useful.
                </PointItem>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Psychology', icon: Brain },
                    { label: 'AI & ML', icon: Cpu },
                    { label: 'Career Guidance', icon: GraduationCap },
                    { label: 'Relationships', icon: Heart },
                  ].map(({ label, icon: Icon }) => (
                    <div key={label} className="group flex items-center gap-2.5 rounded-xl border border-gold-500/20 bg-navy-800/50 px-3 py-2.5 text-sm text-navy-50 transition-all duration-300 hover:border-gold-400/50 hover:bg-navy-700/60 hover:-translate-y-0.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gold-500/15 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon size={13} className="text-gold-400" />
                      </span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative mx-auto w-full max-w-[560px]">
                <div className="absolute -inset-5 rounded-[2rem] bg-electric-500/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-gold-500/30 bg-navy-950 shadow-2xl shadow-electric-500/10">
                  <img
                    src="https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Digital brain network representing AI-powered human potential analysis"
                    className="h-[420px] w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-electric-500/10" />
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-navy-950/70 p-4 backdrop-blur-md">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">Ojasviq Intelligence Layer</span>
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-electric-300 shadow-[0_0_14px_rgba(107,170,234,0.9)]" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-navy-50">
                      <span className="rounded-lg bg-white/10 px-2 py-2">Observe</span>
                      <span className="rounded-lg bg-gold-500/15 px-2 py-2 text-gold-100">Understand</span>
                      <span className="rounded-lg bg-white/10 px-2 py-2">Guide</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────── WHY OJASVIQ ─────────────── */}
      <section className="py-24 lg:py-32 bg-navy-950/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="container-c">
          <Reveal className="text-center mb-16">
            <p className="eyebrow mb-4">Why Ojasviq?</p>
            <h2 className="heading-md mb-6">Because Human Potential Cannot Be Understood From a Single Perspective</h2>
            <div className="gold-divider mb-8" />
          </Reveal>

          <div className="max-w-2xl mx-auto space-y-5 mb-20">
            <Reveal>
              <PointItem icon={Puzzle}>Human behaviour is complex.</PointItem>
            </Reveal>
            <Reveal delay={100}>
              <PointItem icon={Link2}>
                Personality, emotions, cognition, learning, relationships, career choices, and professional performance are all interconnected.
              </PointItem>
            </Reveal>
            <Reveal delay={200}>
              <PointItem icon={Users}>
                That is why Ojasviq brings together expertise from multiple disciplines.
              </PointItem>
            </Reveal>
            <Reveal delay={300}>
              <PointItem icon={Layers}>
                Our multidisciplinary approach combines perspectives from psychology, neuroscience, education, behavioural science, technology, and AI to create a more comprehensive understanding of human potential.
              </PointItem>
            </Reveal>
          </div>

          {/* Team cards */}
          <Reveal className="text-center mb-12">
            <h3 className="heading-sm">A Multidisciplinary Team</h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <Reveal key={member.title} delay={(i % 3) * 100}>
                <div className="group card card-hover p-7 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-500/20 to-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <member.icon size={24} className="text-gold-400" />
                  </div>
                  <h3 className="font-serif text-lg text-white mb-3">{member.title}</h3>
                  <p className="text-navy-200 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </section>

      {/* ─────────────── SCIENTIFIC AFFILIATION ─────────────── */}
      <section className="py-24 lg:py-32">
        <div className="container-c max-w-4xl">
          <Reveal className="text-center mb-12">
            <p className="eyebrow mb-4">Our Scientific Affiliation</p>
            <h2 className="heading-md mb-6">A Research-Informed Approach to Human Potential</h2>
            <div className="gold-divider mb-8" />
          </Reveal>

          <Reveal delay={100}>
            <div className="card p-10 text-center border-gold-500/20">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-6">
                <Microscope size={30} className="text-gold-400 icon-float" />
              </div>
              <p className="body-text mx-auto text-center">
                Our methodology is associated with the{' '}
                <span className="text-gold-300 font-medium">American Research Institute of Dermis & Genetic Evaluation (ARIDGE)</span>
                , USA, whose published materials describe iris analysis as an approach intended to explore individual characteristics and inherent abilities through iris patterns.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── CTA BAND ─────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[120px]" />

        <div className="container-c relative z-10 text-center">
          <Reveal>
            <h2 className="heading-md mb-6">Ready to Discover What Makes You Uniquely Capable?</h2>
            <p className="body-text mx-auto text-center text-navy-100 mb-10 max-w-xl">
              Take the first step toward deeper self-understanding. Connect with Ojasviq today.
            </p>
            <Link to="/contact" className="btn-primary text-base px-10 py-4">
              Contact Us <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
