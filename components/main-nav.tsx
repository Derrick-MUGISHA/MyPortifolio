"use client"

import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname();
    
    return (
        <header className="flex flex-col z-40 fixed left-1/2 transform -translate-x-1/2 w-[95%] xs:w-[92%] justify-between items-center top-2 xs:top-4 sm:top-6 gap-1 xs:gap-2">
            <div className="flex cursor-pointer items-center justify-between gap-1 xs:gap-2 sm:space-x-4 md:space-x-6 lg:space-x-8 border w-full md:w-fit px-2 xs:px-3 sm:px-4 md:px-6 py-2 xs:py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-slate-50/95 via-gray-50/95 to-zinc-50/95 dark:from-slate-900/95 dark:via-gray-900/95 dark:to-zinc-900/95 backdrop-blur-md border-slate-200/60 dark:border-slate-700/60 rounded-lg xs:rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
               <Link href={'/'} onClick={() => setOpen(false)} className="font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-nowrap bg-gradient-to-r from-slate-800 via-gray-700 to-zinc-800 dark:from-slate-200 dark:via-gray-200 dark:to-zinc-200 bg-clip-text text-transparent tracking-tight xs:tracking-normal sm:tracking-wide">
                    Muhimpundu Anne Marie
                </Link>
                <div className="flex justify-between items-center gap-1 xs:gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                    <nav className="justify-between hidden md:flex gap-2 lg:gap-4 xl:gap-8 text-xs sm:text-sm lg:text-base font-medium">
                        <Link href={'/services'} className={cn(
                            pathname === "/services" 
                                ? "text-slate-700 dark:text-slate-300 border-b-2 border-slate-600 dark:border-slate-400" 
                                : "text-slate-600/80 dark:text-slate-400/80 hover:text-slate-800 dark:hover:text-slate-200", 
                            "hover:border-b-2 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 pb-1 tracking-wider font-semibold"
                        )}>
                            SERVICES
                        </Link>
                        <Link href={'/work'} className={cn(
                            pathname === "/work" 
                                ? "text-slate-700 dark:text-slate-300 border-b-2 border-slate-600 dark:border-slate-400" 
                                : "text-slate-600/80 dark:text-slate-400/80 hover:text-slate-800 dark:hover:text-slate-200", 
                            "hover:border-b-2 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 pb-1 tracking-wider font-semibold"
                        )}>
                            WORK
                        </Link>
                        <Link href={'/about'} className={cn(
                            pathname === "/about" 
                                ? "text-slate-700 dark:text-slate-300 border-b-2 border-slate-600 dark:border-slate-400" 
                                : "text-slate-600/80 dark:text-slate-400/80 hover:text-slate-800 dark:hover:text-slate-200", 
                            "hover:border-b-2 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 pb-1 tracking-wider font-semibold"
                        )}>
                            ABOUT
                        </Link>
                        <Link href={'/blog'} className={cn(
                            pathname === "/blog" 
                                ? "text-slate-700 dark:text-slate-300 border-b-2 border-slate-600 dark:border-slate-400" 
                                : "text-slate-600/80 dark:text-slate-400/80 hover:text-slate-800 dark:hover:text-slate-200", 
                            "hover:border-b-2 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 pb-1 tracking-wider font-semibold"
                        )}>
                            BLOG
                        </Link>
                    </nav>
                    <Link href={'/contact'} className="px-1.5 xs:px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 xs:py-2 sm:py-2.5 bg-gradient-to-r from-slate-800 via-gray-800 to-zinc-800 hover:from-slate-700 hover:via-gray-700 hover:to-zinc-700 dark:from-slate-200 dark:via-gray-200 dark:to-zinc-200 dark:hover:from-slate-100 dark:hover:via-gray-100 dark:hover:to-zinc-100 text-white dark:text-slate-900 text-nowrap text-[10px] xs:text-xs sm:text-sm lg:text-base font-bold rounded-md xs:rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 tracking-tight xs:tracking-normal sm:tracking-wide">
                        <span className="hidden xs:inline">LET&apos;S TALK</span>
                        <span className="xs:hidden">TALK</span>
                    </Link>
                    <button 
                        className="block md:hidden p-1 xs:p-1.5 sm:p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-md xs:rounded-lg transition-all duration-300" 
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <XIcon size={16} className="xs:w-5 xs:h-5" /> : <MenuIcon size={16} className="xs:w-5 xs:h-5" />}
                    </button>
                </div>
            </div>
            <div className={cn(
                open ? "flex animate-in fade-in-80 slide-in-from-top-4 w-full" : "hidden animate-out fade-out-80 slide-out-to-top-4", 
                "items-center justify-between mx-auto border px-4 xs:px-6 sm:px-8 py-6 xs:py-7 sm:py-8 bg-gradient-to-br from-slate-50/95 via-gray-50/95 to-zinc-50/95 dark:from-slate-900/95 dark:via-gray-900/95 dark:to-zinc-900/95 backdrop-blur-md border-slate-200/60 dark:border-slate-700/60 rounded-lg xs:rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50"
            )}>
                <div className="flex flex-col w-full justify-between items-center gap-4 xs:gap-6 sm:gap-8">
                    <nav className="flex flex-col justify-between items-center space-y-3 xs:space-y-4 sm:space-y-6">
                        <Link href={'/services'} onClick={() => setOpen(false)} className={cn(
                            pathname === "/services" 
                                ? "text-slate-700 dark:text-slate-300 border-b-2 border-slate-600 dark:border-slate-400" 
                                : "text-slate-600/80 dark:text-slate-400/80 hover:text-slate-800 dark:hover:text-slate-200", 
                            "hover:border-b-2 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 pb-1 text-base xs:text-lg sm:text-xl font-semibold tracking-wider"
                        )}>
                            SERVICES
                        </Link>
                        <Link href={'/work'} onClick={() => setOpen(false)} className={cn(
                            pathname === "/work" 
                                ? "text-slate-700 dark:text-slate-300 border-b-2 border-slate-600 dark:border-slate-400" 
                                : "text-slate-600/80 dark:text-slate-400/80 hover:text-slate-800 dark:hover:text-slate-200", 
                            "hover:border-b-2 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 pb-1 text-lg font-semibold tracking-wider"
                        )}>
                            WORK
                        </Link>
                        <Link href={'/about'} onClick={() => setOpen(false)} className={cn(
                            pathname === "/about" 
                                ? "text-slate-700 dark:text-slate-300 border-b-2 border-slate-600 dark:border-slate-400" 
                                : "text-slate-600/80 dark:text-slate-400/80 hover:text-slate-800 dark:hover:text-slate-200", 
                            "hover:border-b-2 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 pb-1 text-lg font-semibold tracking-wider"
                        )}>
                            ABOUT
                        </Link>
                        <Link href={'/blog'} onClick={() => setOpen(false)} className={cn(
                            pathname === "/blog" 
                                ? "text-slate-700 dark:text-slate-300 border-b-2 border-slate-600 dark:border-slate-400" 
                                : "text-slate-600/80 dark:text-slate-400/80 hover:text-slate-800 dark:hover:text-slate-200", 
                            "hover:border-b-2 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 pb-1 text-lg font-semibold tracking-wider"
                        )}>
                            BLOG
                        </Link>
                    </nav>
                    <Link href={'/contact'} onClick={() => setOpen(false)} className="px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 bg-gradient-to-r from-slate-800 via-gray-800 to-zinc-800 hover:from-slate-700 hover:via-gray-700 hover:to-zinc-700 dark:from-slate-200 dark:via-gray-200 dark:to-zinc-200 dark:hover:from-slate-100 dark:hover:via-gray-100 dark:hover:to-zinc-100 w-full text-center text-white dark:text-slate-900 text-base xs:text-lg sm:text-xl font-bold rounded-md xs:rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 tracking-wide">
                        LET&apos;S TALK
                    </Link>
                </div>
            </div>
        </header>
    )
}