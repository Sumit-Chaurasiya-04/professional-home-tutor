import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  CheckCircle, 
  BookOpen, 
  Users, 
  Calendar,
  MessageCircle,
  ChevronRight
} from 'lucide-react';

// --- FIXED DATA SECTION (START) ---
// I have moved the data here so you don't need a separate 'constants' file.
// Make sure to update the phone number and email below!

const CONTACT_DATA = {
  phone: "9899558849", // <--- REPLACE with your real number
  whatsapp: "9899558849", // <--- REPLACE with your real WhatsApp (include country code 91)
  email: "sam.ciya64@gmail.com", // <--- REPLACE with your real email
  location: "Sector 93, Noida"
};

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },       // The '#' tells it to scroll, not reload
  { label: 'About Me', href: '#about' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Timings', href: '#timings' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];
// --- FIXED DATA SECTION (END) ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const whatsappLink = `https://wa.me/${CONTACT_DATA.whatsapp}?text=${encodeURIComponent("Hello Sir, I am interested in tuition for my child. Please share details.")}`;
  const phoneLink = `tel:${CONTACT_DATA.phone}`;
  const emailLink = `mailto:${CONTACT_DATA.email}?subject=${encodeURIComponent("Tuition Enquiry")}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Header & Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#home" className="brand-font text-2xl font-bold text-blue-900 tracking-tight">
              Sumit Chaurasiya
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-blue-700 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-blue-800"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={phoneLink}
                  className="flex items-center gap-2 text-blue-800 font-semibold"
                >
                  <Phone size={18} /> Call Now
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-700 font-semibold"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
            Trusted Personal Home Tutor
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-950 mb-6 leading-tight max-w-4xl">
            Empowering Young Minds from Class 1 to 8
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl">
            Providing personalized, concept-focused home tuition in Sector 93, Noida. 
            Special expertise in Social Studies with a modern, structured approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>
            <a
              href={phoneLink}
              className="bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Phone size={22} />
              Call Now
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <Users size={20} className="text-blue-600" />
              800+ Students Taught
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <CheckCircle size={20} className="text-blue-600" />
              Personalized Attention
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <Award size={20} className="text-blue-600" />
              Proven Results
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3 -z-10"></div>
                <img
                  src="/public/images/Sumit.jpeg"
                  alt="Sumit Chaurasiya Profile"
                  className="rounded-2xl shadow-xl w-full h-[500px] object-cover border-8 border-white"
                />
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
                  <p className="text-sm font-bold text-blue-900">Experience</p>
                  <p className="text-slate-600 text-xs">Teaching professionally since 2022</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Meet Sumit Chaurasiya</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                As a dedicated freelance tutor based in <strong>Sector 93, Noida</strong>, I have successfully taught and guided over <strong>800+ students</strong>. My background in Computer Science allows me to bring a unique, 
                highly organized, and structured approach to primary and middle school education.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                I specialize in making complex subjects simple for children. While I have a strong command over <strong>Social Studies</strong>, I teach all general subjects for students from Class 1 to Class 8. 
                My focus isn't just on homework, but on building a deep foundation of concepts that stays with the student for life.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Structured Learning</h4>
                    <p className="text-sm text-slate-600">Logical teaching plans for every student.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Calendar size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Consistent Growth</h4>
                    <p className="text-sm text-slate-600">Regular assessments and progress tracking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects & Classes Section */}
      <section id="subjects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">Subjects & Specialized Coaching</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Primary Classes Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="text-blue-700" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Class 1 to 5</h3>
              <p className="text-slate-600 mb-6">Building strong foundations in English, Math, and EVS through interactive storytelling and clear explanations.</p>
              <ul className="space-y-3 text-slate-700 font-medium">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-blue-600" /> English & Hindi</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-blue-600" /> Mathematics Basics</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-blue-600" /> Environmental Studies</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-blue-600" /> Creative Homework Help</li>
              </ul>
            </div>

            {/* Middle Classes Card (Highlighted) */}
            <div className="bg-blue-900 p-8 rounded-2xl shadow-xl text-white transform md:-translate-y-4">
              <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-blue-200" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Class 6 to 8</h3>
              <p className="text-blue-100 mb-6 font-medium">Special emphasis on developing analytical thinking and exam preparedness for core middle school subjects.</p>
              <div className="bg-blue-800/50 p-4 rounded-xl mb-6 border border-blue-700">
                <h4 className="font-bold text-blue-200 uppercase text-xs tracking-widest mb-1">Our Strength</h4>
                <p className="text-lg font-bold">Social Studies Expertise</p>
                <p className="text-sm text-blue-200 opacity-80 mt-1">History, Geography, & Civics made easy through maps and conceptual charts.</p>
              </div>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Advanced Social Science</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Science & Math Concepts</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Exam Preparation</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Map Work & Diagramming</li>
              </ul>
            </div>

            {/* Approach Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-blue-700" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Teaching Approach</h3>
              <p className="text-slate-600 mb-6">Using modern techniques and consistent parent interaction to ensure the student's holistic growth.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1"><CheckCircle size={18} className="text-blue-600" /></div>
                  <span className="text-slate-700"><strong>Doubt Solving:</strong> Encouraging questions to clear every small hurdle.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1"><CheckCircle size={18} className="text-blue-600" /></div>
                  <span className="text-slate-700"><strong>Parent Interaction:</strong> Weekly updates on student performance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1"><CheckCircle size={18} className="text-blue-600" /></div>
                  <span className="text-slate-700"><strong>Concept Clarity:</strong> Moving away from rote learning to actual understanding.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timings & Fees Section */}
      <section id="timings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8">Teaching Timings & Fees</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="text-orange-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Available Slots</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p className="text-sm font-bold text-slate-500 uppercase">Morning</p>
                        <p className="text-lg font-bold text-slate-900">5:00 AM – 8:00 AM</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p className="text-sm font-bold text-slate-500 uppercase">Afternoon / Evening</p>
                        <p className="text-lg font-bold text-slate-900">2:00 PM – 11:00 PM</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-3">* Flexible timings can be arranged if the student has a busy afternoon schedule.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-700">₹</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Fee Structure</h3>
                    <p className="text-slate-700 mb-2 text-lg">Tuition is charged on an <strong>hourly basis</strong> to provide better value and focus.</p>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                      <p className="text-green-800 font-medium italic">
                        "Rates vary based on the exact location in Noida and the specific availability of the student. Please contact for a personalized quote."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://www.pexels.com/photo/man-holding-a-sheet-of-data-8370392/" 
                alt="Structured Learning Environment" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/10 skew-x-12 translate-x-20 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Service Area</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Sector 93, Noida & Beyond</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I provide home tuition services within a <strong>10 km radius</strong> of Sector 93, Noida. 
                I am happy to travel to nearby societies and residential areas to provide quality education in the comfort of your home.
              </p>
              
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl">Service Radius</h4>
                  <p className="text-slate-400">Up to 10km from Sector 93 base.</p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold mb-3 text-blue-300">Nearby Localities Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Sector 93A', 'Sector 93B', 'Sector 108', 'Sector 110', 'Sector 82', 'Sector 137', 'Eldeco Utopia', 'Grand Omaxe'].map((place) => (
                    <span key={place} className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default">
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-full border-2 border-dashed border-blue-800/50 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-blue-500/5 rounded-full animate-pulse"></div>
                <div className="w-full h-full rounded-full border-2 border-blue-500/20 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full bg-blue-600/10 flex flex-col items-center justify-center text-center">
                    <MapPin size={48} className="text-blue-400 mb-2 animate-bounce" />
                    <span className="font-bold text-lg">Sector 93</span>
                    <span className="text-xs text-slate-400 tracking-widest uppercase">Center Point</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">Book Your Demo Class Today</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto italic">
              "Every child has the potential for greatness. Let's unlock it together."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp Contact */}
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-10 bg-green-50 rounded-3xl border border-green-100 hover:bg-green-100 transition-all text-center"
            >
              <div className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">WhatsApp Chat</h3>
              <p className="text-slate-600 mb-4">Quick replies and easy coordination.</p>
              <span className="text-green-700 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Chat Now <ChevronRight size={18} />
              </span>
            </a>

            {/* Phone Contact */}
            <a 
              href={phoneLink}
              className="group flex flex-col items-center p-10 bg-blue-50 rounded-3xl border border-blue-100 hover:bg-blue-100 transition-all text-center"
            >
              <div className="w-16 h-16 bg-blue-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Direct Call</h3>
              <p className="text-slate-600 mb-4">{CONTACT_DATA.phone}</p>
              <span className="text-blue-800 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Call Now <ChevronRight size={18} />
              </span>
            </a>

            {/* Email Contact */}
            <a 
              href={emailLink}
              className="group flex flex-col items-center p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-slate-100 transition-all text-center"
            >
              <div className="w-16 h-16 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Email Inquiry</h3>
              <p className="text-slate-600 mb-4">{CONTACT_DATA.email}</p>
              <span className="text-slate-800 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Send Email <ChevronRight size={18} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="max-w-sm">
              <h2 className="brand-font text-2xl font-bold text-blue-900 mb-3">Sumit Chaurasiya</h2>
              <p className="text-slate-600 font-medium">Personal Home Tutor & Social Studies Expert</p>
              <p className="text-slate-500 text-sm mt-2 flex items-center gap-2">
                <MapPin size={14} /> {CONTACT_DATA.location}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8 md:gap-16">
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Navigation</h4>
                <a href="#home" className="text-slate-600 hover:text-blue-700 transition-colors text-sm">Home</a>
                <a href="#about" className="text-slate-600 hover:text-blue-700 transition-colors text-sm">About Me</a>
                <a href="#subjects" className="text-slate-600 hover:text-blue-700 transition-colors text-sm">Subjects</a>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Quick Links</h4>
                <a href="#timings" className="text-slate-600 hover:text-blue-700 transition-colors text-sm">Timings</a>
                <a href="#location" className="text-slate-600 hover:text-blue-700 transition-colors text-sm">Location</a>
                <a href="#contact" className="text-slate-600 hover:text-blue-700 transition-colors text-sm">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Sumit Chaurasiya. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/sumit-chaurasiya-in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors">LinkedIn Profile</a>
              <a href="https://github.com/Sumit-Chaurasiya-04" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors">GitHub Repository</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;