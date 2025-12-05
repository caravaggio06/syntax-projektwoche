export function MediaStrip() {
  const items = [
    {
      src: "/images/hero-stadium.jpg",
      alt: "FC React United Heimspiel in der React Arena",
      label: "React Arena",
      text: "Heimspiele unter Flutlicht – volle Kurven, volle Emotionen."
    },
    {
      src: "/images/fans-celebrating.jpg",
      alt: "Fans von FC React United beim Jubeln",
      label: "Unsere Fans",
      text: "Südtribüne, Gesänge, Choreos – der zwölfte Mann im Rücken."
    },
    {
      src: "/images/team-huddle.jpg",
      alt: "Teamkreis von FC React United",
      label: "Das Team",
      text: "Fokus vor dem Anpfiff – gemeinsam für drei Punkte."
    }
  ];

  return (
    <section className="mt-8 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.label}
          className="flex flex-col overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-800"
        >
          <div className="h-32 w-full overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
              {item.label}
            </div>
            <p className="mt-1 text-sm text-slate-200">{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
