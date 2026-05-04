const Hero = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-background pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Профессиональные услуги
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-none mb-8 text-foreground">
            Мы создаём
            <br />
            <em>результат</em>
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-md mb-10">
            Помогаем бизнесу расти. Качественно, в срок, без лишних слов.
            Работаем с проектами любого масштаба.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("#services")}
              className="bg-foreground text-background px-8 py-3 text-sm hover:opacity-80 transition-opacity"
            >
              Наши услуги
            </button>
            <button
              onClick={() => scrollTo("#calculator")}
              className="border border-foreground text-foreground px-8 py-3 text-sm hover:bg-foreground hover:text-background transition-all duration-200"
            >
              Рассчитать стоимость
            </button>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="aspect-square bg-muted" />
          <div className="absolute -bottom-6 -left-6 w-1/2 aspect-square border border-border" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
