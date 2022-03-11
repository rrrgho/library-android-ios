import { useEffect, useState } from "react"
import { GET } from '../../../config/Axios';

const useSelebPus = () => {
    const [data, setData] = useState();

    const getData = async () => {
        let request = await GET('/student-popular');
        if(request.status === 200){
            setData(request.data.data)
            console.log(request.data.data)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return { data }
}

export default useSelebPus;