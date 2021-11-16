import React from 'react'
import imLogin from '../asset/image/loginIcon.png'
import { useState } from 'react'
import axios from 'axios'
export default function ConnectPage() {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [reponse,setReponse] = useState("")
    const [userStatus, setUserStatus] = useState(false)
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
            .then(re=>{
                console.log(re.data)
                
                if(re.data.status!==0){
                    setReponse(re.data.msg)
                    localStorage.setItem("userId",re.data.msg)
                    
                }else{
                    console.log(re.data.msg)

                }
                
                
            })
            
        }
        else{
            setReponse("veuillez remplir tous les champs")
        }

    }
    const onLoadingPage=()=>{
        axios.post("http://localhost:5000/verif")
        .then(re=>{
            console.log(re.data)
        })
    }
    return (
        <div id="p_connect" onLoad={onLoadingPage}>
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
                
                <button className="btn" onClick={handleSubmmit}>Login</button>
                
            </div>
        </div>
    )
}
