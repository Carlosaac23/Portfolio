import Image from 'next/image';

export default function Avatar() {
  return (
    <a href='https://www.x.com/Carlosaac23' target='_blank'>
      <Image
        src='https://www.github.com/Carlosaac23.png'
        width={50}
        height={50}
        alt='An image of my github profile pic'
        className='w-10 rounded-full hover:cursor-pointer hover:opacity-80 transition-opacity duration-200 ease-in-out'
      />
    </a>
  );
}
