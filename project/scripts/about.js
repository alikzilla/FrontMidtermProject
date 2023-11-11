const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBar')

const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

hamburger.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", toggleSidebar);

const mapButton = document.querySelector('.map_button');

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