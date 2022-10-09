import Image from 'next/image';

function sidebarRow({src, Icon, title}) {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
        {src && (
            <Image 
                className='rounded-full cursor-pointer'
                src={src}
                width={30}
                height={30}
                layout='fixed'
            />
        )}
        {Icon && (
            <Icon className='w-6 h-6 text-blue-500' />
        )}
        <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default sidebarRow
