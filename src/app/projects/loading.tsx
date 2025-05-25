export default function Loading() {
  return (
    <section className='flex flex-col gap-10'>
      <div className='grid md:grid-cols-[1fr_1fr] gap-5 text-sm max-sm:justify-center'>
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className='animate-pulse bg-gray-200 dark:bg-[#333333] rounded-md p-4 h-32'></div>
        ))}
      </div>
    </section>
  );
}
