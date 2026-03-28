export default function Loading() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="space-y-10">
        <div className="space-y-4">
          <div className="h-4 w-24 animate-pulse rounded-full bg-border/70" />
          <div className="h-12 w-full max-w-2xl animate-pulse rounded-2xl bg-border/60" />
          <div className="h-6 w-full max-w-3xl animate-pulse rounded-2xl bg-border/50" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="surface-panel h-64 animate-pulse bg-card/60" />
          <div className="surface-panel h-64 animate-pulse bg-card/60" />
        </div>
      </div>
    </div>
  );
}
