

export default function Ingredient (props) {
  return (
    <div className="flex flex-col relative">
        <p className="icon underline font-light text-base lg:text-sm xl:text-base 2xl:text-lg">{props.ingredient}</p>
        <p className="hide font-thin bg-[#fff] border-[1px] border-blue rounded-md drop-shadow-md py-1 px-3 z-20 w-40 leading-normal text-sm lg:text-base ">{props.info}</p>
    </div>
  )
}