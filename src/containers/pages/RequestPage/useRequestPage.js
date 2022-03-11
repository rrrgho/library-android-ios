import React, { useEffect, useState } from 'react';
import { GETAUTH, POSTAUTH } from '../../../config/Axios';

const useRequestPage = () => {
    const [data, setData] = useState();


    const getData = async () => {
        setData()
        let request = await GETAUTH('/get-preferensi');
        if(request.status === 200){
            setData(request.data.data)
        }
        console.log(request)
    }

    const sendRequest = async (payload) => {
        if(payload.judul.length > 0 && payload.description.length > 0){
            let request = await POSTAUTH('/preferensi', payload);
            if(request.status === 200){
                getData()
            }
        }else{
            alert("Judul dan Keterangan tidak boleh kosong !")
        }
    }

    const deleteRequest = async (id) => {
        let request = await GETAUTH(`/delete-preferensi/${id}`);
        if(request.status === 200){
            getData()
        }else{
            console.log(request)
            alert("Terjadi kesalahan, coba lagi nanti !")
        }
    }



    useEffect( () => {
        getData()
    },[])

    return { data, sendRequest, deleteRequest }
}



export default useRequestPage;
