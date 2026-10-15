'use client';

import { useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Connect to actual form backend
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out with any questions about our school."
        breadcrumb="Home / Contact"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="fade-right">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <a href="tel:+233594619640" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Phone size={20} className="text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">Phone</h3>
                    <p className="text-gray-600">+233 59 461 9640</p>
                  </div>
                </a>

                <a href="mailto:info@khairiyyaedu.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Mail size={20} className="text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">Email</h3>
                    <p className="text-gray-600">info@khairiyyaedu.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">Address</h3>
                    <p className="text-gray-600">1234 Education Drive<br />Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">Office Hours</h3>
                    <p className="text-gray-600">Mon – Fri: 7:00 AM – 4:00 PM<br />Sat: 9:00 AM – 12:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gradient-to-br from-primary-100 to-gold-100 rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={40} className="mx-auto mb-2 text-primary-400" />
                  <p className="text-primary-600 font-medium">PLACEHOLDER</p>
                  <p className="text-primary-500/60 text-sm">Embed Google Maps here</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-10">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">Thank you for reaching out. We will respond within 24 hours, in sha Allah.</p>
                    <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="text-primary-500 hover:text-primary-600 font-medium">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-charcoal" placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">Email Address *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-charcoal" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-charcoal" placeholder="+233..." />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1.5">Subject *</label>
                        <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-charcoal bg-white">
                          <option value="">Select a subject</option>
                          <option value="admissions">Admissions Inquiry</option>
                          <option value="tour">Schedule a Tour</option>
                          <option value="academics">Academic Question</option>
                          <option value="fees">Tuition & Fees</option>
                          <option value="general">General Inquiry</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Message *</label>
                      <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-charcoal resize-none" placeholder="How can we help you?" />
                    </div>

                    <button type="submit" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

