'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: 'Regiser', href: '/register' },
    { name: 'Logout', href: '/logout' },
    { name: 'Forgot Password?', href: '/forgot-password' },
];

export default function AuthLayout({children}) {
    const pathName = usePathname();
    console.log(pathName)
    return (
        <section>
            <div>
                {navLinks.map((navLink)=>{
                    const isActive = pathName.startsWith(navLink.href)
                    return  <Link className={`mr-2 text-blue-500 ${isActive ? 'text-red-600' : ''}`} href={navLink.href} key={navLink.name}>go to {navLink.name} page</Link>
                }
                )}
            </div>
        
            {children}
        </section>
    );
}