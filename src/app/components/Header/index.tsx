import { CiShoppingCart, CiLogout } from "react-icons/ci";
import Link from 'next/link'


export default function Header () {
    return (
        <header className=" flex items-center justify-between bg-zinc-900 h-20">
            <div className="flex ml-8">
                <Link href={'/'}>
                    <CiLogout size={25} color={'#f87171'}/>
                </Link>
            </div>

            <div className="flex gap-4">
                <CiShoppingCart size={32} color={'#06b6d4'}/>
                <h1 className={'font-bold antialiased text-2xl text-sky-400'}>Findshop</h1>
            </div>

            <div className="flex">

            </div>
      </header>
    )
}