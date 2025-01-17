import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Erica Gurung | Portfolio',
  description: 'todo: description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pink-50 text-gray-950 relative`}>
        <div className="bg-fuchsia-200 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-red-200 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        
        <Header />
        {children}
        </body>
    </html>
  )
}
