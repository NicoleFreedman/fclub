var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 50.005342, lng: 36.236979},
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        scrollwheel: false,
        zoom: 17,

        // Добавляем свои стили для отображения карты
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    });

    // Создаем маркер на карте
    var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 50.005342, lng: 36.236979},

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title:"Fclub Lounge Cafe"
    });

    // Создаем наполнение для информационного окна
    var contentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Fclub Lounge Cafe</h1>'+
'<div id="bodyContent" style="font-size: 12px;">'+ '<p>Абсолютно новый ресторан</p>' +
'<p>Адрес: Ул. Сумская, 72, Харьков </p>' +
'<p><b>Телефон:</b> +380 50 343 5005'+
'</p>'+'<p><b>Чтобы проложить маршрут нажмите</b> <a href="https://www.google.co.il/maps/dir//%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A1%D1%83%D0%BC%D1%81%D1%8C%D0%BA%D0%B0,+72,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+61000/@50.0057865,36.2344639,17z/data=!4m16!1m7!3m6!1s0x4127a0de6da556e3:0xd35868884dfd4986!2z0LLRg9C70LjRhtGPINCh0YPQvNGB0YzQutCwLCA3Miwg0KXQsNGA0LrRltCyLCDQpdCw0YDQutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDYxMDAw!3b1!8m2!3d50.0057865!4d36.2366526!4m7!1m0!1m5!1m1!1s0x4127a0de6da556e3:0xd35868884dfd4986!2m2!1d36.2366526!2d50.0057865" target="_blank">здесь</a>'+
'</p>' + 
'</div>'+
'</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
       content: contentString,
       maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

}

$(document).ready(function(){

$(".btn-see-location").click(function (e) {
                e.preventDefault();
                  
  $(this).parents(".wrapp-see-location").addClass('wrapp-see-location-1');
         });
$("body").click(function(event) {
        // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
         if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
            $('.navbar-collapse').collapse('toggle');
        }
  });
$('section').addClass("hidden1").viewportChecker({
classToAdd: 'visible animated bounceInUp',
offset: 100
});
});