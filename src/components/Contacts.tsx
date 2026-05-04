import { useState } from "react";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-32 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase opacity-50 mb-4">
              Напишите нам
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
              Контакты
            </h2>
            <div className="space-y-4 text-sm opacity-70">
              <p>Готовы обсудить ваш проект и ответить на любые вопросы.</p>
              <div className="pt-4 space-y-3">
                <div>
                  <p className="opacity-50 text-xs uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p>hello@studio.ru</p>
                </div>
                <div>
                  <p className="opacity-50 text-xs uppercase tracking-widest mb-1">
                    Телефон
                  </p>
                  <p>+7 (999) 000-00-00</p>
                </div>
                <div>
                  <p className="opacity-50 text-xs uppercase tracking-widest mb-1">
                    Адрес
                  </p>
                  <p>Москва, ул. Примерная, 1</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="h-full flex flex-col justify-center">
                <div className="border border-background/20 p-10 text-center">
                  <div className="font-display text-3xl font-light mb-4">
                    Спасибо!
                  </div>
                  <p className="text-sm opacity-70">
                    Мы получили вашу заявку и свяжемся с вами в ближайшее время.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-widest opacity-50 block mb-2">
                    Имя
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Ваше имя"
                    className="w-full bg-transparent border border-background/20 px-4 py-3 text-sm text-background placeholder:opacity-30 focus:outline-none focus:border-background/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest opacity-50 block mb-2">
                    Телефон
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-transparent border border-background/20 px-4 py-3 text-sm text-background placeholder:opacity-30 focus:outline-none focus:border-background/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest opacity-50 block mb-2">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Опишите ваш проект..."
                    className="w-full bg-transparent border border-background/20 px-4 py-3 text-sm text-background placeholder:opacity-30 focus:outline-none focus:border-background/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-background py-3 text-sm hover:bg-background hover:text-foreground transition-all duration-200"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 text-xs opacity-40">
        <span>© 2024 Studio. Все права защищены.</span>
        <span>Сделано с вниманием к деталям</span>
      </div>
    </section>
  );
};

export default Contacts;
