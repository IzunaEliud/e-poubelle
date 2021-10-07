import React from 'react'
import im from './../asset/image/creation-affiche-1.jpg'
export default function SignUp() {
    return (
        <div>
            <div id="p_connect">

                <div id="form">
                    <div>
                        <label for="users">Username :</label>
                        <input id="users" type="text" placeholder="Entrez votre nom d'utilisateur"/>
                    </div>
                    <div>
                        <label for="pass">Password :</label>
                        <input id="pass" type="password" placeholder="Entrez votre mot de passe"/>
                    </div>
                    <div>
                        <label for="conf">Confirm password :</label>
                        <input id="conf" type="password" placeholder="Confirmer votre mot de passe"/>
                    </div>
                    <div>
                        <label for="name">Nom et Prenom :</label>
                        <input id="name" type="text" placeholder="Entrez votre nom et votre prenom"/>
                    </div>
                    <div>
                        <label for="mail">email :</label>
                        <input type="email" placeholder="Entrez votre mail"/>
                    </div>
                    <div>
                        <label for="proffesion">Proffesion :</label>
                        <input type="text" placeholder="Entrez votre profession"/>
                    </div>
                    <button>Sign</button>
                    
                </div>
                <img id="connectPageImg" src={im} alt="exanple affiche"/>
            </div>
        </div>
    )
}
