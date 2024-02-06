import { api } from "./Api"



export const RegisterGo = async (data) => {
    // console.log(data);
    try{
        const res = await api.post('/register',data);
        return res;
        

    }catch(e){
        return {error: true, msg: e.message}

    }
};

export const LoginGo = async (formData) => {
    try{
        const res = await api.post("/login",formData);
        const { data } = res;
        if(data.token){
            localStorage.setItem("auth",JSON.stringify(data.token));
        }
        return res;

    }catch(e){
        return{error: true, msg: e.message};

    }
    
}