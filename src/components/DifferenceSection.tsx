import techImg from "@/assets/value-tech.jpg";

export const DifferenceSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-center px-4">
            More Than Bikes. A Complete Electric Ecosystem.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-center px-4 mb-8">
            Ebikes Africa isn't just selling electric bikes—we're building the complete infrastructure 
            for Africa's electric future.
          </p>
          
          <div className="mb-12">
            <img 
              src={techImg} 
              alt="AI Technology"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Tech</div>
              <p className="text-sm text-muted-foreground">
                AI-powered logistics and fleet management systems
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Access</div>
              <p className="text-sm text-muted-foreground">
                0% interest financing and lease-to-own pathways
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Network</div>
              <p className="text-sm text-muted-foreground">
                Vetted riders, trained technicians, and partner ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
