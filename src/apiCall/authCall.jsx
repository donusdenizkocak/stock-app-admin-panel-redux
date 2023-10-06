import axios from "axios"

const login =async () =>{
    const BASE_URL="https://12338.fullstack.clarusway.com/"
    const Token="e5b410d1c727fb3ffb9d12deaeea6a37ac1bb56e"
    try {
        const {data} = await axios.post(`${BASE_URL}account/auth/login/`, userInfo)
        console.log(data)
    } catch (error) {
       console.log(error) 
    }
}