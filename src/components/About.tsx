import { motion } from 'motion/react';
import { Sparkles, HelpingHand, Award, CookingPot } from 'lucide-react';

export default function About() {
  const steps = [
    {
      icon: <Sparkles className="w-5 h-5 text-cafe-terracotta" />,
      title: "The Meringue Whip",
      description: "Cage-free pasture eggs separated and whipped at exactly 12°C to create highly stable, micro-aerated structures. We whip our meringue fresh every 20 minutes."
    },
    {
      icon: <CookingPot className="w-5 h-5 text-cafe-terracotta" />,
      title: "The Slow Copper Steam",
      description: "Baked slowly under tall glass domes on solid thick copper plates imported from Osaka. A splash of vaporized water creates the ultimate pillow texture."
    },
    {
      icon: <Award className="w-5 h-5 text-cafe-terracotta" />,
      title: "The Cultured Cream Crown",
      description: "Draped in custom whipped organic creams made by folding sweet custard into house crème fraîche, resulting in an airy, low-sugar vanilla masterpiece."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-transparent scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Image & Highlight Collage */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative">
              {/* Main Decorative Background Box */}
              <div className="absolute inset-0 bg-white/20 border border-white/30 backdrop-blur-sm rounded-[32px] translate-x-4 translate-y-4 -z-10" />
              
              {/* Main picture */}
              <div className="rounded-[32px] overflow-hidden border-4 border-white/80 shadow-xl bg-white/20">
                <img
                  src="/src/assets/images/cafe_interior_1780228751921.png"
                  alt="Cozy sunlit organic minimalist interior of Soufflé Pancake Cafe"
                  className="w-full h-full object-cover aspect-[4/3] filter contrast-95 brightness-[1.01]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="absolute -top-6 -right-6 bg-cafe-dark-espresso/90 backdrop-blur-md p-5 rounded-2xl shadow-xl flex flex-col items-center max-w-[130px] border border-white/20"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <HelpingHand className="w-5 h-5 text-cafe-terracotta" />
                </div>
                <span className="font-serif text-2xl font-bold text-white block leading-tight">100%</span>
                <span className="font-sans text-[9px] text-white/80 uppercase tracking-widest text-center mt-1">Handmade Artisanal</span>
              </motion.div>
            </div>

            {/* Quick quote in frosted glass box */}
            <div className="mt-8 bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-2xl shadow-sm text-left">
              <span className="font-serif text-lg italic text-cafe-dark-espresso block mb-1">
                "There is no machine that can replace the intuition of a chef sensing the lift of meringue peaks by muscle memory."
              </span>
              <span className="font-sans text-xs uppercase tracking-wide font-bold text-cafe-terracotta block mt-2">
                — Chef Koji Sato, Co-Founder
              </span>
            </div>
          </div>

          {/* Column 2: Story and steps */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-cafe-terracotta mb-3 block">Our Story & Secret Technique</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cafe-dark-espresso leading-tight mb-6">
              Jiggly Pancakes Baked With Patience & <span className="text-cafe-terracotta font-normal italic">Precision</span>
            </h2>
            <p className="font-sans text-base text-cafe-text-muted leading-relaxed mb-10">
              Soufflé Pancake Cafe opened in 2024 out of a simple, beautiful mission: to bring the art of Tokyo’s slow-culture dessert bars into an intimate, warm space designed for mindful bites. Each plate of soufflé pancakes takes precisely twenty minutes of slow steaming to cultivate its signature jiggly rise. We use only premium organic flour, free-range local custard yolk, and pure Japanese cane sugars.
            </p>

            {/* List steps formatted as glass cards */}
            <div className="space-y-4 w-full">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-start items-start space-x-4 p-5 rounded-2xl bg-white/45 hover:bg-white/60 border border-white/50 shadow-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/90 border border-white/70 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-cafe-dark-espresso">{step.title}</h3>
                    <p className="font-sans text-sm text-cafe-text-muted mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
