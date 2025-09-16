// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import type { LocaleContent } from "@/lib/content"

// interface PromotionSectionProps {
//   content: LocaleContent["promotion"]
// }

// export function PromotionSection({ content }: PromotionSectionProps) {
//   return (
//     <section
//       id="promotion"
//       className="relative py-16 px-4 bg-gradient-to-b from-black via-black to-[#003f15]"
//     >
//       <div className="container mx-auto max-w-4xl">
//         <Card className="bg-transparent shadow-none border-0">
//           <CardContent className="p-0">
//             <div className="flex flex-col lg:flex-row">
//               {/* Content */}
//               <div className="flex-1 p-8 lg:p-12">
//                 <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
//                   {content.title}
//                 </h2>
//                 <h3 className="text-xl md:text-2xl text-secondary mb-6 text-balance">
//                   {content.subtitle}
//                 </h3>
//                 <p className="text-muted-foreground mb-6 text-pretty">
//                   {content.description}
//                 </p>

//                 {/* Ticket-style promo */}
//                 <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-lg mb-6 text-center">
//                   <div className="bg-black rounded p-4">
//                     <div className="text-sm text-muted-foreground mb-2">
//                       FREE SPIN BONUS
//                     </div>
//                     <div className="text-lg font-bold text-primary">HOLY1WIN</div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       EXCLUSIVE FOR NEW PLAYERS
//                     </div>
//                   </div>
//                 </div>

//                 <Button
//                   size="lg"
//                   className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold w-full sm:w-auto animate-glow"
//                   asChild
//                 >
//                   <Link href="/app">{content.button}</Link>
//                 </Button>
//               </div>

//               {/* -------- Desktop (от md) -------- */}
//               <div className="relative flex-1 min-h-[500px] overflow-visible hidden md:block">
//                 {/* Центр: Snoop */}
//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   poster="/snoopsmoke.webp"
//                   className="absolute left-1/2 -translate-x-1/2 bottom-[-50px] 
//                              h-[650px] md:h-[500px] lg:h-[650px] w-auto 
//                              z-30 pointer-events-none"
//                 >
//                   <source src="/snoopsmoke.webm" type="video/webm" />
//                   <source src="/snoopsmoke.mp4" type="video/mp4" />
//                 </video>

//                 {/* Левая девчонка */}
//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   poster="/girl1.webp"
//                   className="absolute bottom-0 left-[-0%] md:left-[-30%] 
//                              h-[380px] md:h-[460px] lg:h-[520px] w-auto 
//                              z-20 pointer-events-none"
//                 >
//                   <source src="/girl1.webm" type="video/webm" />
//                   <source src="/girl1.mp4" type="video/mp4" />
//                 </video>

//                 {/* Правая девчонка */}
//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   poster="/girl2.webp"
//                   className="absolute bottom-0 right-[-5%] md:right-[-25%] 
//                              h-[380px] md:h-[460px] lg:h-[520px] w-auto 
//                              z-20 pointer-events-none"
//                 >
//                   <source src="/girl2.webm" type="video/webm" />
//                   <source src="/girl2.mp4" type="video/mp4" />
//                 </video>
//               </div>

//               {/* --- зелёный дым (desktop only) --- */}
//               <div className="pointer-events-none absolute inset-x-0 bottom-[-450px] z-10 hidden md:block">
//                 <img
//                   src="/smokegreen.webp"
//                   alt="Green Smoke"
//                   className="block mx-auto w-full max-w-screen-3xl h-auto select-none opacity-90"
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>

//               {/* -------- Mobile (до md) -------- */}
//               <div className="relative flex-1 min-h-[400px] overflow-visible md:hidden">
//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   poster="/snoopsmoke.webp"
//                   className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] 
//                              h-[450px] w-auto z-30 pointer-events-none"
//                 >
//                   <source src="/snoopsmoke.webm" type="video/webm" />
//                   <source src="/snoopsmoke.mp4" type="video/mp4" />
//                 </video>

//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   poster="/girl1.webp"
//                   className="absolute left-[-30px] bottom-[-70px] 
//                              h-[300px] w-auto z-20 pointer-events-none"
//                 >
//                   <source src="/girl1.webm" type="video/webm" />
//                   <source src="/girl1.mp4" type="video/mp4" />
//                 </video>

//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   poster="/girl2.webp"
//                   className="absolute right-[-30px] bottom-[-70px] 
//                              h-[300px] w-auto z-20 pointer-events-none"
//                 >
//                   <source src="/girl2.webm" type="video/webm" />
//                   <source src="/girl2.mp4" type="video/mp4" />
//                 </video>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   )
// }






import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { LocaleContent } from "@/lib/content"

interface PromotionSectionProps {
  content: LocaleContent["promotion"]
}

export function PromotionSection({ content }: PromotionSectionProps) {
  return (
    <section
      id="promotion"
      className="relative py-16 px-4 bg-gradient-to-b from-black via-black to-[#003f15]"
    >
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-transparent shadow-none border-0">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Content */}
              <div className="flex-1 p-8 lg:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
                  {content.title}
                </h2>
                <h3 className="text-xl md:text-2xl text-secondary mb-6 text-balance">
                  {content.subtitle}
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty">
                  {content.description}
                </p>

                {/* Ticket-style promo */}
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-lg mb-6 text-center">
                  <div className="bg-black rounded p-4">
                    <div className="text-sm text-muted-foreground mb-2">
                      FREE SPIN BONUS
                    </div>
                    <div className="text-lg font-bold text-primary">HOLY1WIN</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      EXCLUSIVE FOR NEW PLAYERS
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold w-full sm:w-auto animate-glow"
                  asChild
                >
                  <Link href="/app">{content.button}</Link>
                </Button>
              </div>

              {/* -------- Desktop (от md) -------- */}
              <div className="relative flex-1 min-h-[500px] overflow-visible hidden md:block">
                {/* Центр: Snoop */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/snoopsmoke.webp"
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-50px] 
                             h-[650px] md:h-[500px] lg:h-[650px] w-auto 
                             z-30 pointer-events-none"
                >
                  <source src="/snoopsmoke.webm" type="video/webm" />
                  <source src="/snoopsmoke.mp4" type="video/mp4" />
                </video>

                {/* Левая девчонка */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/girl1.webp"
                  className="absolute bottom-0 left-[-0%] md:left-[-30%] 
                             h-[380px] md:h-[460px] lg:h-[520px] w-auto 
                             z-20 pointer-events-none"
                >
                  <source src="/girl1.webm" type="video/webm" />
                  <source src="/girl1.mp4" type="video/mp4" />
                </video>

                {/* Правая девчонка */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/girl2.webp"
                  className="absolute bottom-0 right-[-5%] md:right-[-25%] 
                             h-[380px] md:h-[460px] lg:h-[520px] w-auto 
                             z-20 pointer-events-none"
                >
                  <source src="/girl2.webm" type="video/webm" />
                  <source src="/girl2.mp4" type="video/mp4" />
                </video>
              </div>

              {/* --- зелёный дым (desktop only) --- */}
              <div className="pointer-events-none absolute inset-x-0 bottom-[-450px] z-10 hidden md:block">
                <Image
                  
                  src="/smokegreen.webp"
                  alt="Green Smoke"
                  width={1920}
                  height={800}
                  priority={false}
                  loading="lazy"
                  className="block mx-auto w-full max-w-screen-3xl h-auto select-none opacity-90"
                />
              </div>

              {/* -------- Mobile (до md) -------- */}
              <div className="relative flex-1 min-h-[400px] overflow-visible md:hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/snoopsmoke.webp"
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] 
                             h-[450px] w-auto z-30 pointer-events-none"
                >
                  <source src="/snoopsmoke.webm" type="video/webm" />
                  <source src="/snoopsmoke.mp4" type="video/mp4" />
                </video>

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/girl1.webp"
                  className="absolute left-[-30px] bottom-[-70px] 
                             h-[300px] w-auto z-20 pointer-events-none"
                >
                  <source src="/girl1.webm" type="video/webm" />
                  <source src="/girl1.mp4" type="video/mp4" />
                </video>

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/girl2.webp"
                  className="absolute right-[-30px] bottom-[-70px] 
                             h-[300px] w-auto z-20 pointer-events-none"
                >
                  <source src="/girl2.webm" type="video/webm" />
                  <source src="/girl2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
