const controladorUsuario={};
//Datos para crear la URL para vincular spotify
const SPOTIFY_AUTORIZACION_URL = "https://accounts.spotify.com/authorize?";
const response_type="code";
const ID_CLIENTE = "13eb2bd91ce640c5bf30a781a7232fd1";
const REDIRECT_URI = "http://localhost:3000";
const SCOPE_NAMES = ["user-read-playback-state", "playlist-modify-private"];
const scopesLinkPart = SCOPE_NAMES.join("%20");
const state="1a2s3d4f5g6h7j8k";
const CLIENT_SECRET="457391807fc3458597250bd280173899";

controladorUsuario.getUrl=(req,res)=>{  
    const url=`${SPOTIFY_AUTORIZACION_URL}response_type=${response_type}&client_id=${ID_CLIENTE}&scope=${scopesLinkPart}&redirect_uri=${REDIRECT_URI}&state=${state}&show_dialog=true`;
    return url;
}
//AQAVEniU_37iBVf7jyr3HeKvalo-ruxpsNxtQcbRB95v9es6WtGGeCLn-P3h7jkgcZKDUDczrgGUGXqSnKpWAQuuDkckn2-3oAw6nqPP-VTvnTbvB7tBWVlnUSrlat9PqQMnLzhAL-qylEFF6CLCH_qXABzsF2-IdCNVg3xwGxY_cooTevoBp3a4DEumCFEpjIYpSP9ergD0tFnX9dTlwCanFKQ7kZzgNwugFQ&state=1a2s3d4f5g6h7j8k'
//AQAVEniU_37iBVf7jyr3HeKvalo-ruxpsNxtQcbRB95v9es6WtGGeCLn-P3h7jkgcZKDUDczrgGUGXqSnKpWAQuuDkckn2-3oAw6nqPP-VTvnTbvB7tBWVlnUSrlat9PqQMnLzhAL-qylEFF6CLCH_qXABzsF2-IdCNVg3xwGxY_cooTevoBp3a4DEumCFEpjIYpSP9ergD0tFnX9dTlwCanFKQ7kZzgNwugFQ&'

controladorUsuario.getCodeUsuario=(urlCode)=>{
    let datos;
    if(urlCode=""){
         datos={
            valido:false
        }
    }
    else{
        let code=urlCode.substring((urlCode).indexOf("=")+1,(urlCode).indexOf("state="));
        let state=(urlCode).substring((urlCode).indexOf("state=")+6);
         datos={
            code:code,
            state:state,
            valido:true
        }
    }
    return datos;
}

// controladorUsuario.getTokenUsuario=(code)=>{
//     const body = {
//         grant_type: 'authorization_code',
//         code: code,
//         redirect_uri: REDIRECT_URI,
//         client_id: ID_CLIENTE,
//         client_secret: CLIENT_SECRET,
//       }
//     await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       "Accept": "application/json"
//     },
//     body: encodeFormData(body)
//   })
//   .then(response => response.json())
//   .then(data => {
//     const query = querystring.stringify(data);
//     res.redirect(`${process.env.CLIENT_REDIRECTURI}?${query}`);
//   });
//     let urlPeticion = `https://accounts.spotify.com/api/token`;
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", urlPeticion);
//     xhr.setRequestHeader("Content-Type", "x-www-form-urlencoded");
//     xhr.setRequestHeader("Authorization", `Basic ${(ID_CLIENTE+":"+CLIENT_SECRET).toString("base64")}`);
//     xhr.responseType = "json";
//     xhr.send(`code=${code}&redirect_uri=${REDIRECT_URI}$grant_type=authorization_code`);
//     console.log(xhr.response);
// }

module.exports=controladorUsuario;