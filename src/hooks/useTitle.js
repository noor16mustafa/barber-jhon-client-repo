import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Barber JHON`;
    }, [title])
}

export default useTitle;