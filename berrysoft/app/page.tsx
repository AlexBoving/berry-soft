import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <main className="w-screen h-screen px-36 py-28">
      <div className="flex flex-row w-full h-full">
        <div className="w-full md:w-4/6 flex-shrink-0 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="uppercase tracking-[0.35em] text-gray-600 font-light text-lg">Turning ideas into digital solutions</h2>
            <h1 className="text-7xl tracking-tight font-extralight text-primary w-full">
              Delivering software <br />& AI solutions
            </h1>
          </div>
          <h3 className="text-gray-600 font-light text-xl">
            Have an idea but not sure how to make it happen? We are here
            <br />
            to bring your project to life. Leave your details—We will call you
            <br /> within 24 hours.
          </h3>
          <Button className="w-48 h-16">
            <span className="uppercase tracking-[0.35em] text-white font-light text-sm">contact us</span>
          </Button>
        </div>
        <div className="w-2/6 flex-shrink-0 flex flex-col justify-between">
          <h2 className="text-2xl font-light tracking-wide">Typical Services</h2>
          <hr className="border-zinc-200" />
          <Services
            title="Web and Mobile App Creation"
            description="Elegant, responsive applications built with modern frameworks and minimalist design principles."
          />
          <hr className="border-zinc-200" />
          <Services
            title="AI Implementation"
            description="Agentic AI, RAG, fine-tuning and NLP based solutions tailored to enhance your business capabilities."
          />
          <hr className="border-zinc-200" />
          <Services title="MVP Creation" description="Rapid development of minimum viable products to validate your ideas and accelerate market entry." />
        </div>
      </div>
    </main>
  );
}

interface ServicesProps {
  title: string;
  description: string;
}

function Services({ title, description }: ServicesProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-light">{title}</h2>
      <p className="font-light text-gray-600">{description}</p>
    </div>
  );
}
