import axios from 'axios'

const userURL = "http://localhost:5000/user"




export const getAllActioveUsers=()=>axios.get(`${userURL}/users`,  { 
      headers: {
        "Content-Type": "appplication/json"
      },
    })
     
