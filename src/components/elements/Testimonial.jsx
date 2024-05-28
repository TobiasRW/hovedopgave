import star from '../../assets/svg/icons/trustpilot-star.svg'
import qUp from '../../assets/svg/icons/quoteUp.svg'
import qDown from '../../assets/svg/icons/quoteDown.svg'

export default function Testimonial(props) {
    return (
        <div className="flex flex-col flex-shrink-0 gap-2">
            <div className="border-[1.5px] border-blue rounded-2xl flex flex-col items-center w-[250px] sm:w-[300px] h-[380px] md:h-[415px] gap-6 relative">
                <div className="flex gap-2 pt-5 md:pt-7 justify-center">
                    <img src={star} alt="stjerne" className="w-7 md:w-8" />
                    <img src={star} alt="stjerne" className="w-7 md:w-8" />
                    <img src={star} alt="stjerne" className="w-7 md:w-8" />
                    <img src={star} alt="stjerne" className="w-7 md:w-8" />
                    <img src={star} alt="stjerne" className="w-7 md:w-8" />
                </div>
                <h4 className='text-2xl font-bold md:text-3xl'>{props.name}</h4>
                <div className="relative">
                    <img src={qUp} alt="" className='w-5 absolute left-4 -top-6' />
                    <p className='text-center w-3/4 font-thin text-sm md:text-base mx-auto'> {props.testimonial}</p>
                    <img src={qDown} alt="" className='w-5 absolute right-4 -bottom-6' />
                </div>
                <p className='font-thin italic text-xs md:text-sm absolute bottom-5'>-5 stjerner på <a href='#' className='underline text-blue'>Truspilot</a></p>
            </div>
        </div>
    )
}