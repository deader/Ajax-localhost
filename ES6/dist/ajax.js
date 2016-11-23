"use strict";

// Создание объекта XMLHttpRequest
function CreateRequest() {
    var Request = false;

    if (window.XMLHttpRequest) {
        //Gecko-совместимые браузеры, Safari, Konqueror
        Request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        //Internet explorer
        try {
            Request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (CatchException) {
            Request = new ActiveXObject("Msxml2.XMLHTTP");
        }
    }

    if (!Request) {
        alert("Невозможно создать XMLHttpRequest");
    }

    return Request;
}
CreateRequest();

$(function () {
    $('#getForecast').click(function () {
        console.log('Клик по кнопке');
        // $.ajax({
        //     type: "GET",
        //     url: "http://t2.alexlans.com/test/src/promises.js",
        //     dataType: "script"
        // });

        $.ajax({
            type: "GET",
            url: "http://t2.alexlans.com/test/getForecast.js",
            dataType: "script",
            success: success
        });

        $.ajax({
            type: "GET",
            url: "http://t2.alexlans.com/test/ajax-tunel.js",
            dataType: "script"
        });

        // $.ajax({
        //     type: "GET",
        //     url: "http://t2.alexlans.com/test/getForecast.json",
        //     dataType: "json",
        //     success: 
        //     function success3(data) {
        //         console.log('Success3!!!');
        //         document.write(data);
        //     }
        // });

        // var data = { city: "Васюки", date: "20120318" };
        // $.get("http://t2.alexlans.com/test/getForecast.json", data, success2, "json");

        function success() {
            console.log('Success!!!');
            var forecast = forecastData.city + ", прогноз на " + forecastData.date;
            forecast += ": " + forecastData.forecast + ". Максимальная температура: " + forecastData.maxTemp + "C";
            console.log('А вот и сам forcast: ', forecast);
        }

        function success2(html) {
            console.log('Success2!!!');
            document.write(html);
        }
    });
});

// Новый тест 2


function SendGet() {
    //отправляю GET запрос и получаю ответ
    $$a({
        type: 'get', //тип запроса: get,post либо head
        url: 'http://t2.alexlans.com/test/ajax.php', //url адрес файла обработчика
        data: { 'q': '1' }, //параметры запроса
        response: 'text', //тип возвращаемого ответа text либо xml
        success: function success(data) {
            //возвращаемый результат от сервера
            $$('result', $$('result').innerHTML + '<br />' + data);
        }
    });
}

function SendPost() {
    //отправляю POST запрос и получаю ответ
    $$a({
        type: 'post', //тип запроса: get,post либо head
        url: 'http://t2.alexlans.com/test/ajax.php', //url адрес файла обработчика
        data: { 'z': '1' }, //параметры запроса
        response: 'text', //тип возвращаемого ответа text либо xml
        success: function success(data) {
            //возвращаемый результат от сервера
            $$('result', $$('result').innerHTML + '<br />' + data);
        }
    });
}

function SendHead() {
    //отправляю HEAD запрос и получаю заголовок
    $$a({
        type: 'head', //тип запроса: get,post либо head
        url: 'http://t2.alexlans.com/test/ajax.php', //url адрес файла обработчика
        response: 'text', //тип возвращаемого ответа text либо xml
        success: function success(data) {
            //возвращаемый результат от сервера
            $$('result', $$('result').innerHTML + '<br />' + data);
        }
    });
}