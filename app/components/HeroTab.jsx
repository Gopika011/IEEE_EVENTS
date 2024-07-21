import Image from 'next/image'

const HeroTab = () => {
  return (
    <div className='h-full relative content-center flex justify-center items-center'>
        <Image src='/backg.png' fill={true} className='object-cover' priority={true} alt='Background Image' sizes="100vw"/>
        <div className="absolute flex flex-col gap-8 lg:gap-10 items-center justify-center z-10 font-semibold 
        sm:w-2/3 lg:w-1/2 h-full px-2 xl:p-14">
            <div className='text-white text-2xl lg:text-3xl xl:text-[44px]'>Welcome to IEEE SB MITS!</div>
            <div className='text-white lg:text-xl xl:text-2xl text-center px-7 md:px-10 xl:px-12'>Platform for the young minds to explore and experiment technological advancements with professional competencies following ethical standards</div>
            <div className='text-white flex gap-4 md:gap-10 text-base font-normal'>
                <div className='bg-[#1E3A8A] text-white rounded-full w-28 lg:w-36 text-center py-2'>Login</div>
                <div className='bg-[#1E3A8A] text-white rounded-full w-28 lg:w-36 text-center py-2'>Subscribe</div>
            </div>
        </div>
    </div>
  )
}

export default HeroTab