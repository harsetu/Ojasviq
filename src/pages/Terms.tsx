import { FileText, Scale, Lock, Brain, Ban, Building, Mail, AlertTriangle, CircleCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PointItem from '@/components/PointItem';
import { siteContent } from '@/data/siteContent';

const sections = [
  {
    icon: FileText,
    title: '1. Acceptance of Terms',
    body: [
      'These Terms and Conditions ("Terms") govern your use of the Ojasviq website, services, and platform (collectively, the "Service"), operated by Ojasviq ("we", "us", or "our").',
      'By accessing or using the Service, you agree to be bound by these Terms in full. If you do not agree to any part of these Terms, you must not use the Service.',
      'We may revise these Terms from time to time. The most current version will always be posted on this page with the updated date. Your continued use of the Service after changes are posted constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    icon: Brain,
    title: '2. Nature of the Service',
    body: [
      'Ojasviq is an AI-powered personality and human potential assessment platform that uses iris scanning, AI technology, and a proprietary assessment framework to generate personalized insights and recommendations.',
      'The insights, reports, and recommendations provided by Ojasviq are intended solely for self-awareness, personal development, and guidance purposes. They are NOT a medical diagnosis, psychological diagnosis, clinical evaluation, or substitute for professional advice.',
      'We do not guarantee any specific outcomes, results, accuracy, or reliability of the insights generated. You acknowledge that the assessment is an exploratory tool, not a definitive measure of your abilities or potential.',
      'For decisions related to health, mental health, education, or career, you should consult with a qualified professional. Ojasviq does not accept responsibility for decisions made solely based on the insights provided.',
    ],
  },
  {
    icon: Lock,
    title: '3. Biometric Data & Consent',
    body: [
      'By submitting an iris scan through the Ojasviq platform, you explicitly consent to the collection, processing, and analysis of your biometric (iris) data for the purpose of generating personality and human potential insights.',
      'You understand that iris scanning is a biometric process and that the data derived is uniquely identifiable to you.',
      'Your iris data will be handled in accordance with our Privacy Policy, which is incorporated into these Terms by reference.',
      'You may withdraw your consent and request deletion of your data at any time by contacting us at the email address provided in Section 9.',
    ],
  },
  {
    icon: Building,
    title: '4. Intellectual Property',
    body: [
      'All content, features, and functionality of the Ojasviq Service — including but not limited to text, graphics, logos, designs, assessments, reports, AI models, proprietary assessment framework, software code, and user interface — are the exclusive property of Ojasviq and are protected by Indian and international intellectual property laws.',
      'You may not reproduce, distribute, modify, transmit, reuse, download, republish, post, or use any content from the Service for commercial purposes without our prior written consent.',
      'The assessment reports and insights provided to you are for your personal use only. You may not share, sell, or distribute them without our permission.',
      'The name "Ojasviq", its logo, and all associated branding are trademarks of Ojasviq and may not be used without authorization.',
    ],
  },
  {
    icon: FileText,
    title: '5. User Responsibilities',
    body: [
      'You agree to provide accurate, truthful, and current information when using the Service.',
      'You agree not to use the Service for any unlawful, harmful, or fraudulent purpose.',
      'You agree not to attempt to gain unauthorized access to any part of the Service, its systems, or data.',
      'You agree not to interfere with or disrupt the Service, including introducing viruses, malware, or harmful code.',
      'If you are under 18, you confirm that you have obtained verifiable consent from a parent or legal guardian before using the Service and submitting any biometric data.',
    ],
  },
  {
    icon: Ban,
    title: '6. Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, Ojasviq shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising from your use of (or inability to use) the Service.',
      'Ojasviq does not warrant that the Service will be uninterrupted, error-free, or completely secure. The Service is provided on an "as is" and "as available" basis.',
      'Ojasviq shall not be liable for any decisions you make based on the insights or recommendations provided by the Service.',
      "In no event shall Ojasviq's total liability to you for all claims arising from your use of the Service exceed the amount you have paid to us, if any, for using the Service.",
    ],
  },
  {
    icon: AlertTriangle,
    title: '7. Disclaimers',
    body: [
      'The insights provided by Ojasviq are for self-awareness and guidance only. They are not a substitute for professional medical, psychological, psychiatric, educational, or career counseling advice.',
      'Ojasviq does not guarantee the accuracy, completeness, or reliability of any assessment results.',
      'Any reliance you place on the insights provided is strictly at your own risk.',
      'Ojasviq is not responsible for the content of any third-party websites or services linked to or referenced in our materials.',
    ],
  },
  {
    icon: Scale,
    title: '8. Governing Law',
    body: [
      'These Terms shall be governed by and construed in accordance with the laws of India.',
      'Any disputes arising out of or in connection with these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts located in India.',
      'You and Ojasviq agree to attempt to resolve any disputes informally before initiating formal legal proceedings, where reasonably possible.',
    ],
  },
  {
    icon: Mail,
    title: '9. Contact Us',
    body: [
      'If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us at:',
      'Email: contact@ojasviq.com',
      'We are committed to addressing your concerns promptly and transparently.',
    ],
  },
];

export default function Terms() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-36 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gold-500/6 rounded-full blur-[120px]" />
        <div className="container-c relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
              <FileText size={30} className="text-gold-400" />
            </div>
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="heading-md mb-4 text-glow">Terms & Conditions</h1>
            <div className="gold-divider mb-6" />
            <p className="text-navy-200 text-sm">Last updated: {siteContent.lastUpdated}</p>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="container-narrow">
          <Reveal>
            <div className="card p-8 border-gold-500/15">
              <p className="body-text">
                Welcome to Ojasviq. These Terms and Conditions outline the rules and regulations for using our website and services. Please read them carefully before using the platform.
              </p>
              <p className="body-text mt-4">
                By accessing or using Ojasviq, you agree to these Terms. If you disagree with any part, please do not use our services.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 pb-24">
        <div className="container-narrow space-y-8">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 50}>
              <div className="card p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/25 flex items-center justify-center">
                    <section.icon size={22} className="text-gold-400 icon-float" />
                  </div>
                  <h2 className="font-serif text-xl text-white pt-1.5">{section.title}</h2>
                </div>
                <div className="space-y-4 sm:ml-16">
                  {section.body.map((para, j) =>
                    section.body.length > 1 && !para.trim().endsWith(':') ? (
                      <PointItem key={j} icon={CircleCheck} size="sm">
                        {para}
                      </PointItem>
                    ) : (
                      <p key={j} className="text-navy-100 text-[15px] leading-relaxed">
                        {para}
                      </p>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
