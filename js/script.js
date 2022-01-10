$(document).ready(function () {
    $("#view").click(function (event) {
        event.preventDefault();
        const first =$("#first").val()
        $("#result").text(first).toggle() 
        $("#first").val("");
    });
    $("#save").click(function(event){
        event.preventDefault();
        const first =$("#first").val()
        const myURL =$("#second").val()
        let myLink="<a href='"+myURL+"'>"+first+"</a>"
        let myRow="<div class='row' > <div class='col-6'> <h4>" + myLink + "</h4></div><div class='col-6'><button class='btn btn-outline-primary'>Delete</button></div></div>";
        $("#box2").append(myRow)      
       
    })
});