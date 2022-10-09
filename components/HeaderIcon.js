function HeaderIcon({Icon, active}) {
  return (
    <div className='flex items-center cursor-pointer 
      rounded-xl md:px-10 sm:h-14 md:hover:bg-gray-100
      active:border-b-2 active:border-blue-500 group
    '>
      <Icon className={`h-5 w-5 text-gray-500 group-hover:text-blue-500 text-center sm:h-7 sm:w-7 mx-auto ${active && "text-blue-500"}`} />
    </div>
  )
}

export default HeaderIcon
