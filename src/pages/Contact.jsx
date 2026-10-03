import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronsRight, Mail, MapPin, Clock } from 'lucide-react';
import heroImg from '../assets/voxitext.png';
import { easing } from '../components/shared/Motion';

export default function Contact() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col lg:flex-row p-3 lg:p-[12px] gap-4">
      {/* Left Side - Image and Text */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easing }}
        className="relative w-full lg:w-[60%] h-[50dvh] lg:h-[calc(100dvh-24px)] rounded-[24px] overflow-hidden bg-black flex-shrink-0"
      >
        <motion.img 
          src={heroImg} 
          alt="Voxi" 
          className="w-full h-full object-contain p-12 lg:p-24 opacity-80"
          animate={{ y: [-15, 15, -15], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-10 lg:bottom-16 left-6 lg:left-12 text-white z-10 flex flex-col gap-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easing }}
            className="text-[clamp(40px,6vw,72px)] font-medium leading-[1.05] tracking-tight max-w-[550px]"
          >
            Get in Touch
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easing }}
            className="flex flex-col gap-4 text-[15px] font-medium text-white/90 max-w-[450px]"
          >
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--global-accent)] flex-shrink-0" /> 
              <span>hello@voxiflow.ai</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[var(--global-accent)] flex-shrink-0" /> 
              <span>+91-8218447171</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[var(--global-accent)] flex-shrink-0 mt-0.5" /> 
              <span className="leading-relaxed">H1A/20, PLOT NO- 20, Sector 63 Rd, H Block, Sector 63, Noida, Uttar Pradesh 201301</span>
            </div>

          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easing }}
        >
          <h2 className="text-[clamp(36px,4vw,56px)] font-medium leading-[1.05] tracking-tight text-black mb-4">
            Deploy your first agent today.
          </h2>
          <p className="text-[15px] text-black/60 leading-[1.6] mb-10 max-w-[450px]">
            Ready to transform your customer experience? Reach out to our team to discuss a custom AI integration or start your pilot today and experience the future of customer engagement.
          </p>
          
          <form className="flex flex-col gap-5 w-full max-w-[500px]">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full gap-2">
                <label className="text-[13px] text-black/60 font-medium">Name</label>
                <input 
                  type="text" 
                  inputMode="text"
                  placeholder="Jane Smith" 
                  className="w-full border border-black/10 bg-[#fafafa] rounded-[12px] px-4 py-3.5 text-[16px] outline-none focus:border-black/30 focus:bg-white transition-colors" 
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="text-[13px] text-black/60 font-medium">Email</label>
                <input 
                  type="email" 
                  inputMode="email"
                  placeholder="jane@framer.com" 
                  className="w-full border border-black/10 bg-[#fafafa] rounded-[12px] px-4 py-3.5 text-[16px] outline-none focus:border-black/30 focus:bg-white transition-colors" 
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-black/60 font-medium">Phone Number</label>
              <input 
                type="tel" 
                inputMode="tel"
                placeholder="Enter phone number" 
                className="w-full border border-black/10 bg-[#fafafa] rounded-[12px] px-4 py-3.5 text-[16px] outline-none focus:border-black/30 focus:bg-white transition-colors" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-black/60 font-medium">Message</label>
              <textarea 
                placeholder="Type here..." 
                rows={4} 
                className="w-full border border-black/10 bg-[#fafafa] rounded-[12px] px-4 py-3.5 text-[16px] outline-none focus:border-black/30 focus:bg-white transition-colors resize-none" 
                required
              />
            </div>

            <div className="mt-6">
              <button 
                type="button"
                className="flex items-center bg-[#5c5c5c] text-white rounded-[16px] overflow-hidden group hover:bg-[#4a4a4a] transition-all duration-300 w-fit active:scale-95"
              >
                <div className="bg-white text-black h-[46px] w-[56px] flex items-center justify-center rounded-[12px] m-[5px] group-hover:bg-[#f0f0f0] transition-colors">
                  <ChevronsRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="px-8 font-medium text-[15px]">Submit</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
