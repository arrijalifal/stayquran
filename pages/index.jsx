import Image from 'next/image';
import font from '@/utils/fonts';
import style from '@/styles/Home.module.css';
import DefaultNavBar from '@/components/DefaultNavBar';
import icons from '@/utils/iconskeunggulan';
import React from 'react';

export default function Home() {
  const content = [
    {
      icon: icons.flexible,
      title: 'Fleksibel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: icons.privacy,
      title: 'Fleksibel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: icons.certificate,
      title: 'Fleksibel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]
  return (
    <div>
      <section className="h-screen relative">
        <Image src={'/images/quran.jpg'} fill='responsive' style={{ objectPosition: '20% 30%', objectFit: 'cover' }} className={style.image}></Image>
        <div className={`${style.gradient} h-screen w-full absolute`}>
          <DefaultNavBar />
          <div className='p-[5rem] w-4/5'>
            <h1 className={`${font.medium} text-[4rem] leading-[110%] text-white w-4/5`}>Membaca Al-Qur&apos;an itu Mudah</h1>
            <p className='text-white mt-7 leading-[119%]'>Belajar tahsin Al-Qur&apos;an yang fleksibel dan amanah</p>
            <div className='mt-7'>
              <button className='bg-yellow-300 px-16 py-2 rounded-2xl'>Daftar</button>
              <button className='border-2 px-16 py-1.5 ml-8 border-yellow-300 rounded-2xl text-white'>Selengkapnya</button>
            </div>
          </div>
        </div>
      </section>
      <section className='h-screen'>
        <h1 className={`text-white text-[2.5rem] w-full text-center mt-10`}>Keunggulan</h1>
        <div className='flex justify-between gap-11 px-36 mt-16'>
          {
            content.map((e, idx) => {
              return (
                <React.Fragment key={idx}>
                  <div className='border-2 border-yellow-300 rounded-2xl py-12'>
                    <Image src={e.icon} className='mx-auto' />
                    <h2 className='w-full text-center text-white mt-8 text-4xl'>{e.title}</h2>
                    <p className='text-white mt-8 px-8'>{e.description}</p>
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}
