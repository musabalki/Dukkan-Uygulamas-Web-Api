import { useEffect,useState } from "react";
import axios from "axios"

function useFetch(url){
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);

    const fetchData = async () => {
       try{
        /*
        const data1= await fetch(url)
        const resData=await data1.json()
        .then(res=>res.json()).then(data=>console.log(data))
        */
        const {data:resData} = await axios.get(url)
        setData(resData)
        setLoading(false)
       }
       catch(err){
        setError(err.message)
        setLoading(false)
       }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {error,loading,data};
}

export default useFetch