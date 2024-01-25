import Image from 'next/image';
import Link from 'next/link';

import HeaderContacts from './footer';

export default function Header() {
    return (
        <>
            <div className='absolute left-0 top-0 m-5 mt-6 flex flex-row text-base'>
                <Link href='/'>
                    <div className='font-black drop-shadow-sm hover:text-slate-700 hover:drop-shadow-md active:text-slate-500'>
                        Final Project
                    </div>
                </Link>
                <div className='ml-3 hover:drop-shadow-md'>Emotion Detection</div>
            </div>
        </>
    );
}