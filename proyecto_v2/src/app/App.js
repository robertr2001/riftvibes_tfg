import React,{ Component } from "react";
const { getUrl,getCodeUsuario,getTokenUsuario }=require("../controller/spotify.controller");
class App extends Component{

    constructor(){
        super();
        this.state={
            nombreUsuario:"",
            contraseña:"",
            nombreInvocador:"",
            region:"",
            tokenSpotify:"",
            tokenSpotifyResfesh:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.crearUsuario=this.crearUsuario.bind(this);
        this.crearUrlSpotify=this.crearUrlSpotify.bind(this);
        this.spotifyVerificado=this.spotifyVerificado.bind(this);
    }

    crearUsuario(event){
        fetch("/login", {
            method:"POST",
            body: JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            .then(res=>console.log(res))
            .catch(err=>console.error(err));
        event.preventDefault();
    }

    handleChange(event){
        const { name,value }=event.target;
        this.setState({
            [name]: value
        })
    }
    //Crear Url Spotify
    crearUrlSpotify(event){
        event.preventDefault();
        const enlanceVS=document.getElementById("enlaceVinculoSpotify");
        enlanceVS.onclick=function(){
            const urlSpotify= getUrl();
            console.log(urlSpotify);
            window.location=urlSpotify;
        }
        
    }
    spotifyVerificado(event){
        const verificado=getCodeUsuario(window.location.search);
        if(!verificado.valido){
            event.preventDefault();
        }
        else{
            //let datosUsuario=getTokenUsuario(verificado.code);  
            // this.setState({
            //     [tokenSpotify]: datosUsuario.access_token,
            //     [tokenSpotifyRefresh]:datosUsuario.refresh_token
            // })
        }
        
    }
    render(){
        return(
            <div className="form">
                <form onSubmit={this.crearUsuario}>
                    <input name="nombreUsuario" onChange={this.handleChange} type="text" placeholder="Usuario"/>
                    <input name="contraseña" onChange={this.handleChange} type="password" placeholder="Contraseña"/>
                    <input name="nombreInvocador" onChange={this.handleChange} type="text" placeholder="Nombre de invocador"/>
                    <select name="region" onChange={this.handleChange}>
                        <option value="BR1">BR</option>
                        <option value="EUN1">EUNE</option>
                        <option value="EUW1" defaultValue={true}>EUW</option>
                        <option value="JP1">JP</option>       
                        <option value="KR">KR</option>    
                        <option value="LA1">LAN</option>      
                        <option value="LA2">LAS</option>  
                        <option value="NA1">NA</option>  
                        <option value="OC1">OC</option>   
                        <option value="RU">RU</option>    
                        <option value="TR1">TR</option> 
                    </select>
                    <label>
                        <input type="checkbox" onClick={this.spotifyVerificado}/><a  id="enlaceVinculoSpotify"  href="#"onClick={this.crearUrlSpotify}>Vincula Spotify</a>
                    </label>
                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}

export default App;