import heroImg from "@/assets/hero-ebike.jpg";

export const FullWidthImageSection = () => {
  return (
    <section className="relative w-full h-[40vh] overflow-hidden">
      <img 
        src={heroImg} 
        alt="Electric bikes showcase"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          A Complete Ecosystem
        </h2>
      </div>
    </section>
  );
};
