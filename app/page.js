'use client';

import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Instagram, MessageCircle, Gem, Award, PenTool, ShieldCheck, ChevronDown } from 'lucide-react';

const JewelryWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Logo = ({ size = 'w-10 h-10', textSize = 'text-2xl sm:text-3xl' }) => (
    <div className="flex items-center gap-3">
      <div className={`${size} rounded-full overflow-hidden flex-shrink-0 ring-1 ring-[#c9a560]/40`}>
        <img
          src="/logo.png"
          alt="The House of KC Logo"
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.innerHTML = '<span class="text-[#c9a560] font-serif text-sm w-full h-full flex items-center justify-center border border-[#c9a560]/40 rounded-full">KC</span>';
          }}
        />
      </div>
      <div className="text-left leading-tight">
        <span className="block text-[9px] sm:text-[10px] tracking-[0.3em] text-[#e8e0d0] uppercase">The House of</span>
        <span className={`block ${textSize} font-serif tracking-[0.12em] text-[#c9a560]`}>KC</span>
      </div>
    </div>
  );

  const Navigation = () => (
    <div className="fixed top-0 w-full z-50">
      <div className="bg-black text-center py-2 border-b border-[#3a3226]">
        <p className="text-[10px] sm:text-xs tracking-[0.25em] text-[#c9a560] uppercase">
          Heritage Crafted. Bespoke For You.
        </p>
      </div>

      <nav className="bg-black/95 backdrop-blur-sm text-[#e8e0d0] shadow-lg border-b border-[#2a251c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="hidden md:flex space-x-8 text-xs tracking-[0.15em] uppercase flex-1">
              <button onClick={() => setCurrentPage('home')} className={`pb-1 transition ${currentPage === 'home' ? 'text-[#c9a560] border-b border-[#c9a560]' : 'hover:text-[#c9a560]'}`}>Home</button>
              <button onClick={() => setCurrentPage('contact')} className={`pb-1 transition ${currentPage === 'contact' ? 'text-[#c9a560] border-b border-[#c9a560]' : 'hover:text-[#c9a560]'}`}>Contact</button>
            </div>

            <button onClick={() => setCurrentPage('home')} className="flex-1 flex justify-center transition-transform hover:scale-105 duration-300">
              <Logo />
            </button>

            <div className="hidden md:flex items-center justify-end space-x-8 text-xs tracking-[0.15em] uppercase flex-1">
              <button onClick={() => setCurrentPage('privacy')} className={`pb-1 transition ${currentPage === 'privacy' ? 'text-[#c9a560] border-b border-[#c9a560]' : 'hover:text-[#c9a560]'}`}>Privacy</button>
              <button onClick={() => setCurrentPage('terms')} className={`pb-1 transition ${currentPage === 'terms' ? 'text-[#c9a560] border-b border-[#c9a560]' : 'hover:text-[#c9a560]'}`}>Terms</button>
            </div>

            <div className="md:hidden absolute right-4">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#e8e0d0]">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0b08] border-t border-[#3a3226]">
            <div className="px-4 py-4 space-y-1 text-xs tracking-[0.15em] uppercase">
              <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-3 hover:text-[#c9a560] transition">Home</button>
              <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left py-3 hover:text-[#c9a560] transition">Contact</button>
              <button onClick={() => { setCurrentPage('privacy'); setMobileMenuOpen(false); }} className="block w-full text-left py-3 hover:text-[#c9a560] transition">Privacy</button>
              <button onClick={() => { setCurrentPage('terms'); setMobileMenuOpen(false); }} className="block w-full text-left py-3 hover:text-[#c9a560] transition">Terms</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );

  const Footer = () => (
    <footer className="bg-black text-[#e8e0d0] border-t border-[#3a3226]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex justify-center mb-10">
          <Logo size="w-12 h-12" textSize="text-3xl" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-center sm:text-left max-w-4xl mx-auto">
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#c9a560] mb-4">Explore</h4>
            <div className="space-y-2 text-sm text-[#b8b0a0]">
              <button onClick={() => setCurrentPage('home')} className="block w-full sm:w-auto hover:text-[#c9a560] transition">Home</button>
              <button onClick={() => setCurrentPage('contact')} className="block w-full sm:w-auto hover:text-[#c9a560] transition">Contact</button>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#c9a560] mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-[#b8b0a0]">
              <button onClick={() => setCurrentPage('privacy')} className="block w-full sm:w-auto hover:text-[#c9a560] transition">Privacy Policy</button>
              <button onClick={() => setCurrentPage('terms')} className="block w-full sm:w-auto hover:text-[#c9a560] transition">Terms & Conditions</button>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#c9a560] mb-4">Connect</h4>
            <div className="flex justify-center sm:justify-start space-x-5">
              <a
                href="https://www.instagram.com/the.houseofkc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9a560] transition"
              >
                <Instagram className="w-5 h-5 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3a3226] mt-10 pt-8 text-center text-[#7a7263] text-xs tracking-wide">
          <p>&copy; 2026 The House of KC Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div className="bg-black">
      {/* HERO */}
      <div
        className="relative min-h-screen w-full bg-cover bg-center pt-36 sm:pt-40 pb-20 flex items-center"
        style={{ backgroundImage: "url('/image.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#c9a560] mb-5">
              Est. in the legacy of Shree Santosh Kumar Ji Choraria
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f2ead9] leading-tight mb-6">
              Timeless Heritage.<br />Tailored for You.
            </h1>
            <div className="w-16 h-px bg-[#c9a560] mb-6"></div>
            <p className="text-[#d8cfbd] text-base sm:text-lg leading-relaxed mb-4">
              A tribute to a lifelong passion and artistic mastery - crafted with patience, precision, and integrity.
            </p>
            <p className="text-[#b8b0a0] text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
              Bespoke heirloom treasures, handcrafted in Bangalore - for those who build, protect, and bequeath a legacy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://forms.gle/eCYtvqB3vKrYphBM7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c9a560] text-black px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#e0c07f] transition duration-300"
              >
                Submit Your Query
              </a>
              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-block border border-[#c9a560] text-[#c9a560] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#c9a560] hover:text-black transition duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-[#c9a560]/70 animate-bounce">
          <ChevronDown className="w-5 h-5" strokeWidth={1.2} />
        </div>
      </div>

      {/* FEATURES ROW */}
      <div className="bg-[#0d0b08] border-t border-[#3a3226] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: PenTool, title: 'Handcrafted', desc: 'Meticulously crafted by skilled artisans' },
              { Icon: Gem, title: 'Heritage', desc: 'Rooted in a legacy of artistic mastery' },
              { Icon: Award, title: 'Bespoke', desc: 'Tailored designs, exclusively for you' },
              { Icon: ShieldCheck, title: 'Quality', desc: 'Finest materials, timeless craftsmanship' },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className={`text-center sm:text-left flex flex-col items-center sm:items-start px-0 sm:px-8 py-6 sm:py-0 transition hover:-translate-y-1 duration-300 ${i > 0 ? 'sm:border-l sm:border-[#2a251c]' : ''}`}
              >
                <Icon className="w-7 h-7 text-[#c9a560] mb-4" strokeWidth={1.2} />
                <h4 className="text-xs tracking-[0.15em] uppercase text-[#e8e0d0] mb-2">{title}</h4>
                <p className="text-xs sm:text-sm text-[#8a8272] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR PROMISE / STORY */}
      <div className="bg-black py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-3 border border-[#c9a560]/30 -z-0 hidden lg:block"></div>
              <img
                src="/polki.jpeg"
                alt="Craftsmanship at The House of KC"
                className="relative z-10 w-full h-72 sm:h-96 lg:h-[520px] object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs tracking-[0.25em] uppercase text-[#c9a560] mb-4">Our Promise</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f2ead9] mb-6 leading-tight">
                Legacy. Craft. Emotion.
              </h2>
              <div className="w-16 h-px bg-[#c9a560] mb-6"></div>
              <p className="text-[#c9c0af] text-base sm:text-lg leading-relaxed mb-5">
                At The House of KC, every creation is a tribute to the lifelong passion and artistic mastery of <span className="text-[#c9a560]">Shree Santosh Kumar Ji Choraria</span>. What began as a deep love for gemstones and design grew into a legacy built on patience, precision, and integrity.
              </p>
              <p className="text-[#c9c0af] text-base sm:text-lg leading-relaxed mb-5">
                Each piece reflects his belief that jewelry is not just an accessory but a personal expression of identity and emotion. From the careful selection of raw stones to the final handcrafted detailing.
              </p>
              <p className="text-[#c9c0af] text-base sm:text-lg leading-relaxed">
                Bespoke heirloom treasures - crafted for those who build, protect, and bequeath a legacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PULL QUOTE */}
      <div className="bg-[#0d0b08] border-y border-[#3a3226] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl sm:text-5xl font-serif text-[#c9a560]/60 leading-none">&ldquo;</span>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#e8e0d0] leading-relaxed -mt-4">
            Jewelry is not just an accessory, it is a personal expression of identity and emotion.
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-[#c9a560] mt-6">Shree Santosh Kumar Ji Choraria</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#f2ead9] py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-6 text-black" strokeWidth={1.2} />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-black mb-5">Have a Query?</h2>
          <p className="text-[#4a4436] text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            We are here to help bring your vision to life. Share your requirements with us, and our team will get back to you within 24 hours.
          </p>
          <a
            href="https://forms.gle/eCYtvqB3vKrYphBM7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-[#c9a560] px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#1a1712] transition duration-300"
          >
            Submit Your Query
          </a>
          <p className="text-[#7a7263] text-sm mt-6">
            Or reach us directly at{' '}
            <a href="mailto:contact@thehouseofkc.com" className="text-black underline hover:text-[#c9a560] transition">
              contact@thehouseofkc.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen pt-36 sm:pt-40 pb-20 sm:pb-28 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#c9a560] mb-4">Reach Us</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f2ead9] mb-6">Get in Touch</h1>
          <div className="w-16 h-px bg-[#c9a560] mx-auto mb-6"></div>
          <p className="text-[#b8b0a0] text-base sm:text-lg max-w-xl mx-auto">
            Connect with The House of KC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          <div className="border border-[#3a3226] p-8 sm:p-10 text-center hover:border-[#c9a560] hover:-translate-y-1 transition duration-300">
            <MapPin className="w-8 h-8 text-[#c9a560] mx-auto mb-6" strokeWidth={1.2} />
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#e8e0d0] mb-4">Location</h3>
            <p className="text-[#b8b0a0] text-base leading-relaxed">Bangalore, Karnataka<br />India</p>
          </div>

          <div className="border border-[#3a3226] p-8 sm:p-10 text-center hover:border-[#c9a560] hover:-translate-y-1 transition duration-300">
            <Phone className="w-8 h-8 text-[#c9a560] mx-auto mb-6" strokeWidth={1.2} />
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#e8e0d0] mb-4">Call Us</h3>
            <p className="text-[#b8b0a0] text-base leading-relaxed">
              <a href="tel:+919019345667" className="hover:text-[#c9a560] transition">+91 9019345667</a>
            </p>
          </div>

          <div className="border border-[#3a3226] p-8 sm:p-10 text-center hover:border-[#c9a560] hover:-translate-y-1 transition duration-300">
            <Mail className="w-8 h-8 text-[#c9a560] mx-auto mb-6" strokeWidth={1.2} />
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#e8e0d0] mb-4">Email Us</h3>
            <p className="text-[#b8b0a0] text-base leading-relaxed break-all">
              <a href="mailto:contact@thehouseofkc.com" className="hover:text-[#c9a560] transition">contact@thehouseofkc.com</a>
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#b8b0a0] text-base mb-6">For any queries or custom jewelry requests:</p>
          <a
            href="https://forms.gle/eCYtvqB3vKrYphBM7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#c9a560] text-[#c9a560] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#c9a560] hover:text-black transition duration-300"
          >
            Submit Your Query
          </a>
        </div>
      </div>
    </div>
  );

  const PrivacyPage = () => (
    <div className="min-h-screen pt-36 sm:pt-40 pb-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.25em] uppercase text-[#c9a560] mb-4">Legal</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#f2ead9] mb-4">Privacy Policy</h1>
        <div className="w-16 h-px bg-[#c9a560] mb-8"></div>

        <div className="space-y-6 text-[#b8b0a0] text-sm sm:text-base leading-relaxed">
          <p className="text-xs text-[#7a7263]">Last updated: January 3, 2026</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Introduction</h2>
          <p>The House of KC Jewelry ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Shipping and billing addresses</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
            <li>Order history and preferences</li>
          </ul>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and our products</li>
            <li>Improve our website and customer service</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Detect and prevent fraud</li>
          </ul>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at contact@thehouseofkc.com</p>
        </div>
      </div>
    </div>
  );

  const TermsPage = () => (
    <div className="min-h-screen pt-36 sm:pt-40 pb-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.25em] uppercase text-[#c9a560] mb-4">Legal</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#f2ead9] mb-4">Terms & Conditions</h1>
        <div className="w-16 h-px bg-[#c9a560] mb-8"></div>

        <div className="space-y-6 text-[#b8b0a0] text-sm sm:text-base leading-relaxed">
          <p className="text-xs text-[#7a7263]">Last updated: January 3, 2026</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Agreement to Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree with any part of these terms, you must not use our website.</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Product Information</h2>
          <p>We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions, colors, or other content on this site are accurate, complete, reliable, or error-free.</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Pricing and Payment</h2>
          <p>All prices are listed in Indian Rupees (INR) and are subject to change without notice. We reserve the right to refuse or cancel any order for any reason, including pricing errors.</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Shipping and Delivery</h2>
          <p>We ship within India. Shipping times may vary based on location and product availability. We are not responsible for delays caused by shipping carriers or unforeseen circumstances.</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Returns and Refunds</h2>
          <p>We offer a 30-day return policy on most products. Items must be unused and in original packaging. Custom-made jewelry may not be eligible for returns. Please contact us at contact@thehouseofkc.com to initiate a return.</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of The House of KC Jewelry and protected by copyright laws. You may not reproduce, distribute, or use any content without our written permission.</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Limitation of Liability</h2>
          <p>The House of KC Jewelry shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or products.</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.</p>

          <h2 className="text-lg sm:text-xl text-[#e8e0d0] tracking-wide mt-8 mb-3">Contact Information</h2>
          <p>For questions about these Terms & Conditions, please contact us at contact@thehouseofkc.com</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black font-sans">
      <Navigation />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'privacy' && <PrivacyPage />}
      {currentPage === 'terms' && <TermsPage />}
      <Footer />
    </div>
  );
};

export default JewelryWebsite;