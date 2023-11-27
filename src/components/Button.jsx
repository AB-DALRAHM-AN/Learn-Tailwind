export const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none text-white border-coral-red bg-coral-red rounded-full">
      {label}
      <div>
      {iconURL && <img src={iconURL} alt="arrow" />}
      </div>
    </button>
  )
}
