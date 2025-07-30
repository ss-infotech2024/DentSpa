import { Navigation } from "@/components/Navigation";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-200px)] lg:min-h-[calc(100vh-120px)] px-4 md:px-8 py-8 lg:py-0">
        {/* Left side - Professional image */}
        <div className="flex-1 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <div className="w-80 h-96 lg:w-96 lg:h-[500px] bg-gradient-to-b from-muted/20 to-muted/5 rounded-lg overflow-hidden relative">
            {/* Professional portrait placeholder with sophisticated styling */}
            <div className="w-full h-full bg-gradient-to-br from-gold/10 via-background to-muted/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <p className="text-gold/60 text-sm">Professional Portrait</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Quote and philosophy */}
        <div className="flex-1 lg:pl-16 max-w-2xl">
          <blockquote className="text-foreground text-base md:text-lg leading-relaxed text-center lg:text-left">
            <p className="mb-4 md:mb-6">
              "Dentistry is not just work for me, it is my passion. I practice all
              aspects of dentistry in my clinics but my work is based around the
            </p>
            <p className="mb-4 md:mb-6">
              philosophy of minimally invasive aesthetic dentistry. This belief system
            </p>
            <p className="mb-4 md:mb-6">
              means that we recognise the importance of having a beautiful natural
            </p>
            <p>
              smile but preserving the health of the tooth comes first."
            </p>
          </blockquote>
        </div>
      </main>
    </div>
  );
}
