// @ts-ignore
"use client";
import { Navbar } from '../components/Navbar';
import ChatInterface from '@/components/ChatInterface';


export default function Home() {
  return (
    <>

      <Navbar />
      <div className='bg-gray-100' style={{ height: 'screen' }}>
        </div>
        <ChatInterface />
    </>
  )
}

