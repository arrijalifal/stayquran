import Image from 'next/image';
import style from '@/styles/Home.module.css';
import DefaultNavBar from '@/components/DefaultNavBar';
import React from 'react';
import Link from 'next/link';
import keunggulan from '@/utils/benefits';

export default function Home() {
  return (
    <div>
      <section className={`h-screen w-full flex flex-col`}>
        <DefaultNavBar />
        <div className='flex-1 p-20'>
          <div className='relative w-full h-full'>
            <Image src={'/images/quran.jpg'} fill='responsive' style={{ objectPosition: '20% 30%', objectFit: 'cover' }} className={`${style.image} z-0 rounded-xl`}></Image>
            <div className='absolute h-full text-[#fafafa] flex flex-col pl-16 justify-center'>
              <h1 className='heading1'>Membaca Al-Qur&apos;an</h1>
              <h1 className='heading1'>itu Mudah</h1>
              <p className='leading-[125%]'>by Stay Quran</p>
              <div className='mt-4'>
                <button className='yellowbutton outlinebutton w-[14rem] py-2 buttontext text-[#2f2f2f]'>Daftar</button>
                <Link href={'#keunggulan'} scroll={false}><button className='outlinebutton w-[14rem] py-2 buttontext mt-4 ml-4'>Selengkapnya</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='keunggulan' className=' pt-3'>
        <h1 className={`heading1 text-center`}>Keunggulan</h1>
        <div className='grid gap-5 grid-cols-2 text-center px-[4.5rem] pt-16'>
          {
            keunggulan.map((k, idx) => {
              return (
                <React.Fragment key={idx}>
                  <div className='flex px-8 py-6 shadow-lg shadow-grey-400 rounded-xl bg-[#F5F5F5]'>
                    <div className='w-20 h-20 rounded-full  border-2'></div>
                    <div className='flex-1 ml-6 text-left'>
                      <h1 className='heading2'>{k.title}</h1>
                      <p className='mt-4 regulartext'>{k.description}</p>
                    </div>
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </section>
      <section id="testimoni" className=' pt-8'>
        <h1 className='heading1 text-center pb-8'>Testimoni</h1>
        <div className='grid grid-cols-3 gap-5 px-36'>
          {
            Array.from({ length: 3 }).map((_, idx) => {
              return (
                <React.Fragment key={idx}>
                  <div className='shadow-xl shadow-grey-400 py-8 rounded-xl bg-[#F5F5F5]'>
                    <div className='w-40 h-40 mx-auto relative'>
                      <Image src={'/images/download.jpeg'} fill='responsive' className='rounded-full'></Image>
                    </div>
                    <div className='my-4 text-center'>
                      <h1 className='heading2'>Penguin Master</h1>
                      <h2 className='italic mt-0.5'>Hewan, 2023</h2>
                    </div>
                    <p className='px-8 text-justify'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique amet aut velit ullam, libero, animi sit cum temporibus dolores sed tenetur aliquid saepe blanditiis sequi minus quidem maxime ducimus!
                    </p>
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </section>
      <section id='kontak' className='h-screen flex flex-col justify-center items-center'>
        <h1 className='heading1'>Masih ragu?</h1>
        <p>Kami siap menghapus keraguan anda!</p>
        <div></div>
      </section>
      <footer>
        ©️ 2023 Stay Quran
      </footer>
    </div>
  )
}
