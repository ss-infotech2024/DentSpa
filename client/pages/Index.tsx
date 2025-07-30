import { Navigation } from "@/components/Navigation";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="flex items-center min-h-[calc(100vh-120px)] px-8">
        {/* Left side - Professional image */}
        <div className="flex-1 flex justify-start">
          <div className="w-96 h-[500px] bg-gradient-to-b from-muted/20 to-muted/5 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Dr. Monik Vasant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Quote and philosophy */}
        <div className="flex-1 pl-16 max-w-2xl">
          <blockquote className="text-foreground text-lg leading-relaxed">
            <p className="mb-6">
              "Dentistry is not just work for me, it is my passion. I practice all
              aspects of dentistry in my clinics but my work is based around the
            </p>
            <p className="mb-6">
              philosophy of minimally invasive aesthetic dentistry. This belief system
            </p>
            <p className="mb-6">
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
