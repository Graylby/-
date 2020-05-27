$(document).ready(function(){
    var text="";
    $(".item_search").on("click",function () {
        text=$(this).siblings("div").children().text();
        $("#input_search").val(text);
    })

});