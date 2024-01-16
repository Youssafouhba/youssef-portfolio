//links
import Link from 'next/link'

// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLeetcodeLine,
  RiGithubFill,
  RiLinkedinFill,
} from 'react-icons/ri'


const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.linkedin.com/in/ouhba-youssef-9614aa220'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinFill />
    </Link>
    <Link href={'https://github.com/Youssafouhba'} className='hover:text-accent transition-all duration-300'>
      <RiGithubFill />
    </Link>
    <Link href={'https://www.instagram.com/youssef_ouhba/?igshid=MzNlNGNkZWQ4Mg%3D%3D'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.facebook.com/youssef.ouhba/'} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine />
    </Link>
  </div>
  );
};

export default Socials;
