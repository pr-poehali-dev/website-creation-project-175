const services = [
  {
    number: "01",
    title: "Консультация",
    description:
      "Детальный анализ задач и разработка стратегии под ваш бизнес.",
    price: "от 5 000 ₽",
  },
  {
    number: "02",
    title: "Разработка",
    description:
      "Полный цикл реализации проекта — от идеи до готового результата.",
    price: "от 30 000 ₽",
  },
  {
    number: "03",
    title: "Сопровождение",
    description:
      "Постоянная поддержка и развитие вашего продукта после запуска.",
    price: "от 15 000 ₽/мес",
  },
  {
    number: "04",
    title: "Аудит",
    description:
      "Независимая оценка текущего состояния и рекомендации по улучшению.",
    price: "от 10 000 ₽",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Что мы делаем
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Услуги
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-t border-border">
          {services.map((s) => (
            <div
              key={s.number}
              className="border-b border-r border-border p-8 md:p-10 group hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-muted-foreground font-mono">
                  {s.number}
                </span>
                <span className="text-sm text-muted-foreground">{s.price}</span>
              </div>
              <h3 className="font-display text-2xl font-light mb-3 text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
