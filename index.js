function myFunction() {
  var person = prompt("Please enter your name");
  if (person != null) {
    var per=prompt("start slice")
    var pers=prompt("end slice")
    if((per!=Number)||(pers!=Number))
  {
      alert("enter valid data")
  }
  else
    alert(person.slice(per,pers))
  }
  
}
//myFunction()