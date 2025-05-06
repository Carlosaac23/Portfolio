import Image from 'next/image';

function Avatar() {
  return (
    <a href='https://www.x.com/Carlosaac23'>
      <Image
        src='https://www.github.com/Carlosaac23.png'
        width={50}
        height={50}
        alt='An image of my github profile pic'
        className='w-10 rounded-full hover:cursor-pointer'
      />
    </a>
  );
}

export default Avatar;
