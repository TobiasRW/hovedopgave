
export default function BlogPost(props) {
    return (
        <div className="w-[300px] xs:w-[330px] xsm:w-[380px] md:w-full mx-auto flex flex-col gap-3">
            <div className="relative">
                <img src={props.thumb} alt="Thumbnail" className="rounded-sm"/>
                <p className="absolute top-[4%] left-[4%] text-red bg-pink px-2 md:py-1 border-red border rounded font-light text-sm">{props.tag}</p>
            </div>
            <div className=" flex flex-col gap-2">
                <h2 className=" font-semibold sm:text-lg">{props.headline}</h2>
                <p className="font-thin text-sm leading-normal">{props.text}.</p>
            </div>
            <hr className="border-none bg-blue h-[1px] mt-3 md:hidden" />
        </div>
    )
}