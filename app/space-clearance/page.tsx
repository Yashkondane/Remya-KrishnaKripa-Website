"use client"

import { Libre_Baskerville } from "next/font/google"
import React from "react"
import SimplePreloader from "@/components/simple-preloader"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function SpaceClearancePage() {
  const canvaLink = "https://www.canva.com/design/placeholder" // Placeholder

  return (
    <>
      <SimplePreloader />
      <div className={`min-h-screen beige-bg text-elegant-blue ${libreBaskerville.className}`}>
        
        <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20 text-[18px] leading-relaxed overflow-hidden">
          
          {/* Hero Header Area */}
          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start border-b border-elegant-blue/10 pb-16">
            <div className="lg:w-3/5 space-y-10">
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-elegant-blue">
                  Space Clearance
                  <div className="h-2 w-32 bg-elegant-blue mt-6 rounded-full mx-auto lg:mx-0"></div>
                </h1>
                <div className="text-xl md:text-2xl text-elegant-blue/80 italic space-y-2 font-medium">
                  <p>Sometimes, it’s not you…</p>
                  <p className="font-bold">it’s the energy around you.</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={() => window.open(canvaLink, "_blank")}
                  className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 flex items-center gap-3 text-lg group"
                >
                  Book your Session 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:w-2/5">
               <Image
                  src="/images/image copy 2.png"
                  alt="Space Clearance"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-xl object-cover aspect-[4/5] mx-auto border-4 border-white/40"
                  priority
                />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-32">
            
            {/* Section 1 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                You’ve tried to shift your life...
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="grid gap-2 border-l-4 border-elegant-blue/40 pl-6 py-2">
                  <p>You’ve tried to shift your life.</p>
                  <p>You’ve worked on yourself.</p>
                  <p>But something still feels… stuck.</p>
                </div>

                <div className="py-2">
                  <p className="font-medium text-xl">You feel heavy or restless in your own space</p>
                  <p className="font-medium text-xl">Work doesn’t flow the way it should</p>
                  <p className="font-medium text-xl">You feel drained without a clear reason</p>
                  <p className="font-medium text-xl">There’s tension, conflict, or discomfort at home</p>
                  <p className="font-medium text-xl">Your office or business space feels blocked or slow</p>
                </div>

                <div className="py-8 mt-4 text-center space-y-3">
                  <p className="opacity-80 text-xl">You may not always realise it—</p>
                  <p className="italic font-bold text-2xl md:text-3xl text-elegant-blue mt-4">“but the energy of your space directly affects your life.”</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What this is (for beginners)
              </h2>
              
              <div className="space-y-8 text-lg max-w-2xl mx-auto">
                <p>
                  Space Clearance is the process of clearing and resetting the energy of your home, office, or any physical environment.
                </p>

                <p className="text-xl font-bold">Every space holds:</p>
                <div className="bg-white/40 p-6 rounded-xl shadow-sm text-xl border-l-4 border-accent-gold space-y-2">
                  <p>emotions</p>
                  <p>experiences</p>
                  <p>memories</p>
                  <p>energetic imprints</p>
                </div>

                <p className="text-xl font-bold">Over time, this can create:</p>
                <div className="bg-white/40 p-6 rounded-xl shadow-sm text-xl border-l-4 border-accent-gold space-y-2">
                  <p>heaviness</p>
                  <p>stagnation</p>
                  <p>blocks in flow <span className="italic opacity-80">(especially in career, money, relationships)</span></p>
                </div>

                <div className="bg-elegant-blue text-warm-beige p-8 rounded-2xl shadow-lg mt-8">
                  <p className="italic text-center text-xl leading-relaxed">
                    This work helps release that stored energy and restore balance, lightness, and movement.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                When you may need this
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <p className="text-xl text-center mb-8">You might benefit from space clearance if:</p>

                <div className="space-y-6 text-xl text-elegant-blue/90 border-l-4 border-accent-gold pl-6 py-2">
                  <p>Your home feels heavy, uncomfortable, or draining</p>
                  <p>You experience repeated conflicts or emotional stress in a space</p>
                  <p>Your work or business feels stuck despite effort</p>
                  <p>You feel low, anxious, or distracted in your environment</p>
                  <p>You recently moved into a new house or office</p>
                  <p>You’ve gone through a major life phase (breakup, loss, stress)</p>
                  <p>You feel something is “off” but can’t explain it</p>
                </div>

                <div className="text-center space-y-2 py-10 mt-4 border-b border-elegant-blue/10 pb-16">
                  <p className="text-2xl font-bold">Sometimes, the shift you’re seeking</p>
                  <p className="text-xl italic text-elegant-blue opacity-80 mt-2 font-semibold">requires a shift in your environment—not just within you.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue text-center leading-tight mb-12">
                What happens in a session
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 text-xl text-elegant-blue/90">
                <p className="text-center font-semibold">
                  The space (home/office) is energetically/personally accessed and assessed.
                </p>
                <p className="text-center">
                  Through energy clearing and healing processes, we work to:
                </p>
                
                <div className="bg-white/40 p-8 rounded-2xl shadow-inner my-8">
                  <ul className="space-y-4 font-medium max-w-lg mx-auto">
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>remove stagnant or heavy energy</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>clear emotional and energetic imprints</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>restore balance and harmony in the space</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-elegant-blue mt-2.5 flex-shrink-0"></div>
                        <span>support better flow in areas like work, relationships, and well-being</span>
                      </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-accent-gold pl-6 py-4 mt-8">
                  <p className="font-bold text-elegant-blue text-xl">Each space is different—</p>
                  <p className="text-xl">the process is guided based on what is required.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-8 bg-elegant-blue text-warm-beige p-10 md:p-14 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige text-center leading-tight mb-12">What you may experience after</h2>
              
              <ul className="space-y-6 max-w-lg mx-auto">
                {[
                  "A sense of lightness and calm in the space",
                  "Improved focus, clarity, and productivity",
                  "Better emotional balance at home",
                  "Smoother flow in work or business",
                  "Feeling more comfortable, peaceful, and “at home”"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-5 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 opacity-100" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 text-center mt-8 border-t border-white/10">
                <p className="text-xl opacity-90">Many people say:</p>
                <p className="text-2xl font-bold italic text-accent-gold mt-2">“The space just feels different.”</p>
              </div>
            </section>
          </div>
        </main>
        
        {/* Section 6 Testimonials - Edge to Edge Background */}
        <section className="relative w-full bg-elegant-blue text-warm-beige py-24 shadow-inner">
          <div className="max-w-5xl mx-auto px-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">What clients experience</h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto mt-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-2xl shadow-lg shadow-black/20">
                <div className="space-y-4 text-lg md:text-2xl md:leading-relaxed opacity-90 italic">
                  <p>“We had been feeling unusually stressed at home. Small things were turning into arguments, and there was a constant heaviness.</p>
                  <p>After the space clearance, the shift was very noticeable. The house felt lighter, calmer… and even our interactions changed.</p>
                  <p className="font-semibold border-l-4 border-accent-gold pl-4 md:pl-6 mt-8 md:mt-10">It felt like something that was weighing us down was finally gone.”</p>
                </div>
                <p className="pt-10 font-bold text-right opacity-90 text-accent-gold text-xl">— R., Homeowner</p>
              </div>
          </div>
        </section>

        <main className="max-w-3xl mx-auto px-6 space-y-24 text-[18px] leading-relaxed pb-32 pt-24">
          
          {/* Section 7 Who this is for */}
          <section className="space-y-8 text-center pt-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-blue mb-6 leading-tight">Who this is for</h2>
            <p className="italic text-xl opacity-90 max-w-md mx-auto">This is for you if:</p>

            <ul className="space-y-5 pt-8 text-left max-w-md mx-auto">
              {[
                "You want a more peaceful and supportive home environment",
                "You’re trying to grow your career or business but feel stuck",
                "You are sensitive to energies in spaces",
                "You want your space to support your growth—not drain you"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
        
        {/* Final Call to Action & Investment - Edge to Edge Golden Background */}
        <section className="w-full bg-accent-gold text-elegant-blue py-20 md:py-32 text-center px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* CTA Copy */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl italic opacity-90 font-medium">If your space feels heavy, blocked, or out of sync—</p>
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">and you’re ready to create an environment that supports your growth—</p>
            </div>

            {/* Investment Box */}
            <div className="bg-elegant-blue text-warm-beige p-8 md:p-12 rounded-3xl shadow-xl text-left max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-center text-accent-gold">Investment</h3>
                <p className="text-xl mb-8 text-center max-w-xl mx-auto">
                  Each space carries a different energetic imprint. The investment depends on the size of the space, type (home / office / business), and level of clearing required.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-1">👉</span>
                    <p className="text-xl md:text-2xl">Most clients invest between <span className="font-bold text-accent-gold">₹12,000 – ₹35,000</span> for home spaces</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-1">👉</span>
                    <p className="text-xl md:text-2xl">And <span className="font-bold text-accent-gold">₹25,000 – ₹75,000+</span> for business spaces</p>
                  </div>
                </div>
            </div>

            <div className="pt-8 flex justify-center">
              <button 
                onClick={() => window.open(canvaLink, "_blank")}
                className="bg-elegant-blue hover:bg-elegant-blue/90 text-warm-beige font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl transition-all duration-300 text-xl md:text-2xl w-full sm:w-auto hover:scale-[1.02]"
              >
                Book Your Space Clearance session
              </button>
            </div>
            
          </div>
        </section>
        
      </div>
    </>
  )
}
