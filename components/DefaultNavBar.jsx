import Image from 'next/image';
import font from '@/utils/fonts';

export default function DefaultNavBar() {
    return (
        <nav className='w-full p-6 flex justify-between items-center'>
            <div>
                <Image src={'/images/sqlogo.png'} width={56} height={56} className='mr-6 inline' />
                <h1 className={`${font.regular} text-white inline`}>Stay Quran</h1>
            </div>
            <div>
                <h2 className={`${font.medium} inline text-white mr-6`}>Testimoni</h2>
                <h2 className={`${font.medium} inline text-white mr-6`}>Tentang Kami</h2>
                <button className={`${font.medium} bg-yellow-300 my-auto px-14 py-3 rounded-2xl text-2xl leading-none`}>Masuk</button>
            </div>
        </nav>
    )
}