import './globals.css'
import { Inter } from 'next/font/google'
import { TaskProvider } from '@/context/TaskContext'
import { Navbar } from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import { Layout } from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          <Navbar />
          <Layout>   {children} </Layout>
          <Toaster />
        </TaskProvider>
      </body>
    </html>
  )
}
