function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='a43708429c614e809a65552188848433';
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(response=>response. json())
    .then (data => {
        var place=data['name']
        var overall=data.weather[0].description;
        var long= data['coord']['lon']
        var lat= data.coord.lat
        var temp = data['main']['temp']
        var min = data['main']['temp_min']
        var max = data['main']['temp_max']
        var hum = data['main']['humidity']
        var prs=data['main']['pressure']
        document.getElementById("place").innerHTML="Place : "+place;
        document.getElementById("overall").innerHTML="Overview : "+overall;
        document.getElementById("long").innerHTML="Longitude : "+long;
        document.getElementById("lat").innerHTML="Latitude : "+lat;
        document.getElementById("temp").innerHTML="Current Temperature : "+temp;
        document.getElementById("min").innerHTML="Minimum Temeperature : "+min;
        document.getElementById("max").innerHTML="Maximum Temperature : "+max;
        document.getElementById("humidity").innerHTML="Humidity : "+hum;
        document.getElementById("pressure").innerHTML="Pressure : "+prs;
    })
}
function clearresult(){
        document.getElementById("city").value='';
        document.getElementById("place").innerHTML="";
        document.getElementById("overall").innerHTML="";
        document.getElementById("long").innerHTML=""
        document.getElementById("lat").innerHTML="";
        document.getElementById("temp").innerHTML="";
        document.getElementById("min").innerHTML="";
        document.getElementById("max").innerHTML="";
        document.getElementById("humidity").innerHTML="";
        document.getElementById("pressure").innerHTML="";
}