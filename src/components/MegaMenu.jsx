import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageSquare, Workflow, Layers, Database, Headset, Link as LinkIcon, Building2, Stethoscope, Landmark, Car, Briefcase, GraduationCap, Microscope, Network, Brain, Atom, Users, Heart, Star, Sparkles, CircleDot } from 'lucide-react';
import { easing } from './shared/Motion';

const getIcon = (name) => {
  const n = (name || '').toLowerCase();
  
  // Platform
  if (n.includes('voice') || n.includes('call') || n.includes('telephony')) return <Phone size={14} />;
  if (n.includes('whatsapp') || n.includes('message') || n.includes('chat')) return <MessageSquare size={14} />;
  if (n.includes('orchestration') || n.includes('workflow')) return <Workflow size={14} />;
  if (n.includes('omnichannel') || n.includes('platform')) return <Layers size={14} />;
  if (n.includes('crm') || n.includes('data')) return <Database size={14} />;
  if (n.includes('agent') || n.includes('center')) return <Headset size={14} />;
  if (n.includes('integration') || n.includes('api')) return <LinkIcon size={14} />;
  
  // Solutions
  if (n.includes('health') || n.includes('care')) return <Stethoscope size={14} />;
  if (n.includes('finance') || n.includes('bank')) return <Landmark size={14} />;
  if (n.includes('auto') || n.includes('car')) return <Car size={14} />;
  if (n.includes('retail') || n.includes('ecommerce')) return <Briefcase size={14} />;
  if (n.includes('education')) return <GraduationCap size={14} />;
  if (n.includes('estate') || n.includes('property')) return <Building2 size={14} />;
  
  // Research
  if (n.includes('research') || n.includes('science')) return <Microscope size={14} />;
  if (n.includes('nlp') || n.includes('language')) return <Network size={14} />;
  if (n.includes('model') || n.includes('brain')) return <Brain size={14} />;
  if (n.includes('quantum') || n.includes('core')) return <Atom size={14} />;
  
  // Company
  if (n.includes('about') || n.includes('team') || n.includes('people') || n.includes('company')) return <Users size={14} />;
  if (n.includes('culture') || n.includes('values')) return <Heart size={14} />;
  if (n.includes('career') || n.includes('job') || n.includes('partner')) return <Star size={14} />;
  if (n.includes('vision')) return <Sparkles size={14} />;
  
  // Default
  return <CircleDot size={14} />;
};

export default function MegaMenu({ item, topPosition = "72px" }) {
  // Dynamic left canvas content based on the navigation item
  const getCanvasContent = (name) => {
    switch(name.toLowerCase()) {
      case 'platform':
        return {
          label: 'VOXI PLATFORM',
          desc: 'Autonomous customer orchestration across every conversation and channel.'
        };
      case 'solutions':
        return {
          label: 'VOXI SOLUTIONS',
          desc: 'Tailored AI architectures engineered for specific industry workflows and challenges.'
        };
      case 'voxi research':
        return {
          label: 'VOXI RESEARCH',
          desc: 'Pioneering the next generation of conversational AI and autonomous systems.'
        };
      case 'company':
        return {
          label: 'VOXI COMPANY',
          desc: 'Meet the team building the future of autonomous enterprise communication.'
        };
      default:
        return {
          label: `VOXI ${name.toUpperCase()}`,
          desc: `Explore our ${name.toLowerCase()} and discover the future of voice AI.`
        };
    }
  };

  const canvas = getCanvasContent(item.name);

  // If no dropdown items, return null
  if (!item.dropdown || item.dropdown.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: easing }}
      className={`absolute left-0 lg:-left-6 w-[780px] max-w-[90vw] bg-[#111111] border border-white/10 rounded-[24px] shadow-[0_24px_48px_rgba(0,0,0,0.5)] overflow-hidden flex z-[100]`}
      style={{ top: topPosition }}
    >
      {/* Left Canvas */}
      <div className="w-[30%] bg-[#111111] p-8 flex flex-col justify-between border-r border-white/5 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-[14px] font-mono tracking-[0.1em] text-white uppercase mb-4">{canvas.label}</h3>
          <p className="text-[16px] text-white/90 font-medium leading-[1.3] tracking-tight">
            {canvas.desc}
          </p>
        </div>
        <Link 
          to={item.href} 
          className="group flex items-center text-[12px] font-medium text-white/40 hover:text-white transition-colors relative z-10 mt-10"
        >
          Explore the {item.name} <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      {/* Right Canvas */}
      <div className="w-[70%] bg-[#151515] p-5 flex flex-col gap-1 max-h-[500px] overflow-y-auto custom-scrollbar">
        {item.dropdown.map((subItem, idx) => (
          <Link 
            key={subItem.id} 
            to={subItem.href || `${item.href}/${subItem.id}`}
            className="group block p-4 rounded-[16px] hover:bg-white/[0.04] transition-colors relative"
          >
            <div className="flex items-center justify-between mb-0.5">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[8px] bg-white/5 flex items-center justify-center text-white/90 group-hover:bg-white/15 group-hover:text-white group-hover:border-white transition-all border border-white/80">
                  {getIcon(subItem.shortName || subItem.industry || subItem.title || subItem.name)}
                </div>
                <h4 className="text-[14px] font-medium text-white/90 tracking-tight group-hover:text-white transition-colors">
                  {subItem.shortName || subItem.industry || subItem.title || subItem.name}
                </h4>
              </div>
              <ArrowRight size={15} className="text-white/10 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-[13px] text-white/40 pl-[40px] group-hover:text-white/60 transition-colors line-clamp-1">
              {subItem.tagline || subItem.area || subItem.benefits || subItem.description || `Explore this ${item.name.toLowerCase()} in detail.`}
            </p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
