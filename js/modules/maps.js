// googleMaps.js
window.initMap = function() {
    // Coordenadas de la ubicación donde deseas colocar el pin
    var location = { lat: -39.251513148501466, lng: -72.3120835597234 };

    // Crear un nuevo mapa en el elemento con el ID "map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 12 // Nivel de zoom del mapa
    });

    // Crear un nuevo marcador en la ubicación especificada
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Molco Nativo' // Título del marcador (opcional)
    });
}
