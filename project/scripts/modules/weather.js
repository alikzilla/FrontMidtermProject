export function setMap(mapButton){
    DG.then(function() {
        var map;
    
        map = DG.map('map', {
            center: [43.20714, 76.66990],
            zoom: 16,
            scrollWheelZoom: false
        });
    
        DG.marker([43.20714, 76.66990]).bindPopup('SFA').addTo(map);
    
        var maxZoomSmallScreens = 15;
    
        window.addEventListener('resize', function() {
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
            var maxZoom = (windowWidth <= 700) ? maxZoomSmallScreens : undefined;
    
            map.setMaxZoom(maxZoom);
        });
    
        var initialWindowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var initialMaxZoom = (initialWindowWidth <= 700) ? maxZoomSmallScreens : undefined;
        map.setMaxZoom(initialMaxZoom);
    
        mapButton.addEventListener('click', () => {
            map.panTo([43.20714, 76.66990]);
            map.setMaxZoom(16);
        });     
    });
}