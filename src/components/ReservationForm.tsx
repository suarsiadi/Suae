import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ReservationDetails } from '../types';
import { X, Calendar, Users, Armchair, Sparkles, CheckCircle, Coffee, Clock, Heart, Loader2, AlertCircle } from 'lucide-react';

interface ReservationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationForm({ isOpen, onClose }: ReservationFormProps) {
  const [formData, setFormData] = useState<ReservationDetails>({
    fullName: '',
    email: '',
    phone: '',
    date: '2026-06-01',
    time: '12:30 PM',
    guests: 2,
    seatingPreference: 'window',
    isSpecialOccasion: false,
    notes: ''
  });

  const [loadingState, setLoadingState] = useState<'idle' | 'baking' | 'success'>('idle');
  const [ticketNumber, setTicketNumber] = useState('');
  const [savedReservation, setSavedReservation] = useState<ReservationDetails | null>(null);
  const [savedTicket, setSavedTicket] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Hydrate existing reservation state if any
  useEffect(() => {
    const existingTicket = localStorage.getItem('souffle_ticket');
    const existingBooking = localStorage.getItem('souffle_booking');
    if (existingTicket && existingBooking) {
      setSavedTicket(existingTicket);
      setSavedReservation(JSON.parse(existingBooking));
    }
  }, [loadingState]);

  const timeSlots = [
    '11:00 AM', '12:30 PM', '1:30 PM', '2:45 PM', '4:00 PM', '5:30 PM', '7:00 PM', '8:15 PM'
  ];

  const handleSelectTime = (slot: string) => {
    setFormData(prev => ({ ...prev, time: slot }));
  };

  const handleSelectGuests = (num: number) => {
    setFormData(prev => ({ ...prev, guests: num }));
  };

  const handleSelectSeating = (pref: 'window' | 'nook' | 'terrace' | 'regular') => {
    setFormData(prev => ({ ...prev, seatingPreference: pref }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg('Please satisfy all required fields to secure your cloud table.');
      return;
    }

    setErrorMsg('');
    setLoadingState('baking');

    // Simulate cooking/baking pancake tables
    setTimeout(() => {
      const generatedTicket = 'SFL-' + Math.floor(100000 + Math.random() * 900000);
      setTicketNumber(generatedTicket);
      
      // Save in localStorage for persistent state representation
      localStorage.setItem('souffle_ticket', generatedTicket);
      localStorage.setItem('souffle_booking', JSON.stringify(formData));
      
      setLoadingState('success');
    }, 2000);
  };

  const handleCancelReservation = () => {
    localStorage.removeItem('souffle_ticket');
    localStorage.removeItem('souffle_booking');
    setSavedReservation(null);
    setSavedTicket('');
    setLoadingState('idle');
  };

  const seatingTypes = [
    { id: 'window', name: 'Aesthetic Window', desc: 'Direct streetview, gorgeous natural lighting', icon: <Armchair className="w-4 h-4" /> },
    { id: 'nook', name: 'Cozy Nook Corner', desc: 'Curved wooden wall, dim acoustic setting', icon: <Heart className="w-4 h-4" /> },
    { id: 'terrace', name: 'Pet-friendly Terrace', desc: 'Outdoor heated deck, potted pampas grass', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'regular', name: 'Standard Table', desc: 'Close to the live pancake copper griddles', icon: <Coffee className="w-4 h-4" /> }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="reservation-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-cafe-dark-espresso/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            id="reservation-modal-content"
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="bg-white/50 backdrop-blur-lg max-w-2xl w-full rounded-[36px] overflow-hidden shadow-2xl relative border border-white/60 text-left my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Absolut close button */}
            <button
              id="close-reservation-modal"
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/60 border border-white/50 hover:bg-white text-cafe-dark-espresso hover:rotate-90 transition-all flex items-center justify-center focus:outline-none cursor-pointer z-10 shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Display State Switch */}

            {/* 1. Show existing reservation flyer if they already booked */}
            {savedReservation && savedTicket && loadingState !== 'baking' ? (
              <div className="p-8 sm:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4A373]/10 flex items-center justify-center mx-auto mb-6 border border-white/60">
                  <CheckCircle className="w-8 h-8 text-cafe-terracotta" />
                </div>

                <span className="font-sans text-[10px] text-cafe-terracotta tracking-widest font-bold uppercase">Ticket Active</span>
                <h3 className="font-serif text-3xl font-bold text-cafe-dark-espresso mt-1.5">You Have a Confirmed Cloud!</h3>
                <p className="font-sans text-sm text-cafe-text-muted mt-2 max-w-sm mx-auto">
                  Show this digital invitation to the host on your arrival to bypass the walk-in waiting list instantly.
                </p>

                {/* Aesthetic Flyer Ticket Card (Glassmorphism formatted) */}
                <div className="my-8 bg-white/40 border-2 border-dashed border-white/50 rounded-3xl p-6 sm:p-8 max-w-md mx-auto text-left relative overflow-hidden shadow-xs">
                  <div className="absolute top-0 bottom-0 left-0 w-2 bg-cafe-terracotta" />
                  
                  <div className="flex justify-between items-start border-b border-white/30 pb-4 mb-4">
                    <div>
                      <span className="font-serif text-xl font-bold text-cafe-dark-espresso block">SOUFFLÉ PANCAKE CAFE</span>
                      <span className="font-mono text-[10px] text-cafe-text-muted mt-1 uppercase tracking-widest block">Cream District HQ</span>
                    </div>
                    <div className="bg-cafe-terracotta text-white px-3 py-1.5 rounded-xl font-mono text-xs font-bold shadow-xs">
                      {savedTicket}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs">
                    <div>
                      <span className="font-sans text-[10px] text-cafe-text-muted uppercase tracking-wider block">Guest Member</span>
                      <span className="font-serif font-bold text-cafe-dark-espresso mt-0.5 block">{savedReservation.fullName}</span>
                    </div>
                    <div>
                      <span className="font-sans text-[10px] text-cafe-text-muted uppercase tracking-wider block">Party Size</span>
                      <span className="font-serif font-bold text-cafe-dark-espresso mt-0.5 block">{savedReservation.guests} Cloud Lovers</span>
                    </div>
                    <div>
                      <span className="font-sans text-[10px] text-cafe-text-muted uppercase tracking-wider block">Appointment Slot</span>
                      <span className="font-serif font-bold text-cafe-dark-espresso mt-0.5 block">
                        {savedReservation.date} @ {savedReservation.time}
                      </span>
                    </div>
                    <div>
                      <span className="font-sans text-[10px] text-cafe-text-muted uppercase tracking-wider block">Seating Preference</span>
                      <span className="font-serif font-bold text-cafe-dark-espresso mt-0.5 block capitalize">
                        {savedReservation.seatingPreference} Seat
                      </span>
                    </div>
                  </div>

                  {savedReservation.notes && (
                    <div className="mt-4 pt-3 border-t border-white/30 text-xs italic text-cafe-text-muted">
                      " {savedReservation.notes} "
                    </div>
                  )}

                  <div className="mt-6 text-center text-[10px] text-cafe-text-muted tracking-widest uppercase font-semibold">
                    🥞 Please arrive 10 minutes early to watch steaming
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button
                    id="cancel-booking-button"
                    onClick={handleCancelReservation}
                    className="w-full sm:w-auto font-sans text-xs uppercase tracking-wider font-bold text-cafe-text-muted/60 hover:text-red-500 py-3 px-5 transition-colors cursor-pointer"
                  >
                    Cancel Booking
                  </button>
                  <button
                    id="close-success-booking"
                    onClick={onClose}
                    className="cursor-pointer w-full sm:w-auto bg-cafe-dark-espresso hover:bg-cafe-terracotta text-white px-10 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : loadingState === 'baking' ? (
              /* 2. Baking/Steaming pancakes loading state in Glass */
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[450px]">
                <div className="relative mb-6">
                  <Loader2 className="w-14 h-14 text-cafe-terracotta animate-spin" />
                  <Coffee className="w-6 h-6 text-cafe-dark-espresso absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-cafe-terracotta font-bold">Steaming Dome</span>
                <h3 className="font-serif text-2xl font-bold text-cafe-dark-espresso mt-3">Whispering to Meringue ...</h3>
                
                {/* Moving loading jiggle visual */}
                <div className="w-48 h-3 bg-white/50 rounded-full overflow-hidden mt-6 border border-white/40">
                  <motion.div
                    animate={{ x: [-192, 192] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="w-2/3 h-full bg-gradient-to-r from-cafe-terracotta to-cafe-dark-espresso rounded-full"
                  />
                </div>
                
                <p className="font-sans text-xs text-cafe-text-muted mt-4 max-w-xs">
                  We are securing available booths near the griddle and sending your table request ticket configuration...
                </p>
              </div>
            ) : loadingState === 'success' ? (
              /* 3. Fresh success screen (triggers loadingState modification) */
              <div className="p-8 sm:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6 border border-green-200">
                  <CheckCircle className="w-8 h-8 text-green-600 animate-bounce" />
                </div>

                <span className="font-sans text-[10px] text-cafe-terracotta tracking-widest font-bold uppercase">Success Confirmed</span>
                <h3 className="font-serif text-3xl font-bold text-cafe-dark-espresso mt-1.5">You're on the Cloud Registry!</h3>
                <p className="font-sans text-sm text-cafe-text-muted mt-2 max-w-sm mx-auto">
                  Your table request is processed. Your digital invitation voucher is configured permanently in your device storage.
                </p>

                {/* Digital Invitation Card in Glass */}
                <div className="my-8 bg-white/40 border-2 border-dashed border-white/50 rounded-3xl p-6 text-left relative overflow-hidden">
                  <div className="flex justify-between items-center border-b border-white/30 pb-3 mb-4">
                    <span className="font-serif text-lg font-bold text-cafe-dark-espresso">SOUFFLÉ PANCAKE CO.</span>
                    <span className="font-mono text-xs text-white bg-cafe-dark-espresso px-2.5 py-1 rounded-lg">
                      {ticketNumber}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-sans text-cafe-text-muted">
                    <p>🧑‍🍳 Guest: <strong className="text-cafe-dark-espresso">{formData.fullName}</strong></p>
                    <p>📅 Schedule: <strong className="text-cafe-dark-espresso">{formData.date} at {formData.time}</strong></p>
                    <p>🛋️ Seat: <strong className="text-cafe-dark-espresso capitalize">{formData.seatingPreference} Layout</strong></p>
                    <p>👥 Party: <strong className="text-cafe-dark-espresso">{formData.guests} Persons</strong></p>
                  </div>
                </div>

                <button
                  id="close-fresh-success"
                  onClick={() => {
                    setSavedReservation(formData);
                    setSavedTicket(ticketNumber);
                    setLoadingState('idle'); // revert to flyer mode
                  }}
                  className="cursor-pointer bg-cafe-dark-espresso hover:bg-cafe-terracotta text-white px-10 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-md w-full sm:w-auto"
                >
                  View Digital Card
                </button>
              </div>
            ) : (
              /* 4. Active idle booking input form in Frosted Glass */
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 overflow-y-auto max-h-[85vh]">
                <div className="flex items-center space-x-2 text-cafe-terracotta mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.2em]">Table Request Desk</span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cafe-dark-espresso leading-tight">
                  Reserve Your Cloud Seat
                </h3>

                <p className="font-sans text-xs sm:text-sm text-cafe-text-muted mt-2 mb-6 leading-relaxed max-w-md">
                  Because we slow-steam every pancake stack fresh, grid slots fill up fast! Request a table below to bypass the walk-in waiting queue.
                </p>

                {/* Custom warning alert banner if any errors */}
                {errorMsg && (
                  <div className="mb-6 bg-red-500/10 border border-red-500/30 p-3.5 rounded-xl flex items-start space-x-2.5 text-left animate-shake">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs font-semibold text-red-700">{errorMsg}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-cafe-dark-espresso mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="booking-name"
                      required
                      value={formData.fullName}
                      onChange={e => {
                        setErrorMsg('');
                        setFormData(p => ({ ...p, fullName: e.target.value }));
                      }}
                      placeholder="Chloe Lin"
                      className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-sm text-cafe-dark-espresso placeholder-cafe-text-muted/50 focus:outline-none focus:border-cafe-terracotta focus:bg-white/80 transition-all font-sans"
                    />
                  </div>

                  {/* Dual contact block info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-bold uppercase tracking-wider text-cafe-dark-espresso mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="booking-email"
                        required
                        value={formData.email}
                        onChange={e => {
                          setErrorMsg('');
                          setFormData(p => ({ ...p, email: e.target.value }));
                        }}
                        placeholder="chloe@example.com"
                        className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-sm text-cafe-dark-espresso placeholder-cafe-text-muted/50 focus:outline-none focus:border-cafe-terracotta focus:bg-white/80 transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-bold uppercase tracking-wider text-cafe-dark-espresso mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="booking-phone"
                        required
                        value={formData.phone}
                        onChange={e => {
                          setErrorMsg('');
                          setFormData(p => ({ ...p, phone: e.target.value }));
                        }}
                        placeholder="(555) 727-8353"
                        className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-sm text-cafe-dark-espresso placeholder-cafe-text-muted/50 focus:outline-none focus:border-cafe-terracotta focus:bg-white/80 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Date and Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-bold uppercase tracking-wider text-cafe-dark-espresso mb-2 flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-cafe-terracotta" />
                        <span>Reservation Date *</span>
                      </label>
                      <input
                        type="date"
                        id="booking-date"
                        required
                        value={formData.date}
                        onChange={e => setFormData(p => ({ ...p, date: e.target.value }))}
                        className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-sm text-cafe-dark-espresso focus:outline-none focus:border-cafe-terracotta focus:bg-white/80 transition-all font-sans"
                      />
                    </div>

                    {/* Guests pill selection lists */}
                    <div>
                      <label className="block text-xs font-sans font-bold uppercase tracking-wider text-cafe-dark-espresso mb-2 flex items-center space-x-1">
                        <Users className="w-3.5 h-3.5 text-cafe-terracotta" />
                        <span>Party Size</span>
                      </label>
                      <div className="flex bg-white/40 p-1 rounded-xl border border-white/50">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            type="button"
                            id={`booking-guests-${num}`}
                            onClick={() => handleSelectGuests(num)}
                            className={`flex-1 text-center py-2 text-xs font-bold rounded-lg focus:outline-none cursor-pointer transition-all ${
                              formData.guests === num
                                ? 'bg-cafe-terracotta text-white shadow-xs'
                                : 'text-cafe-dark-espresso/70 hover:bg-white/40'
                            }`}
                          >
                            {num}{num === 5 ? '+' : ''}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hours slots select pills */}
                  <div>
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-cafe-dark-espresso mb-2 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-cafe-terracotta" />
                      <span>Available Time Slot</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          id={`booking-time-${slot.replace(':', '-').replace(' ', '-')}`}
                          onClick={() => handleSelectTime(slot)}
                          className={`py-2 px-1 text-center text-xs font-bold rounded-xl border focus:outline-none transition-all cursor-pointer ${
                            formData.time === slot
                              ? 'bg-cafe-terracotta text-white border-cafe-terracotta shadow-xs'
                              : 'bg-white/40 border-white/40 text-cafe-dark-espresso/80 hover:bg-white/60'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Aesthetic Seating Type cards selector */}
                  <div>
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-cafe-dark-espresso mb-3 flex items-center space-x-1">
                      <Armchair className="w-3.5 h-3.5 text-cafe-terracotta" />
                      <span>Seating Layout Preference</span>
                    </label>
                     
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {seatingTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          id={`booking-seat-${type.id}`}
                          onClick={() => handleSelectSeating(type.id as 'window' | 'nook' | 'terrace' | 'regular')}
                          className={`p-3.5 rounded-xl border text-left flex items-start space-x-3 transition-all cursor-pointer ${
                            formData.seatingPreference === type.id
                              ? 'bg-white/60 border-cafe-terracotta text-cafe-dark-espresso shadow-xs'
                              : 'bg-[#FDFBF7]/30 border-white/40 text-cafe-dark-espresso/85 hover:border-white/80'
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                            formData.seatingPreference === type.id
                              ? 'bg-cafe-terracotta text-white'
                              : 'bg-white border border-white/40 text-cafe-text-muted'
                          }`}>
                            {type.icon}
                          </div>
                          <div>
                            <span className="font-serif text-sm font-bold block">{type.name}</span>
                            <span className="font-sans text-[10px] text-cafe-text-muted block mt-0.5 leading-tight">{type.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Occasions and notes */}
                  <div className="pt-4 border-t border-white/35 space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id="booking-special"
                        checked={formData.isSpecialOccasion}
                        onChange={e => setFormData(p => ({ ...p, isSpecialOccasion: e.target.checked }))}
                        className="w-4 h-4 accent-cafe-terracotta text-white font-sans border-white/40 focus:ring-0 cursor-pointer rounded"
                      />
                      <span className="font-sans text-xs font-semibold text-cafe-dark-espresso">
                        Celebrate an anniversary or special date? We will sprinkle customized sugar dust on your stack.
                      </span>
                    </label>

                    <div>
                      <label className="block text-xs font-sans font-bold uppercase tracking-wider text-cafe-dark-espresso mb-2">
                        Aesthetic Notes or Special Food Allergies
                      </label>
                      <textarea
                        rows={2}
                        id="booking-notes"
                        value={formData.notes}
                        onChange={e => setFormData(p => ({ ...p, notes: e.target.value }))}
                        placeholder="Gluten-free pancake requirements, sweet messages to write on plates, etc."
                        className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-sm text-cafe-dark-espresso placeholder-cafe-text-muted/50 focus:outline-none focus:border-cafe-terracotta focus:bg-white/80 transition-all font-sans resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Actions */}
                <div className="mt-8 pt-4 border-t border-white/35 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="cursor-pointer font-sans text-xs uppercase tracking-wider font-bold text-cafe-text-muted/70 hover:text-cafe-dark-espresso py-3.5 transition-colors"
                  >
                    Go Back
                  </button>
                  <button
                    type="submit"
                    id="submit-booking-form"
                    className="cursor-pointer bg-cafe-dark-espresso hover:bg-cafe-terracotta text-white px-10 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center space-x-1"
                  >
                    <span>Book My Cloud</span>
                  </button>
                </div>
              </form>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
