import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'

interface SidebarItemProps {
    label: string,
    href?: string,
    icon: IconType,
    OnClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, href, icon: Icon, OnClick }) => {

    const router = useRouter();
    const handleClick = useCallback(
        () => {
          if(OnClick){
              return OnClick();  
          }
           if(href)
          router.push(href);
        },
        [router, OnClick, href],
      )

    return (
        <div onClick={handleClick} className='flex flex-row items-center'>
            <div className="relative flex items-center justify-center p-4 rounded-full cursor-pointer h-14 w-14 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden">
                <Icon size={28} color="white" />
            </div>
            <div className="relative items-center hidden gap-4 p-4 rounded-full cursor-pointer lg:flex items-row hover:bg-slate-300 hover:bg-opacity-10">
            <Icon size={24} color="white" /> 
            <p className="hidden text-xl text-white lg:block">{label}</p>
            </div>
        </div>
    )
}

export default SidebarItem