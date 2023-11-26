export const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none text-white border-coral-red bg-coral-red rounded-full">
      {label}
      <img src={iconURL} alt="" className="rounded-full w-5 h-5 ml-5"/>
    </button>
  )
}
