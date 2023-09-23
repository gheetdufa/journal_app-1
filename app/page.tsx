// @ts-ignore
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            
          </div>
        </div>
        <ChatInterface />
      </div>

      
    </>
  )
}
