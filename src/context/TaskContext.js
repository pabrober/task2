"use client"
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext()

export const useTasks = () => {
    const contex = useContext(TaskContext)
    if (!contex) throw new console.error('useTasks must used withing a provider');

    return contex
}

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useLocalStorage('tasks', [])


    const createTask = (title, description) => { setTasks([...tasks, { title, description, id: uuid() }]) }

    const deleteTask = (id) => { setTasks([...tasks.filter(task => task.id !== id)]) }

    const updateTask = (id, newData) => {
        setTasks([...tasks.map(task => task.id === id ? { ...task, ...newData } : task)])
    }

    return <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}  >
        {children}
    </TaskContext.Provider>
}