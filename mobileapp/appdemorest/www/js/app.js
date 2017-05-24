function getTemperatureC1(){
    $.ajax({
    type: "GET",
    url: "http://localhost:8080/temperature/c1",
    dataType:"json",
    crossDomain: true,
    success: function(arg){
        console.log(arg.temperature);
        $("#tempvalue").text(arg.temperature);
    },
    error: function(){

    }
});
};


getTemperatureC1();

setInterval(function(){
  getTemperatureC1();
},3000);


function allumeLampe(){

  $.ajax({
  type: "POST",
  url: "http://localhost:8080/relai/r1",
  data: '{"state":"on"}',
  dataType:"json",
  crossDomain: true,
  success: function(arg){
    
  },
  error: function(){

  }
});
};
