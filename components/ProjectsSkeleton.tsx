export function ProjectsSkeleton() {
  return (
    <div className='grid gap-5 text-sm sm:grid-cols-[1fr_1fr]'>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className='flex max-h-44 flex-col justify-between rounded-md border border-neutral-300 p-2.5 shadow-xs lg:p-3 dark:border-neutral-700 dark:shadow-none'
        >
          <div className='space-y-2'>
            <div className='h-6 w-32 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700' />
            <div className='space-y-1'>
              <div className='h-4 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-700' />
              <div className='h-4 w-3/4 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700' />
            </div>
            <div className='h-4 w-24 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700' />
          </div>
          <div className='mt-2 flex gap-2'>
            <div className='h-6 w-12 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700' />
            <div className='h-6 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700' />
          </div>
        </div>
      ))}
    </div>
  );
}
