import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function UseCaseList({ useCases }) {
  return (
    <div className="flex flex-col gap-4">
      {useCases.map((useCase, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, x: -30, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-start gap-4 p-4 rounded-[12px] bg-surface/50 border border-border group hover:bg-surface hover:border-black/10 transition-colors"
        >
          <div className="w-6 h-6 rounded-full bg-black/5 border border-black/10 flex items-center justify-center shrink-0 mt-0.5 text-text-secondary group-hover:text-text-primary transition-colors">
            <ArrowRight size={12} />
          </div>
          <span className="text-[15px] text-text-secondary group-hover:text-text-primary transition-colors font-medium">
            {useCase}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

