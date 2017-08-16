//business logic
var leapYear = function(year) {
  if (year % 4 === 0){
    return true;
  }
  else {
    return false;
  }

};


//userinterface logic
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#year").val());
    var result = leapYear(year)
    console.log(result);




  });
});
