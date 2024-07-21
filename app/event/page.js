import ImageContainer from '../components/ImageContainer.jsx'
import HeroTab from '../components/HeroTab'

export default function events() {
    return (
        <div className='h-[calc(100vh-7rem)]'>
            <HeroTab/>

            <div className='h-screen'>
                <div className='p-10 my-5'>
                    <div className='text-center font-semibold text-3xl md:text-4xl text-[#1C235F]'>Recent Events</div>

                    <div className='mt-16 flex flex-row flex-wrap gap-14 justify-center lg:px-10'>
                        <ImageContainer src={'/image2.png'} />
                        <ImageContainer src={'/image2.png'} />
                        <ImageContainer src={'/image2.png'} />
                        <ImageContainer src={'/image2.png'} />
                        <ImageContainer src={'/image2.png'} />
                    </div>
                </div>
            </div>
        </div>
    )
}