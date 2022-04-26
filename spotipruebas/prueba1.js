//https://www.youtube.com/watch?v=G_WFk4wg9fk 
//https://www.youtube.com/watch?v=EqisCZG9MAc
//Video 
document.addEventListener("DOMContentLoaded", function() {
    const SPOTIFY_AUTORIZACION_URL = "https://accounts.spotify.com/authorize?";
    const ID_CLIENTE = "13eb2bd91ce640c5bf30a781a7232fd1";
    const REDIRECT_URI = "http://localhost/spotipruebas/redireccion.html";
    const SCOPE_NAMES = ["user-read-playback-state", "playlist-modify-private"];
    let scopesLinkPart = SCOPE_NAMES.join("%20");
    let botonLogin = document.getElementById("botonLoginSpotify");
    botonLogin.onclick = function() {
        window.location = `${SPOTIFY_AUTORIZACION_URL}client_id=${ID_CLIENTE}&redirect_uri=${REDIRECT_URI}&scope=${scopesLinkPart}&response_type=token&show_dialog=true`;
    }
});