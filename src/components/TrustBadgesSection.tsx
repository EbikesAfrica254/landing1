export const TrustBadgesSection = () => {
  const partners = ["Ando Foods", "ArtCaffe", "Goodlife Pharmacy", "Bolt Food", "Pizza Inn", "Chicken Inn"];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4">
        <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
