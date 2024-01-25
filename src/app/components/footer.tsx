import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className='hover:drop-shadow-[0_8px_8px_rgba(0,0,0,1)] invisible absolute bottom-0 left-0 m-5 flex flex-row items-center gap-2 text-sm font-extralight sm:visible'>
                COSC380 AI | Meg, Mikias, and Soobin
            </div>
            <div className='absolute bottom-0 right-0 m-5 text-sm font-extralight'>
                Source Code:
                <b className='p-2 hover:text-black hover:drop-shadow-md'>
                    https://github.com/soobinrho/emotion-recognition-website
                </b>
            </div>
        </>
    );
}