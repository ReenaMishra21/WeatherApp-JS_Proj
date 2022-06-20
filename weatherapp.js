function changeMode(){
    var x = document.getElementsByClassName('decor')[0];
    x.classList.toggle("mydark");
}

function search(){
    var cityname = document.getElementById('city').value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=799696eae95b4f64668a81fb2632a3ca`;
    
    $('#display').find('div').remove();
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        var degree = parseInt(data.main.temp)-273;
        var date = new Date();
            var element=`
                <div>
                    <h5>${data.name}</h5>
                    <h1>${degree}&degC</h1>
                    <p>${date}</p>
                    <div class="row">
                        <div class="col-6"><p>Humidity : ${data.main.humidity}</p></div>
                        <div class="col-6"><p>Desc : ${data.weather[0].main}</p></div>
                    </div>
                    
                </div>
                `
                $('#display').append(element)
    })
        

}