'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building,
  Users,
  DollarSign,
  Calendar,
  Target,
  Zap,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { HighTechAIIcon } from '@/components/icons';

export default function EnterpriseInquiryPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: '',
    budget: '',
    timeline: '',
    teamSize: '',
    currentChallenges: '',
    goals: '',
  });

  const services = [
    {
      value: 'ai-cold-dm',
      title: 'AI Automated Cold DM',
      description:
        'Automate customer outreach across all social media platforms with intelligent AI chatbots',
      icon: '💬',
    },
    {
      value: 'ai-marketing-platform',
      title: 'AI Marketing Platform',
      description:
        'Complete AI-powered marketing intelligence platform with advanced analytics and automation',
      icon: <HighTechAIIcon className="w-6 h-6" />,
    },
  ];

  const budgetOptions = [
    '$50K - $100K USD',
    '$100K - $250K USD',
    '$250K - $500K USD',
    '$500K - $1M USD',
    '$1M+ USD',
    "Custom - Let's discuss",
  ];

  const timelineOptions = [
    'ASAP - Ready to start immediately',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Flexible timeline',
  ];

  const teamSizeOptions = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceValue: string) => {
    setSelectedService(serviceValue);
    setFormData(prev => ({ ...prev, service: serviceValue }));
  };

  const validateForm = () => {
    const required = [
      'firstName',
      'lastName',
      'email',
      'company',
      'service',
      'budget',
      'timeline',
      'teamSize',
      'currentChallenges',
      'goals',
    ];

    for (const field of required) {
      if (!formData[field as keyof typeof formData].trim()) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address';
    }

    // Website validation if provided
    if (formData.website && !formData.website.includes('.')) {
      return 'Please enter a valid website URL';
    }

    return null;
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const submission = {
        ...formData,
        id: Date.now().toString(),
        submittedAt: new Date().toISOString(),
        status: 'new',
        priority: 'medium',
        source: 'Enterprise Inquiry Form',
      };

      const response = await fetch('/api/enterprise-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry');
      }

      // Store the inquiry in localStorage for admin panel access
      if (result.inquiry) {
        try {
          const existingInquiries = localStorage.getItem('enterpriseInquiries');
          const inquiries = existingInquiries
            ? JSON.parse(existingInquiries)
            : [];
          inquiries.push(result.inquiry);
          localStorage.setItem(
            'enterpriseInquiries',
            JSON.stringify(inquiries)
          );
        } catch (storageError) {
          console.error('Error storing inquiry locally:', storageError);
          // Don't fail the submission if localStorage fails
        }
      }

      setSubmitted(true);

      // Redirect to thank you page after a brief delay
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 2000);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="bg-green-500/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Inquiry Submitted Successfully!
          </h1>
          <p className="text-gray-300 mb-4">
            Thank you for your interest in our enterprise services. Our team
            will review your inquiry and contact you within 24 hours.
          </p>
          <p className="text-sm text-gray-400">
            Redirecting to thank you page...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="container py-20">
        <FadeIn delay={200}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fc5f17] to-[#fcb80a] text-black px-4 py-2 rounded-full mb-6">
              <Building className="w-5 h-5" />
              <span className="font-medium">Enterprise Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Scale Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc5f17] to-[#fcb80a]">
                {' '}
                AI Enterprise Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your enterprise with cutting-edge AI
              automation? Tell us about your needs and let&apos;s discuss how
              our enterprise solutions can drive unprecedented growth for your
              business.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Form Section */}
      <div className="container pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <form onSubmit={onSubmit} className="space-y-8">
              {/* Personal Information */}
              <FadeIn delay={300}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#fc5f17]" />
                    Contact Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        First Name *
                      </label>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Last Name *
                      </label>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Company Information */}
              <FadeIn delay={400}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Building className="w-6 h-6 text-[#fc5f17]" />
                    Company Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Company Name *
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Company Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Team Size *
                      </label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        required
                        className="form-select"
                      >
                        <option value="">Select your team size</option>
                        {teamSizeOptions.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Service Selection */}
              <FadeIn delay={500}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#fc5f17]" />
                    Service Interest *
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map(service => (
                      <motion.div
                        key={service.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          selectedService === service.value
                            ? 'border-[#fc5f17] bg-[#fc5f17]/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                        onClick={() => handleServiceSelect(service.value)}
                      >
                        <div className="text-3xl mb-3">{service.icon}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {service.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Project Details */}
              <FadeIn delay={600}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#fc5f17]" />
                    Project Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Budget Range *
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="form-select"
                      >
                        <option value="">Select your budget range</option>
                        {budgetOptions.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Timeline *
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className="form-select"
                      >
                        <option value="">Select your timeline</option>
                        {timelineOptions.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Business Needs */}
              <FadeIn delay={700}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-[#fc5f17]" />
                    Business Needs
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Current Challenges *
                      </label>
                      <textarea
                        name="currentChallenges"
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="form-input"
                        placeholder="What are the main challenges your business is facing that AI automation could help solve?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Goals & Objectives *
                      </label>
                      <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="form-input"
                        placeholder="What specific goals do you want to achieve with our enterprise AI solutions?"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Error Display */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{error}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <FadeIn delay={800}>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      'Submit Enterprise Inquiry'
                    )}
                  </button>
                  <p className="text-sm text-gray-400 mt-4">
                    Our enterprise team will review your inquiry and contact you
                    within 24 hours
                  </p>
                </div>
              </FadeIn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
