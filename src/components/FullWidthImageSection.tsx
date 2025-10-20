import heroImg from "@/assets/hero-ebike.jpg";

export const FullWidthImageSection = () => {
  return (
    <section className="relative w-full h-[40vh] overflow-hidden">
      <img 
        src={heroImg} 
        alt="Electric bikes showcase"
        className="w-full h-full object-cover"
      />
    </section>
  );
};
