
import InputEmail from '@/app/components/InputEmail'
import InputPassword from '@/app/components/InputPassword'
import InputName from '@/app/components/InputName'





export default function Register(){
    return (
        <div className={'flex flex-col items-center justify-center min-h-screen'}>
            <h1 className={'font-bold antialiased mt-8 text-center text-3xl text-sky-400 '}>Registre-se</h1>
            <form className={'flex flex-col gap-1 mt-10'}>

            <div className={'flex flex-col gap-2 mb-8'}>
                    <label className={'text-slate-100 '}>Nome:</label>
                    <InputName/>
                </div>

                <div className={'flex flex-col gap-2 mb-8'}>
                    <label className={'text-slate-100 '}>Email:</label>
                    <InputEmail/>
                </div>

                <div className={'flex flex-col gap-2 mb-2'}>
                    <label className={'text-slate-100 '}>Password:</label>
                    <InputPassword/>
                </div>

                <div className={'flex justify-center mt-6'}>
                    <button type={'submit'} className={'rounded p-2 w-24 bg-sky-400 text-center cursor-pointer'}>Registrar</button>
                </div>
            </form>
        </div>
    )
}