import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    UserIcon, 
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtoms";

function Header() {
    const {data: session} = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className= "flex items-center justify-between max-w-5xl mx-5 lg:mx-auto">
                {/* left */}
                <div onClick={() => router.push("/")} className="relative h-10 hidden lg:inline-grid w-24 cursor-pointer">
                    <Image
                      src= "/logo.webp"
                      layout="fill"
                      objectFit="contain"
                    />
                </div>
                <div onClick={() => router.push("/")} className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer ">
                    <Image
                      src= "https://links.papareact.com/jjm"
                      layout="fill"
                      objectFit="contain"
                    />
                </div>
                {/* middle */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md ">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search"/>
                    </div>
                </div>
                {/* right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={() => router.push("/")} className="navBtn"/>
                    <MenuIcon className="h-6 md:hidden cursor-pointer"/>

                    {session ? (
                        <>
                        <div className="relative navBtn">
                          <PaperAirplaneIcon className="navBtn rotate-45" />
                          <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                        </div> 
                        <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
                        <UserGroupIcon className="navBtn" />
                        <HeartIcon className="navBtn" />
                        <img onClick={signOut} className="h-10 rounded-full cursor-pointer" src={session?.user?.image} alt="profile pic" />
                        </>
                    ) : (
                        <UserIcon onClick={signIn} className="h-6 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
                    )}            
                </div>           
            </div>
        </div>
    )
}

export default Header
