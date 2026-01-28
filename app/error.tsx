'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4 bg-neutral-50 p-6 dark:bg-neutral-900'>
      <div className='rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950'>
        <h1 className='text-2xl font-bold text-red-900 dark:text-red-100'>
          Something went wrong
        </h1>
        <p className='mt-2 text-sm text-red-700 dark:text-red-200'>
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => reset()}
          className='mt-4 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800'
        >
          Try again
        </button>
      </div>
    </div>
  );
}
