import re

with open('src/pages/CompanyDetail.jsx', 'r') as f:
    content = f.read()

# The CulturePage component starts at `const CulturePage = () => {` and ends before `export default function CompanyDetail() {`
pattern = re.compile(r'(const CulturePage = \(\) => \{.*?\n\};\n\n)(export default function CompanyDetail)', re.DOTALL)

replacement = """const CulturePage = () => {
  const [active, setActive] = useState(0);
  const theme = THEMES[active];

  const handleTabChange = (id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-background min-h-screen text-text-primary">
      {/* Header */}
      <div className="w-full px-6 md:px-16 lg:px-20 pt-28 md:pt-36 pb-16">
        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px bg-[#4d7aff] w-8" />
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#4d7aff] uppercase font-semibold">Culture Manifesto · Voxi</span>
            <div className="h-px bg-[#4d7aff] w-8" />
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="text-[clamp(36px,6vw,72px)] font-medium tracking-tight text-text-primary leading-[1.05]"
            >
              The Voxi Culture Manifesto.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16px] md:text-[20px] text-text-secondary max-w-[600px] leading-relaxed"
          >
            Life at Voxi is built on purpose, trust, and well-being. We've distilled our philosophy into 4 themes and 15 core principles.
          </motion.p>
        </div>
      </div>

      {/* Tab bar — sticky */}
      <div className="sticky top-[72px] z-30 w-full bg-background/90 backdrop-blur-md border-y border-black/[0.04] px-6 md:px-16 lg:px-20 py-4 shadow-sm">
        <div className="max-w-[900px] mx-auto flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.05] rounded-full p-1.5 overflow-x-auto whitespace-nowrap scrollbar-hide max-w-full"
          >
            {THEMES.map((t) => (
              <motion.button
                key={t.id}
                onClick={() => handleTabChange(t.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-6 md:px-8 py-2.5 rounded-full text-[14px] font-medium cursor-pointer shrink-0 transition-colors duration-300"
                style={{ color: active === t.id ? '#fff' : 'rgba(0,0,0,0.5)' }}
              >
                {active === t.id && (
                  <motion.span
                    layoutId="tab-pill-light"
                    className="absolute inset-0 rounded-full bg-[#111]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content List */}
      <div className="w-full px-6 md:px-16 lg:px-20 py-16 md:py-24 min-h-[50vh]">
        <div className="max-w-[900px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-center gap-4 mb-16">
                <div className="h-px bg-black/[0.1] flex-1 max-w-[100px]" />
                <span className="font-mono text-[13px] tracking-[0.2em] text-black/40 uppercase font-semibold">{theme.full}</span>
                <div className="h-px bg-black/[0.1] flex-1 max-w-[100px]" />
              </div>

              <div className="flex flex-col">
                {theme.principles.map((p, idx) => (
                  <motion.div
                    key={`${active}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row gap-4 md:gap-16 items-start py-10 md:py-16 border-b border-black/[0.08] last:border-0 group"
                  >
                    <div className="w-full md:w-[40%] shrink-0">
                      <div className="text-[48px] md:text-[64px] font-light text-black/[0.05] group-hover:text-black/[0.1] transition-colors duration-500 mb-2 leading-none font-mono">
                        0{idx + 1}
                      </div>
                      <h3 className="text-[22px] md:text-[28px] font-medium text-text-primary tracking-tight leading-[1.2]">
                        {p.title}
                      </h3>
                    </div>
                    <div className="w-full md:w-[60%] md:pt-4">
                      <p className="text-[16px] md:text-[19px] text-text-secondary leading-[1.6]">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* The Voxi Promise */}
      <div className="w-full bg-[#111] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-5 z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4d7aff]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-6 md:px-16 lg:px-20 text-center relative z-10">
          <StaggerContainer>
            <FadeInUp className="inline-flex items-center gap-3 mb-8">
              <div className="h-px bg-white/20 w-8" />
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/50 uppercase">The Voxi Promise</span>
              <div className="h-px bg-white/20 w-8" />
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,48px)] font-medium tracking-tight text-white leading-[1.2] mb-8">
                At Voxi, you're not joining a company — you're joining a mission to build world-class AI while living a healthier, happier, and more meaningful life.
              </h2>
            </FadeInUp>
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
};

\\2"""

new_content = pattern.sub(replacement, content)

with open('src/pages/CompanyDetail.jsx', 'w') as f:
    f.write(new_content)
