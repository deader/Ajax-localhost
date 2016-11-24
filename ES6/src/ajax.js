
// Создание объекта XMLHttpRequest
function CreateRequest() {
    var Request = false;

    if (window.XMLHttpRequest) {
        //Gecko-совместимые браузеры, Safari, Konqueror
        Request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        //Internet explorer
        try {
            Request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (CatchException) {
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
        //     url: "/test/src/promises.js",
        //     dataType: "script"
        // });

        // Запрос без параметров

        $.ajax({
            type: "GET",
            url: "./getForecast.js",
            dataType: "script",
            success: success
        });

        // $.ajax({
        //     type: "GET",
        //     url: "/test/ajax-tunel.js",
        //     dataType: "script"
        // });

        // $.ajax({
        //     type: "GET",
        //     url: "/test/getForecast.json",
        //     dataType: "json",
        //     success:
        //     function success3(data) {
        //         console.log('Success3!!!');
        //         document.write(data);
        //     }
        // });

        function success() {
            console.log('Success!!!');
            var forecast = forecastData.city + ", прогноз на " + forecastData.date;
            forecast += ": " + forecastData.forecast + ". Максимальная температура: " + forecastData.maxTemp + "C";
            console.log('А вот и сам прогноз: ', forecast);
        }

        // Запрос с параметрами

        // Заполнение таблицы pogoda
        var mass = { city: "Черкассы", date: "20120318" };
        $.get("./getForecast.json", mass, function (data) {
            for (var i = 0; i < data.cityes.length; i++) {
                $('#pogoda').append('<tr><td>' + data.cityes[i].city + '</td><td>' + data.cityes[i].date +
                    '</td><td>' + data.cityes[i].forecast + '</td><td>' + data.cityes[i].maxTemp + '</td><tr>');
            }
        }, "json");

        // Заполнение таблицы users
        $.get("./users.json", function (data) {
            for (var i = 0; i < data.users.length; i++) {
                $('#users').append('<tr><td>' + data.users[i].id + '</td><td>' + data.users[i].name +
                    '</td><td>' + data.users[i].age + '</td><tr>');
            }
        }, "json");

        // Прогноз по параметру city
        var data = { city: "Черкассы", date: "20120318" };
        $.get("./getForecast.json", data, success4, "json");

        function success4(Data) {
            console.log('Success with parameters!!!');
            for (var i = 0; i < Data.cityes.length; i++) {
                if (Data.cityes[i].city === data.city) {
                    console.log(
                        'А вот и сам прогноз: '
                        + Data.cityes[i].city 
                        + ", прогноз на " + Data.cityes[i].date
                        + ":  " + Data.cityes[i].forecast + ". Максимальная температура: " + Data.cityes[i].maxTemp + "C"
                    );
                }
            }
        }

        function success2(html) {
            console.log('Success2!!!');
            document.write(html);
        }

    });

});


// Новый тест 2 разные типы запросов


// Запрос на сервер при помощи ajax при загрузке страницы

// $(function () {
//     $.getJSON('./users.json', function (data) {
//         for (var i = 0; i < data.users.length; i++) {
//             $('#users').append('<tr><td>' + data.users[i].id + '</td><td>' + data.users[i].name +
//                 '</td><td>' + data.users[i].age + '</td><tr>');
//         }
//     });
// });

// $(function () {
//     $.getJSON('./getForecast.json', function (data) {
//         for (var i = 0; i < data.cityes.length; i++) {
//             $('#pogoda').append('<tr><td>' + data.cityes[i].city + '</td><td>' + data.cityes[i].date +
//                 '</td><td>' + data.cityes[i].forecast + '</td><td>' + data.cityes[i].maxTemp + '</td><tr>');
//         }
//     });
// });


function SendGet() {
    //отправляю GET запрос и получаю ответ
    $$a({
        type: 'get',//тип запроса: get,post либо head
        url: '/test/ajax.php',//url адрес файла обработчика
        data: { 'q': '1' },//параметры запроса
        response: 'text',//тип возвращаемого ответа text либо xml
        success: function (data) {//возвращаемый результат от сервера
            $$('result', $$('result').innerHTML + '<br />' + data);
        }
    });
}

function SendPost() {
    //отправляю POST запрос и получаю ответ
    $$a({
        type: 'post',//тип запроса: get,post либо head
        url: '/test/ajax.php',//url адрес файла обработчика
        data: { 'z': '1' },//параметры запроса
        response: 'text',//тип возвращаемого ответа text либо xml
        success: function (data) {//возвращаемый результат от сервера
            $$('result', $$('result').innerHTML + '<br />' + data);
        }
    });
}

function SendHead() {
    //отправляю HEAD запрос и получаю заголовок
    $$a({
        type: 'head',//тип запроса: get,post либо head
        url: '/test/ajax.php',//url адрес файла обработчика
        response: 'text',//тип возвращаемого ответа text либо xml
        success: function (data) {//возвращаемый результат от сервера
            $$('result', $$('result').innerHTML + '<br />' + data);
        }
    });
}


// Новый тест 3 с видеоурока https://www.youtube.com/watch?v=aw-wOOatKNI

function ajax_test_3() {
    let request = CreateRequest();
    let url = location.href;

    request.onreadystatechange = function () {
        // только при состоянии 'complete'
        if (request.readyState == 4) {

        }
    }
    // Запрос на сервер
    request.open('GET', url, false);
    request.send(null);
    alert(request.responseText);
}

// Функция обновления времени на сайте

function showTime() {

    Request = CreateRequest();

    Request.onreadystatechange = function() {
        if(Request.readyState == 4) {
            document.getElementById('time').innerHTML = Request.responseText;
        }
    }
    Request.open("GET", "./getTime.php", true);
    Request.send(null);
}
setInterval('showTime()', 1000);