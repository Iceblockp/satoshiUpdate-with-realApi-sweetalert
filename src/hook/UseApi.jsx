import React, { useState } from 'react'

const UseApi = (fun) => {
    const [apiData, setApiData] = useState({
        loading:false,
        error:null,
        daTa:null
    })

    const handleDealApi = async (formData) => {
        setApiData(pre => ({...pre,loading:true}));
        const res = await fun(formData);
        // console.log(res);
        if(res.error){
            setApiData(pre => ({...pre,loading: false, error: res.msg}))
        }else{
            setApiData(pre => ({...pre,loading: false, daTa:res.data}));
        }
        
        
    }

    const {loading,error,daTa} = apiData;


  return {handleDealApi,loading,error,daTa};
}

export default UseApi;