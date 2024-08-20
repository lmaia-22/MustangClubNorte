import { DATA } from "@/data/resume";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from 'next/image'

export default function footer(){
    return(
        <footer>
            <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
                <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
                    <div className="mb-12 flex-col flex gap-4">
                        <a className="flex items-center gap-2" href="/">
                        <Image
                            src="/logo_no_bk.png"
                            width={100}
                            height={100}
                            className="h-8 w-8 text-primary"
                            alt="Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mustang Clube do Norte</span>
                        </a>
                        <p className="max-w-xs">Um clube para todos os apaixonados pelo modelo iconico Ford Mustang.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">Website</h2>
                            <ul className="gap-2 grid">
                                <li key="sobre">
                                    <a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/">Sobre</a>
                                </li>
                                <li key="eventos">
                                    <a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/pricing">Eventos</a>
                                </li>
                                <li key="faq">
                                    <a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/faq">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">Comunidade</h2>
                            <ul className="gap-2 grid">
                                <li key="instagram">
                                    <a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" target="_blank" href="https://www.instagram.com/mustangclubedonorte?igsh=MTRxcXE3aHEwcnlxdQ==">Instagram</a>
                                </li>
                                <li key="tiktok">
                                    <a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" target="_blank" href="https://www.tiktok.com/@mustangclubedonorte">Tiktok</a>
                                </li>
                                <li key="email">
                                    <a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" target="_blank" href="mailto:mustangclubedonorte@gamil.com">Email</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="gap-2 grid">
                                <li key="termos">
                                    <a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/terms">Termos</a>
                                </li>
                                <li key="privacidade">
                                    <a className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm" href="/privacy">Privacidade</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
                    <div className="flex space-x-5 sm:justify-center sm:mt-0">
                    {Object.entries(DATA.contact.social)
                        .filter(([_, social]) => social.navbar)
                        .map(([name, social]) => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "size-12"
                                    )}
                                >
                                    <social.icon className="size-4" />
                                </Link>
                            ))}
                    </div>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2024 
                    <a className="cursor-pointer" href="/"> Mustang Clube do Norte</a>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}