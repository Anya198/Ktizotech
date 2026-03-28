import { Testimonial } from '@/components/ui/TestimonialStack';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "KtizoTech has completely transformed how we operate at GEM Nation. Before working with them, our team spent countless hours manually sending messages, organizing workflows, and following up on production. Through their AI automation systems, we now have a streamlined and highly efficient system that fits seamlessly into our day to day activities without delay. A special thank you to KtizoTech Team for his support and insight throughout the process.",
    name: 'GEM Inc.',
    role: 'GEM Nation',
    initials: 'GN',
    avatarGradient: 'linear-gradient(135deg, #2575FC 0%, #162B54 100%)',
    tags: [
        { text: 'Workflow Automation', type: 'featured' },
        { text: 'Lead Mgmt', type: 'default' }
    ],
    stats: [
        { icon: 'Clock', text: '12 hrs saved/wk' },
        { icon: 'CheckCircle2', text: '99.9% Reliable' }
    ]
  },
  {
    id: 2,
    quote: "Working with KtizoTech has been a game changer for K.I Acquisitions. Our lead management and client onboarding processes were previously manual, inconsistent, and time consuming. With their AI automation solutions, we now have a fully optimized system that tracks leads, automates follow ups, and ensures no opportunity is missed. The impact on our efficiency and overall operations has been significant.",
    name: 'K.I Acquisitions',
    role: 'K.I Acquisitions',
    initials: 'KI',
    avatarGradient: 'linear-gradient(135deg, #162B54 0%, #2575FC 100%)',
    tags: [
        { text: 'Lead Optimization', type: 'featured' },
        { text: 'CRM Integration', type: 'default' }
    ],
    stats: [
        { icon: 'Zap', text: '2x Speed' },
        { icon: 'Clock', text: 'Automated 24/7' }
    ]
  },
  {
    id: 3,
    quote: "We came to KtizoTech with an idea and left with a fully functioning SaaS product. I honestly didn't think it was possible to move that fast without cutting corners — but they proved me wrong. They built our entire platform using automated systems that handled everything from user onboarding to billing flows. What would have taken us 12 months, they delivered in a fraction of the time. TGT Fitness wouldn't be where it is today without them.",
    name: 'TGT Fitness',
    role: 'TGT Fitness',
    initials: 'TF',
    avatarGradient: 'linear-gradient(135deg, #2575FC 0%, #00d4ff 100%)',
    tags: [
        { text: 'SaaS Platform', type: 'featured' },
        { text: 'Rapid Launch', type: 'default' }
    ],
    stats: [
        { icon: 'CheckCircle2', text: '100% Automated' },
        { icon: 'Zap', text: '10x Dev Speed' }
    ]
  },
]
