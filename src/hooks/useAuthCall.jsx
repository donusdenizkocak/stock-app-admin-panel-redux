
import axios from "axios"
import { useDispatch } from "react-redux"
import { fetchStart, loginSuccess } from "../features/authSlice"
export const useAuthCall = () => {
    const dispatch = useDispatch() 

   const login =async (userInfo) =>{
        const BASE_URL="https://12338.fullstack.clarusway.com/"
        const Token="e5b410d1c727fb3ffb9d12deaeea6a37ac1bb56e"

        dispatch(fetchStart)
        try {
            const {data} = await axios.post(`${BASE_URL}account/auth/login/`, userInfo)
            dispatch(loginSuccess(data))    //payload için veri göndermemiz gerekiyor
            console.log(data)
            // return data  loginSuccess yazınca buna gerek yok
        } catch (error) {
           console.log(error) 
        }
    }

    return {login}
}
export default useAuthCall