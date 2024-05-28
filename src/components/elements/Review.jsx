import star from '../../assets/svg/icons/star.svg';
import user from '../../assets/svg/icons/user.svg';

export default function Review(props) {
    return (
        <>
            <div className="flex flex-col flex-shrink-0 gap-2">
                <div className="border-[1.5px] border-blue rounded-md flex flex-col w-[250px] md:w-[280px] h-[320px] md:h-[360px] gap-6 relative">
                    <div className="w-[90%] mx-auto pt-5 flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <img src={user} alt="profilbillede ikon" className='w-8' />
                            <p className='font-light md:text-lg'>{props.name}</p>
                        </div>
                        <div className="flex gap-2">
                            <img src={star} alt="stjerne" className="w-4" />
                            <img src={star} alt="stjerne" className="w-4" />
                            <img src={star} alt="stjerne" className="w-4" />
                            <img src={star} alt="stjerne" className="w-4" />
                            <img src={star} alt="stjerne" className="w-4" />
                        </div>
                    </div>
                    <div className="w-[90%] mx-auto flex flex-col gap-2">
                        <h4 className='font-semibold md:text-lg'>{props.headline}</h4>
                        <p className=' font-thin text-sm md:text-base leading-normal'> {props.review}</p>
                    </div>
                </div>
            </div>
        </>
    )
}