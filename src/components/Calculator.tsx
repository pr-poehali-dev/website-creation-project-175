import { useState } from "react";

const serviceTypes = [
  { id: "consult", label: "Консультация", base: 5000 },
  { id: "develop", label: "Разработка", base: 30000 },
  { id: "support", label: "Сопровождение", base: 15000 },
  { id: "audit", label: "Аудит", base: 10000 },
];

const scales = [
  { id: "small", label: "Малый", multiplier: 1 },
  { id: "medium", label: "Средний", multiplier: 1.8 },
  { id: "large", label: "Крупный", multiplier: 3 },
];

const urgencies = [
  { id: "normal", label: "Стандартные сроки", multiplier: 1 },
  { id: "fast", label: "Ускоренно", multiplier: 1.4 },
  { id: "asap", label: "Срочно", multiplier: 2 },
];

const Calculator = () => {
  const [service, setService] = useState(serviceTypes[0].id);
  const [scale, setScale] = useState(scales[0].id);
  const [urgency, setUrgency] = useState(urgencies[0].id);

  const selectedService = serviceTypes.find((s) => s.id === service)!;
  const selectedScale = scales.find((s) => s.id === scale)!;
  const selectedUrgency = urgencies.find((u) => u.id === urgency)!;

  const total = Math.round(
    selectedService.base * selectedScale.multiplier * selectedUrgency.multiplier
  );

  const formatPrice = (n: number) =>
    n.toLocaleString("ru-RU") + " ₽";

  const scrollToContacts = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="calculator" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Прозрачные цены
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Расчёт стоимости
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Услуга
              </p>
              <div className="grid grid-cols-2 gap-2">
                {serviceTypes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`py-3 px-4 text-sm text-left border transition-all duration-150 ${
                      service === s.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Масштаб проекта
              </p>
              <div className="grid grid-cols-3 gap-2">
                {scales.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScale(s.id)}
                    className={`py-3 px-4 text-sm border transition-all duration-150 ${
                      scale === s.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Срочность
              </p>
              <div className="grid grid-cols-1 gap-2">
                {urgencies.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setUrgency(u.id)}
                    className={`py-3 px-4 text-sm text-left border transition-all duration-150 flex justify-between items-center ${
                      urgency === u.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    <span>{u.label}</span>
                    {u.multiplier > 1 && (
                      <span className="text-xs opacity-60">
                        ×{u.multiplier}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="border border-border p-10">
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Итоговая стоимость
              </p>
              <div className="font-display text-5xl font-light text-foreground my-6">
                {formatPrice(total)}
              </div>

              <div className="space-y-2 mb-8 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Услуга</span>
                  <span>{selectedService.label}</span>
                </div>
                <div className="flex justify-between">
                  <span>Масштаб</span>
                  <span>{selectedScale.label}</span>
                </div>
                <div className="flex justify-between">
                  <span>Срочность</span>
                  <span>{selectedUrgency.label}</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                Точная стоимость определяется после детального обсуждения
                проекта. Расчёт является ориентировочным.
              </p>

              <button
                onClick={scrollToContacts}
                className="w-full bg-foreground text-background py-3 text-sm hover:opacity-80 transition-opacity"
              >
                Обсудить проект
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
