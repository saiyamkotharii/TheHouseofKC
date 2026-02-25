'use client';

import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

const JewelryWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Navigation = () => (
    <nav className="bg-black text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer group" onClick={() => setCurrentPage('home')}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden transition-transform duration-300 ease-out group-hover:scale-110">
              <img
                src="/logo.png"
                alt="THE HOUSE OF KC Logo"
                width={48}
                height={48}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = '<span class="text-black font-bold text-lg bg-white rounded-full w-full h-full flex items-center justify-center">KC</span>';
                }}
              />
            </div>
            <span className="hidden sm:inline-block ml-3 text-xl sm:text-2xl font-bold tracking-wider transition-all duration-300 group-hover:tracking-widest">
              TheHouseofKC
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage('home')} className="hover:text-gray-300 transition">Home</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-gray-300 transition">Contact</button>
            <button onClick={() => setCurrentPage('privacy')} className="hover:text-gray-300 transition">Privacy</button>
            <button onClick={() => setCurrentPage('terms')} className="hover:text-gray-300 transition">Terms</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 hover:bg-gray-800">Home</button>
            <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 hover:bg-gray-800">Contact</button>
            <button onClick={() => { setCurrentPage('privacy'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 hover:bg-gray-800">Privacy</button>
            <button onClick={() => { setCurrentPage('terms'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 hover:bg-gray-800">Terms</button>
          </div>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">TheHouseofKC</h3>
            <p className="text-gray-400 text-sm sm:text-base">A legacy of artistry and craftsmanship.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => setCurrentPage('home')} className="block text-gray-400 hover:text-white text-sm sm:text-base">Home</button>
              <button onClick={() => setCurrentPage('contact')} className="block text-gray-400 hover:text-white text-sm sm:text-base">Contact</button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <div className="space-y-2">
              <button onClick={() => setCurrentPage('privacy')} className="block text-gray-400 hover:text-white text-sm sm:text-base">Privacy Policy</button>
              <button onClick={() => setCurrentPage('terms')} className="block text-gray-400 hover:text-white text-sm sm:text-base">Terms & Conditions</button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/the.houseofkc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2026 TheHouseofKC Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div>
      <div className="relative h-screen w-full bg-cover bg-center mt-16" style={{backgroundImage: "url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&h=1080&fit=crop')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">REDEFINE YOUR STYLE</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">Premium jewelry crafted for the bold and refined</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About The House of KC</h2>
          <div className="w-20 sm:w-24 h-1 bg-black mx-auto mb-6 sm:mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Crafted with Precision
            </h3>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed">
              At TheHouseofKC, every creation is a tribute to the lifelong passion and artistic mastery of 
              <span className="font-semibold"> Santosh Kumar Choraria</span>. 
              What began as a deep love for gemstones and design grew into a legacy built on patience, precision, and integrity.
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed">
              Each piece reflects his belief that jewelry is not just an accessory but a personal expression of identity and emotion. 
              From the careful selection of raw stones to the final handcrafted detailing, every step carries forward his artistic spirit.
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed">
              Exclusive tailored made heirloom pieces - crafted for those you build, preserve and pass on legacies
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop" 
              alt="Craftsmanship" 
              className="rounded-lg shadow-2xl w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center hover:shadow-lg transition">
            <div className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">🔨</div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Handcrafted Quality</h4>
            <p className="text-gray-600 text-sm sm:text-base">Every piece is carefully crafted by skilled artisans with attention to detail</p>
          </div>
          
          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center hover:shadow-lg transition">
            <div className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">💎</div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Premium Materials</h4>
            <p className="text-gray-600 text-sm sm:text-base">Only the finest metals and materials for lasting durability and shine</p>
          </div>
          
          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center hover:shadow-lg transition sm:col-span-2 lg:col-span-1">
            <div className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">🇮🇳</div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Made in India</h4>
            <p className="text-gray-600 text-sm sm:text-base">Proudly designed and manufactured in India with global standards</p>
          </div>
        </div>
      </div>

      {/* CTA Section with Google Form Button */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-black" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Have a Query?</h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            We're here to help bring your vision to life. Share your requirements with us, and our team will get back to you within 24 hours.
          </p>
          <a
            href="https://forms.gle/eCYtvqB3vKrYphBM7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
          >
            Submit Your Query
          </a>
          <p className="text-gray-500 text-sm mt-6">
            Or reach us directly at <a href="mailto:contact@thehouseofkc.com" className="text-black underline hover:text-gray-700">contact@thehouseofkc.com</a>
          </p>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen mt-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Connect with The House of KC. We're here to answer your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Address */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Location</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Bangalore, Karnataka<br />
              India
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Call Us</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              <a className="hover:text-black transition">
                +91 9019345667
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              <a href="mailto:contact@thehouseofkc.com" className="hover:text-black transition break-all">
                contact@thehouseofkc.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            For any queries or custom jewelry requests:
          </p>
          <a
            href="https://forms.gle/eCYtvqB3vKrYphBM7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition shadow-lg"
          >
            Submit Your Query
          </a>
        </div>
      </div>
    </div>
  );

  const PrivacyPage = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 mt-16">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">Privacy Policy</h1>
      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-4 sm:space-y-6 text-gray-700">
        <p className="text-xs sm:text-sm text-gray-500">Last updated: January 3, 2026</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Introduction</h2>
        <p>TheHouseofKC Jewelry ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Information We Collect</h2>
        <p>We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2">
          <li>Personal identification information (name, email address, phone number)</li>
          <li>Shipping and billing addresses</li>
          <li>Payment information (processed securely through third-party payment processors)</li>
          <li>Order history and preferences</li>
        </ul>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2">
          <li>Process and fulfill your orders</li>
          <li>Communicate with you about your orders and our products</li>
          <li>Improve our website and customer service</li>
          <li>Send promotional communications (with your consent)</li>
          <li>Detect and prevent fraud</li>
        </ul>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at contact@thehouseofkc.com</p>
      </div>
    </div>
  );

  const TermsPage = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 mt-16">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">Terms & Conditions</h1>
      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-4 sm:space-y-6 text-gray-700">
        <p className="text-xs sm:text-sm text-gray-500">Last updated: January 3, 2026</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Agreement to Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree with any part of these terms, you must not use our website.</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Product Information</h2>
        <p>We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions, colors, or other content on this site are accurate, complete, reliable, or error-free.</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Pricing and Payment</h2>
        <p>All prices are listed in Indian Rupees (INR) and are subject to change without notice. We reserve the right to refuse or cancel any order for any reason, including pricing errors.</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Shipping and Delivery</h2>
        <p>We ship within India. Shipping times may vary based on location and product availability. We are not responsible for delays caused by shipping carriers or unforeseen circumstances.</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Returns and Refunds</h2>
        <p>We offer a 30-day return policy on most products. Items must be unused and in original packaging. Custom-made jewelry may not be eligible for returns. Please contact us at contact@thehouseofkc.com to initiate a return.</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, and images, is the property of TheHouseofKC Jewelry and protected by copyright laws. You may not reproduce, distribute, or use any content without our written permission.</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Limitation of Liability</h2>
        <p>TheHouseofKC Jewelry shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or products.</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.</p>
        
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">Contact Information</h2>
        <p>For questions about these Terms & Conditions, please contact us at contact@thehouseofkc.com</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
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