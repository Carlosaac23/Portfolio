export default function Loading() {
  return (
    <section className='flex flex-col gap-10 px-2'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-sm'>
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className='animate-pulse bg-gray-200 dark:bg-[#333333] rounded-md p-4 h-24 sm:h-32 w-full'></div>
        ))}
      </div>
    </section>
  );
}
