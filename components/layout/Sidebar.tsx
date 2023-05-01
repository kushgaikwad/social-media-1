
import React from 'react'
import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import SidebarItem from './SidebarItem'
import SidebarLogo from './SidebarLogo'
import SidebarTweetButton from './SidebarTweetButton'
import useCurrentUser from '@/hooks/useCurrentUser'
import { signOut } from 'next-auth/react'

type Props = {}

const Sidebar = (props: Props) => {

    const { data : currentUser } = useCurrentUser();

    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: '/user/123',
            icon: FaUser
        },
    ]
    return (
        <div className="h-full col-span-1 pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map((item, index) => (
                        <SidebarItem key={index} label={item.label} href={item.label} icon={item.icon} />
                    ))}
                 <> { currentUser &&  <SidebarItem label='Logout' icon={BiLogOut} OnClick={() => signOut()} />}</>

                    <SidebarTweetButton /> 
                </div>
            </div>
        </div>
    )
}

export default Sidebar