export default function Loading() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <div className="h-10 w-32 bg-amber/20 animate-pulse rounded-md"></div>
      </div>

      <article className="max-w-4xl mx-auto">
        <div className="h-6 w-24 bg-amber/20 animate-pulse rounded-md mb-4"></div>
        <div className="h-12 w-full bg-amber/20 animate-pulse rounded-md mb-4"></div>

        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-12 bg-amber/20 animate-pulse rounded-full"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-amber/20 animate-pulse rounded-md"></div>
            <div className="h-3 w-48 bg-amber/20 animate-pulse rounded-md"></div>
          </div>
        </div>

        <div className="h-[400px] w-full bg-amber/20 animate-pulse rounded-xl mb-8"></div>

        <div className="space-y-4 mb-8">
          <div className="h-8 w-48 bg-amber/20 animate-pulse rounded-md"></div>
          <div className="h-4 w-full bg-amber/20 animate-pulse rounded-md"></div>
          <div className="h-4 w-full bg-amber/20 animate-pulse rounded-md"></div>
          <div className="h-4 w-3/4 bg-amber/20 animate-pulse rounded-md"></div>
        </div>

        <div className="space-y-6">
          <div className="h-6 w-64 bg-amber/20 animate-pulse rounded-md"></div>
          <div className="h-4 w-full bg-amber/20 animate-pulse rounded-md"></div>
          <div className="h-4 w-full bg-amber/20 animate-pulse rounded-md"></div>
          <div className="h-4 w-5/6 bg-amber/20 animate-pulse rounded-md"></div>
          <div className="h-4 w-full bg-amber/20 animate-pulse rounded-md"></div>
        </div>
      </article>
    </div>
  )
}
