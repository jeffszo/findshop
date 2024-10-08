

import InputEmail from '@/app/components/InputEmail'
import InputPassword from '@/app/components/InputPassword'

import Link from 'next/link'

export default function Login () {
    return (
        
        <div className={'flex flex-col items-center justify-center min-h-screen'}>

        <h1 className={'font-bold antialiased mt-8 text-center text-3xl text-sky-400 '}>Findshop</h1>

            <form className={'flex flex-col gap-1 mt-8'}>
                <div className={'flex flex-col gap-2 mb-8'}>
                    <label className={'text-slate-100 '}>Email:</label>
                    <InputEmail/>
                </div>

                <div className={'flex flex-col gap-2 mb-2'}>
                    <label className={'text-slate-100 '}>Password:</label>
                    <InputPassword/>
                </div>

                <p className={'text-center text-gray-100 text-sm mt-4'}>Não tem uma conta? 
                    <Link href={'/register'} className={'text-sky-400 cursor-pointer'}> {''} Clique aqui</Link>
                </p>

                <div className={'flex justify-center mt-6'}>
                    <button type={'submit'} className={'rounded p-2 w-24 bg-sky-400 text-center cursor-pointer'}>Acessar</button>
                </div>
            </form>
        </div>
        
    

    )
}