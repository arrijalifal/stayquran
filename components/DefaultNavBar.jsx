import Image from 'next/image';
import Link from 'next/link';

export default function DefaultNavBar() {
    return (
        <nav className='w-full px-8 py-5 flex justify-between items-center bg-transparent'>
            <div>
                <Image src={'/images/sqlogo.png'} width={56} height={56} className='mr-6 inline' />
                <h1 className={`inline`}>Stay Quran</h1>
            </div>
            <div>
                <Link href={'#testimoni'} scroll={false}><h2 className={`inline mr-6`}>Testimoni</h2></Link>
                <h2 className={`inline mr-6`}>Tentang Kami</h2>
                <button className={`yellowbutton px-12 py-2 regulartext`}>Masuk</button>
            </div>
        </nav>
    )
}