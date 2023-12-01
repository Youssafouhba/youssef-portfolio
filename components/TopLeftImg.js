import Image from 'next/image'

const TopLeftImg = () => {
  return <div  className='absolute left-0 top-0 mix-blend-color-dodge  z-10 w-[200px] xl:w- opacity-50'>
    <Image src='/public/top-left-img.png' width={400} height={400} alt=''></Image>
  </div>;
};

export default TopLeftImg;
