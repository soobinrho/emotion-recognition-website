import Image from 'next/image';
import Link from 'next/link';

import HeaderContacts from './footer';

export default function Header() {
    return (
        <>
            <div className='absolute left-0 top-0 m-5 mt-6 flex flex-row text-base'>
                <Link href='/'>
                    <div className='font-black hover:text-slate-700 active:text-slate-500'>
                        2024-01-25 Final Project Demo
                    </div>
                </Link>
                <div className='invisible sm:visible ml-3 drop-shadow-md'>Emotion Detection</div>
            </div>
        </>
    );
}