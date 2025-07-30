import { Navigation } from "@/components/Navigation";

interface PlaceholderPageProps {
  title: string;
  description?: string;
  children?: React.ReactNode; // ✅ Add children prop
}

export function PlaceholderPage({ title, description, children }: PlaceholderPageProps) {
  return (
      <Navigation />

     

        
  
  );
}
