import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '../components/LogIn';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main>
      <div>
        <Login />
      </div>
    </main>
  )
}
