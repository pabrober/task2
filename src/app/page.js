"use client"
import { TaskCard } from "@/components/TaskCard"
import { useTasks } from "@/context/TaskContext"


export default function Page() {

  const { tasks } = useTasks()

  return (
    <div className="flex justify-center">

      <div className="w-7/12">
        {
          tasks.map((task, index) => (
            <TaskCard task={task} key={task.id} />
          ))
        }
      </div>
    </div>
  )
}
