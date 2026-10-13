import { Shield, Lock, Database, Eye, Trash2, Users, Scale, Mail, FileText, CircleCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PointItem from '@/components/PointItem';
import { siteContent } from '@/data/siteContent';

const sections = [
  {
    icon: Database,
    title: '1. Information We Collect',
    body: [
      'When you use Ojasviq, we may collect the following types of information:',
      'Personal Information: Your name, email address, phone number, and whether you are a student or working professional, collected when you contact us or create an account.',
      'Iris and Biometric Data: Images or scans of your iris captured for the purpose of generating personality and potential insights. Iris patterns are analyzed using our proprietary assessment framework and AI technology.',
      'Assessment Results: The insights, reports, and recommendations generated from your iris scan and assessment data.',
      'Usage Information: Information about how you interact with our website and services, including device information, browser type, and usage patterns.',
    ],
  },
  {
    icon: Eye,
    title: '2. How We Use Your Information',
    body: [
      'We use the information we collect for the following purposes:',
      'To generate personalized personality, capability, and potential insights based on your iris scan data.',
      'To provide you with reports, recommendations, and a human potential development roadmap.',
      'To respond to your inquiries and provide customer support.',
      'To improve our assessment methodology, AI models, and overall service quality.',
      'To send you important updates or notifications related to your assessment, where consented.',
    ],
  },
  {
    icon: Lock,
    title: '3. Data Storage & Security',
    body: [
      'We take the security of your data seriously, especially given the sensitive nature of iris and biometric information.',
      'Your data is stored using industry-standard encryption both in transit and at rest.',
      'Access to your personal and biometric data is strictly limited to authorized personnel who require it to perform their duties.',
      'We implement technical, administrative, and physical safeguards designed to protect your data from unauthorized access, alteration, disclosure, or destruction.',
      'Despite our efforts, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    icon: Users,
    title: '4. Biometric Data Consent',
    body: [
      'By submitting your iris scan, you explicitly consent to the collection, processing, and analysis of your biometric (iris) data for the purpose of generating personality and human potential insights.',
      'You understand that iris scanning is a biometric process and that the data derived from it is uniquely identifiable to you.',
      'You may withdraw your consent at any time by requesting deletion of your data (see Section 7 below).',
      'Your iris data will not be used for any purpose other than generating your personalized assessment insights, without your explicit additional consent.',
    ],
  },
  {
    icon: Scale,
    title: '5. No Selling of Data',
    body: [
      'We do not sell, rent, or trade your personal information, iris data, or assessment results to any third party.',
      'We do not share your data with advertisers or use it for targeted advertising.',
      'In limited circumstances, we may share data with trusted service providers who assist us in operating our platform (such as cloud storage providers), under strict confidentiality obligations and only to the extent necessary.',
    ],
  },
  {
    icon: Trash2,
    title: '6. Your Right to Delete Data',
    body: [
      'You have the right to request deletion of your personal information, iris scan data, and assessment results at any time.',
      'To request data deletion, please contact us at the email address provided in Section 10. We will process your request within a reasonable timeframe and confirm once your data has been permanently removed.',
      'Upon deletion, your data will be removed from our active systems and securely purged from backup systems in accordance with our data retention policies.',
    ],
  },
  {
    icon: Shield,
    title: '7. India DPDP Act 2023 Compliance',
    body: [
      'Ojasviq is committed to complying with the Digital Personal Data Protection (DPDP) Act, 2023 of India.',
      'Under the DPDP Act, you have the right to access, correct, erase, and grievance redressal regarding your personal data.',
      'As biometric data is classified as sensitive personal data, we process it with enhanced protections and only with your explicit, informed consent.',
      'You have the right to nominate another individual to exercise your data rights in the event of your death or incapacity.',
      'If you have any grievances regarding the processing of your personal data, please contact us using the details in Section 10. If your grievance is not resolved, you may approach the Data Protection Board of India.',
    ],
  },
  {
    icon: Users,
    title: '8. Minors & Parental Consent',
    body: [
      "Ojasviq's services are available to individuals of all ages, including students who may be minors.",
      'If you are under the age of 18, you must obtain verifiable consent from a parent or legal guardian before using Ojasviq, submitting an iris scan, or providing any personal information.',
      "Parents or legal guardians who provide consent on behalf of a minor are responsible for the minor's use of the service and the data they share.",
      'We do not knowingly process iris or personal data from minors without verified parental consent. If you believe we have collected data from a minor without consent, please contact us immediately for prompt removal.',
    ],
  },
  {
    icon: FileText,
    title: '9. Nature of Insights — Not Medical or Psychological Diagnosis',
    body: [
      'The insights, reports, and recommendations provided by Ojasviq are intended solely for self-awareness, personal development, and guidance purposes.',
      'Ojasviq assessments are NOT a medical diagnosis, psychological diagnosis, clinical evaluation, or substitute for professional medical, psychological, or psychiatric advice.',
      'We do not guarantee any specific outcomes, results, or accuracy of insights derived from the assessment.',
      'For decisions related to health, mental health, education, or career, please consult with a qualified professional such as a doctor, psychologist, or licensed counselor.',
      'Ojasviq does not accept responsibility for decisions made solely based on the insights provided.',
    ],
  },
  {
    icon: Mail,
    title: '10. Contact Us',
    body: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us at:',
      'Email: contact@ojasviq.com',
      'We are committed to addressing your privacy concerns promptly and transparently.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-36 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gold-500/6 rounded-full blur-[120px]" />
        <div className="container-c relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
              <Shield size={30} className="text-gold-400" />
            </div>
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="heading-md mb-4 text-glow">Privacy Policy</h1>
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
                At Ojasviq, we are committed to protecting your privacy and the security of your personal data — especially the sensitive biometric information you trust us with. This Privacy Policy explains what data we collect, how we use it, how we protect it, and the rights you have over it.
              </p>
              <p className="body-text mt-4">
                By using Ojasviq's website and services, you agree to the practices described in this policy.
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
                <div className="space-y-4 ml-0 sm:ml-16">
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
