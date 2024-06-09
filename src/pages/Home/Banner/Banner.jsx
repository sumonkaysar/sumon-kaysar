import sk from '../../../assets/images/sk.png';

const Banner = () => {
  
  return (
    <div className="flex items-center bg-gradient-to-r from-[#3d096e] to-[#b8555a] dark:from-[#1a0032] dark:to-[#602326] text-white h-[600px] sm:h-[500px] xl:h-[600px]">
      <div className="w-[95%] max-w-[1500px] mx-auto px-7 py-16 flex flex-col-reverse sm:flex-row justify-between items-center gap-5 lg:gap-10">
        <div className="w-full text-center sm:text-left">
          <div className='text-[1.75rem] md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-0 sm:mb-2 md:mb-4 lg:mb-6'>
            <h1 className="-mb-2 sm:mb-1 md:mb-3 lg:mb-4">Hi,</h1>
            <h1 className="-mb-2 sm:mb-1 md:mb-3 lg:mb-4">I'm <span className='text-[#ff6060]'>Sumon Kaysar</span></h1>
            <h1>Web Developer</h1>
          </div>
          <a href="sk_resume.pdf" className="btn btn-primary text-white" download="sk_resume.pdf">My Resume</a>
        </div>
        <div className="w-full max-w-sm">
          <div className="mask mask-circle bg-[#4071f4] dark:bg-blue-900 text-center">
            <img className='w-2/3 sm:w-3/5 xl:w-4/5 mx-auto' src={sk} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
