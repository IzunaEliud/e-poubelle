import React from 'react'
import im from './../asset/image/creation-affiche-1.jpg'
import { useState } from 'react'
import axios from 'axios'
export default function SignUp() {
    //expression reguliere
    //[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}
    const mailRegex=/[a-z0-9]+@[a-z]+\.[a-z]{2,4}/
    
    const [users, setUsers] = useState("")
    const [pass, setPass] = useState("")
    const [conf, setConf] = useState("")
    const [name, setName] = useState("")
    const [mail, setMail] = useState("");
    const [profesion, setProfesion] = useState("")
    const [resultas, setResultas] = useState("")
    const [compagnie,setCompagnie]=useState("")
    const userChange=(e)=>{
        setUsers(e.target.value)
    }
    const passChange=(e)=>{
        setPass(e.target.value)
    }
    const confChange=(e)=>{
        setConf(e.target.value)
    }
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const mailChange=(e)=>{
        setMail(e.target.value)
    }
    const profesionChange=(e)=>{
        setProfesion(e.target.value)
    }
    const compagnieChange=(e)=>{
        setCompagnie(e.target.value)
    }
    const buttonClick=(e)=>{
        if(users!=="" && pass!=="" && conf!=="" && name!=="" && mail!=="" && profesion!==""){
            if(mailRegex.test(mail) && pass===conf){
                setResultas("axios")
                axios.post("http://localhost:5000/inscription",{
                    user:users,
                    password:pass,
                    name:name,
                    mail:mail,
                    profesion:profesion,
                    role:2,
                    compagnie:compagnie
                })
                    .then((data)=>{
                        setResultas(data.data)
                    })
            }else{
                setResultas("mail non valide")
            }
        }else{
            setResultas("remplir tout les champs")
        }
    }
    return (
        <div>
            
            <div id="p_connect">

                <div id="form">
                    <div>
                        <label for="users">Username :</label>
                        <input id="users" type="text" placeholder="Entrez votre nom d'utilisateur" value={users} onChange={userChange}/>
                    </div>
                    <div>
                        <label for="pass">Password :</label>
                        <input id="pass" type="password" placeholder="Entrez votre mot de passe" value={pass} onChange={passChange}/>
                    </div>
                    <div>
                        <label for="conf">Confirm password :</label>
                        <input id="conf" type="password" placeholder="Confirmer votre mot de passe" value={conf} onChange={confChange}/>
                    </div>
                    <div>
                        <label for="name">Nom et Prenom :</label>
                        <input id="name" type="text" placeholder="Entrez votre nom et votre prenom" value={name} onChange={nameChange}/>
                    </div>
                    <div>
                        <label for="mail">email :</label>
                        <input type="email" placeholder="Entrez votre mail" value={mail} onChange={mailChange}/>
                    </div>
                    <div>
                        <label for="proffesion">Proffesion :</label>
                        <input type="text" placeholder="Entrez votre profession" value={profesion} onChange={profesionChange}/>
                    </div>
                    <div>
                        <label for="users">Compagnie :</label>
                        <input id="users" type="text" placeholder="Entrez votre nom Compagnie" value={compagnie} onChange={compagnieChange}/>
                    </div>
                    <button className="btn" onClick={buttonClick}>Sign</button>
                    {resultas}
                </div>
                <img id="connectPageImg" src={im} alt="exanple affiche"/>
            </div>
        </div>
    )
}
