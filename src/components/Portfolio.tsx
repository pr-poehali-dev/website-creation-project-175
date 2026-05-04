const projects = [
  {
    id: 1,
    title: "Проект Alpha",
    category: "Разработка",
    year: "2024",
    bg: "bg-stone-100",
  },
  {
    id: 2,
    title: "Проект Beta",
    category: "Аудит",
    year: "2024",
    bg: "bg-zinc-100",
  },
  {
    id: 3,
    title: "Проект Gamma",
    category: "Сопровождение",
    year: "2023",
    bg: "bg-slate-100",
  },
  {
    id: 4,
    title: "Проект Delta",
    category: "Консультация",
    year: "2023",
    bg: "bg-neutral-200",
  },
  {
    id: 5,
    title: "Проект Epsilon",
    category: "Разработка",
    year: "2023",
    bg: "bg-gray-100",
  },
  {
    id: 6,
    title: "Проект Zeta",
    category: "Аудит",
    year: "2022",
    bg: "bg-stone-200",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Наши работы
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Портфолио
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div
                className={`${p.bg} aspect-[4/3] mb-4 overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  {p.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
