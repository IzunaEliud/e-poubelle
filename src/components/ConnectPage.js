import React from 'react'
import imLogin from '../asset/image/loginIcon.png'
import { useState } from 'react'
import axios from 'axios'
export default function ConnectPage() {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [reponse,setReponse] = useState("")
    const changeUserName=(e)=>{
        setUsername(e.target.value)
    }
    const changePasse=(e)=>{
        setPass(e.target.value)
    }
    const handleSubmmit=(e)=>{
        if(username!=="" && pass!==""){
            axios.post("http://localhost:5000/connection",{
                name:username,
                pass:pass
            })
            setReponse("en attente de reponse")
        }
        else{
            setReponse("veuillez remplir tous les champs")
        }

    }
    return (
        <div id="p_connect">
            <div id="form">
                <img src={imLogin} height={200} width={200} alt="login guest"/>
                <div>
                    <label for="username">Username :</label>
                    <input id="username" type="text" value={username} onChange={changeUserName}/>
                </div>
                <div>
                    <label for="pass">Mot de passe :</label>
                    <input id="pass" type="password" value={pass} onChange={changePasse}/>
                </div>
                
                <button onClick={handleSubmmit}>Login</button>
                {reponse}
            </div>
        </div>
    )
}
