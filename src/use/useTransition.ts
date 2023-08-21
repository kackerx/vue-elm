import { reactive } from "vue";


export const useTransition = (len: number) => {
    const shows = reactive<boolean[]>(Array(len).fill(false))

    let index = 0

    const intervalID = setInterval(() => {
        if (index === len) {
            clearInterval(intervalID)
            return
        }

        shows[index] = true
        index++
    }, 3000)

    return {
        shows,
    }
}
