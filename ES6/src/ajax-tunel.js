          var data = { city: "Васюки", date: "20120318" };
        $.get("http://t2.alexlans.com/test/getForecast.json", data, success4, "json");
       
        // $.ajax({
        //     type: "GET",
        //     url: "http://t2.alexlans.com/test/getForecast.json",
        //     dataType: "json",
        //     success: success
        //     // function success3(data) {
        //     //     console.log('Success3!!!');
        //     //     document.write(data);
        //     // }
        // });

        function success4(forecastData) {
            console.log('Success ajax-tunel!!!');
            var forecast = forecastData.city + ", прогноз на " + forecastData.date;
            forecast += ": " + forecastData.forecast + ". Максимальная температура: " + forecastData.maxTemp + "C";
            console.log(forecast);
        }