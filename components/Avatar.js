// next img
import Image from "next/image";
import avatar from "../public/bg-explosion.png"

const Avatar = () => {
  return (
  <div className='hidden xl:flex xl:max-w-none'>
    <Image 
    src={avatar}
    width={737}
    height={678}
    alt=''
    className='translate-z-0 w-full h-full'
    />
  </div>);
};

export default Avatar;
