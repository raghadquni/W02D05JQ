
$('.bttn').click(function(){
    const v = $("#Addto").val();
    if ($("#Addto").val().length == 0) {
    alert ("Please add Task!");
    }
    else {
    $('.Mylist').append($(`<li id="task"> <p> ${v} <button class="dele" onclick="deleteTask()">delete</button> <button class="ubdate" onclick="updateTask()">Update</button> </li>`));
    }
});


$('.dele').click(function() {
    
})


$('.Clera').click(function() {
    $("li").remove();
})

