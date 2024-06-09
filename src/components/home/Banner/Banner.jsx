import sk from '../../../assets/images/sk.png';
import star from '../../../assets/icons/star.png';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {

  return (
    <div className="banner flex items-center dark:bg-slate-950 text-white">
      <div className="w-[95%] max-w-[1500px] mx-auto px-7 py-16 lg:flex justify-between items-center gap-5 lg:gap-10">
        <div className="w-full text-center sm:text-left">
          <div className='text-[30px] sm:text-[30px] md:text-[40px] font-extrabold uppercase md:leading-10 mb-5'>
            <h1>Hi, I'm <span className='text-[#ff3c00]'>Sumon Kaysar</span></h1>
            <h1 className="flex items-center gap-x-2 flex-wrap justify-center sm:justify-start text-[18px] sm:text-[30px] md:text-[40px]">
              <span>A CREATIVE WEB</span>
              <span className='w-5 sm:w-7'><img src={star} alt="" /></span>
              <span>DEVELOPER</span>
            </h1>
            <h1 className='text-[18px] sm:text-[30px] md:text-[40px]'>Transforming Ideas into Reality</h1>
          </div>
          <p className='text-[16px] sm:text-[18px] xl:text-[22px] text-[#888]'>Crafting seamless web experiences as a Full Stack Developer and MERN Specialist, I bring innovative ideas to life with robust and scalable solutions.</p>
          <div className='gap-x-2 flex items-center uppercase mt-4 xl:mt-8 mb-8 text-[18px] sm:text-[24px] font-light justify-center sm:justify-start flex-wrap'>
            <span>Frontend</span>
            <span className='w-5 sm:w-6'><img src={star} alt="" /></span>
            <span>BackEnd</span>
            <span className='w-5 sm:w-6'><img src={star} alt="" /></span>
            <span>FullStack</span>
          </div>
          <div className='flex justify-center sm:justify-start gap-3 mb-10'>
            <a href="https://www.facebook.com/sumon.kaysar.sk" className='border-[#ff3c00] text-[#ff3c00] border-2 inline-block rounded-full p-2 text-lg' target='_blank'>
              <FaFacebookF />
            </a>
            <a href="https://github.com/sumonkaysar" className='border-[#ff3c00] text-[#ff3c00] border-2 inline-block rounded-full p-2 text-lg' target='_blank'>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sumonkaysar" className='border-[#ff3c00] text-[#ff3c00] border-2 inline-block rounded-full p-2 text-lg' target='_blank'>
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/sumon.kaysar.sk" className='border-[#ff3c00] text-[#ff3c00] border-2 inline-block rounded-full p-2 text-lg' target='_blank'>
              <FaInstagram />
            </a>
          </div>
          <div>
            <a href="sk_resume.pdf" className="btn bg-[#ff3c00] text-white rounded-none" download="sk_resume.pdf">My Resume</a>
          </div>
        </div>
        <div className="w-4/5 xl:w-full max-w-sm hidden lg:block">
          <div className="mask mask-circle bg-[#006ac1] dark:bg-[#006ac1] text-center">
            <img className='w-3/5 mx-auto' src={sk} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
