import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./site.css"
import logo from "./../asset/image/logo.png"
import { BrowserRouter as Router, Route , Switch , Link } from 'react-router-dom';
import Carte from './mairie/map'

export default function Site() {
    const [userData, setUserData] = useState("eliud")
    const [item1SideClass,setItem1SideClass]=useState("btnSideBarFocus")
    const [item2SideClass,setItem2SideClass]=useState("btnSideBar")

    const Page=()=>{
        console.log("okok")
        if(window.location.pathname==="/site/tabrecap"){
            setItem2SideClass("btnSideBarFocus")
            setItem1SideClass("btnSideBar")
        }
        if(window.location.pathname==="/site/map"){
            setItem1SideClass("btnSideBarFocus")
            setItem2SideClass("btnSideBar")
        }
        console.log(item2SideClass)
        axios.post(`http:localhost:5000/userData/get/${localStorage.getItem("userId")}`)
        .then(e=>{
            console.log(e)
            
        })
        setUserData("test")
        return(<div></div>)
    }
    const itemSideClassChange=()=>{
        if(window.location.pathname==="/site/tabrecap"){
            if(item1SideClass==="btnSideBar"){
                setItem1SideClass("btnSideBarFocus")
                setItem2SideClass("btnSideBar")
            }
        }
        else if(window.location.pathname==="/site/Map"){
            if(item2SideClass==="btnSideBar"){
                setItem2SideClass("btnSideBarFocus")
                setItem1SideClass("btnSideBar")
            }
        }
    }
    return (
        <div>
        <Page/>
        <Router>
        <div id="siteMairie">
            
            <div id="SideBar">
                <div id="logo">
                    <img id="imLogo" src={logo} alt="E-poubelle logo" width="32px" height="30px"/>
                    E-Poubelle
                </div>    
                <div id="itemSideBar">
                    <Link className={item1SideClass} to="/site/Map" onClick={itemSideClassChange}>Map</Link>

                    <Link className={item2SideClass} to="/site/tabrecap" onFocus={itemSideClassChange}>Tableau Recapitulatif</Link>                       

                </div>
            </div>
            <div id="itemSide">
                
                    <Switch>
                        <Route path="/site/map">
                            <Carte/>
                        </Route>
                        <Route path="/site/tabrecap">
                            Tableau Recapitulatif
                        </Route>
                    </Switch>
                
            </div>
        </div>
        </Router>
        </div>
    )
}
