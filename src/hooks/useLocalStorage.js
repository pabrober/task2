import { useState, useEffect } from "react"

export const useLocalStorage = (key, initialState) => {

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const item = localStorage.getItem(key)
        const tasks = JSON.parse(item)
        if (tasks) {
            setState(tasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]

}
