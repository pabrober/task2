'use client'
import { useTasks } from "@/context/TaskContext"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Navbar() {

    const router = useRouter()
    const { tasks } = useTasks()

    return (
        <header className="flex justify-between items-center bg-gray-800 px-28 py-3" >
            <Link href='/'>
                <h1 className="fon-bold text-3xl text-white" >Task App
                    <span className="text-slate-300 text-sm ml-5" >{tasks.length} tasks</span>
                </h1>
            </Link>

            <div>
                <button
                    className="bg-green-500 hover:bg-slate-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex "
                    onClick={() => { router.push(`/new`) }} >
                    Add Task
                </button>
            </div>
        </header>
    )
}

