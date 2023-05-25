"use client"
import { useTasks } from '@/context/TaskContext'

export default function page() {

  const values = useTasks()
  

  return (
    <div>about page</div>
  )
}

