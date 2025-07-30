import { Navigation } from "@/components/Navigation";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="flex items-center justify-center min-h-[calc(100vh-120px)] px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-light text-gold mb-6">{title}</h1>
          <p className="text-foreground/80 text-lg leading-relaxed mb-8">
            {description ||
              "This page is currently under development. Please continue exploring our website or contact us for more information."}
          </p>
          <div className="text-muted-foreground">
            Feel free to continue prompting to fill in this page's content.
          </div>
        </div>
      </main>
    </div>
  );
}
