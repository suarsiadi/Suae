import { testimonials } from '../data';
import { Star, Quote, MessageSquareHeart } from 'lucide-react';

export default function Testimonials() {
  return (
    <section 
      id="reviews" 
      className="py-24 bg-transparent scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Dynamic Text Column */}
          <div className="lg:col-span-4 text-left flex flex-col items-start justify-center">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-cafe-terracotta mb-3 block">Real Social Buzz</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cafe-dark-espresso leading-tight mb-6">
              Hear the Jiggle Whispers from Our Guests
            </h2>
            <div className="w-12 h-[2px] bg-cafe-terracotta mb-5" />
            <p className="font-sans text-base text-cafe-text-muted leading-relaxed mb-8">
              From TikTok creators to quiet weekend readers, our pancakes have traveled around social circles for a simple reason: we don’t compromise on the fluffy cloud mechanics.
            </p>

            {/* Social Proof Counter Sticker */}
            <div className="bg-white/40 backdrop-blur-md border border-white/50 p-4 lg:p-5 rounded-2xl shadow-sm flex items-center space-x-4 w-full">
              <div className="w-12 h-12 rounded-full bg-cafe-terracotta/10 flex items-center justify-center shrink-0">
                <MessageSquareHeart className="w-6 h-6 text-cafe-terracotta" />
              </div>
              <div>
                <span className="font-serif text-xl font-extrabold text-cafe-dark-espresso block">1,200+</span>
                <span className="font-sans text-xs text-cafe-text-muted uppercase tracking-wider font-semibold">5-Star Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Block: Elegant Tweet Card Stack/Layout */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  id={`testimonial-card-${t.id}`}
                  className="bg-white/40 backdrop-blur-md border border-white/50 hover:border-white p-6 sm:p-8 rounded-[32px] hover:shadow-lg transition-all duration-300 relative text-left group shadow-sm"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-cafe-terracotta/10 group-hover:text-cafe-terracotta/20 transition-colors" />

                  <div className="flex items-center space-x-4">
                    {/* User Avatar */}
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/60 shrink-0 shadow-sm">
                      <img
                        src={t.avatarUrl}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div>
                      <h4 className="font-serif text-base font-bold text-cafe-dark-espresso leading-none">
                        {t.name}
                      </h4>
                      <span className="font-sans text-xs text-cafe-terracotta mt-1.5 block">
                        {t.handle}
                      </span>
                    </div>
                  </div>

                  {/* Stars block using brand terracotta gold */}
                  <div className="flex space-x-1 mt-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cafe-terracotta text-cafe-terracotta" />
                    ))}
                  </div>

                  {/* Comments */}
                  <p className="font-sans text-sm sm:text-base text-cafe-text-muted mt-4 leading-relaxed italic">
                    "{t.comment}"
                  </p>

                  {/* Order highlight badge */}
                  <div className="mt-5 pt-4 border-t border-white/30 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[10px] text-cafe-text-muted uppercase tracking-widest font-semibold flex items-center space-x-1.5">
                      <span>Ordered:</span>
                      <strong className="text-cafe-dark-espresso font-semibold">{t.order}</strong>
                    </span>
                    <span className="font-sans text-[10px] bg-white/65 px-2.5 py-1 rounded-full text-cafe-dark-espresso/90 border border-white/40 shadow-xs">
                      Verified Guest
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
