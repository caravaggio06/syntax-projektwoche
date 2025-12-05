type HighlightVideoProps = {
  videoId: string;
  title: string;
};

export function HighlightVideo({ videoId, title }: HighlightVideoProps) {
  return (
    <section className="mt-6 rounded-2xl bg-slate-900/70 border border-slate-800 p-4">
      <header className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">
            Matchday Highlight
          </h3>
          <p className="text-xs text-slate-400">
            Kurzer Einblick in Stimmung, Tore und Moments of the Match.
          </p>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
          Video
        </span>
      </header>

      <div className="mt-3 overflow-hidden rounded-xl border border-slate-800/80">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
