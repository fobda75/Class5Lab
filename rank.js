$(document).ready(function(){
    $("#owe-officer").click(function () {
        officer();
    });

    $("#owe-enlisted").click(function () {
        enlisted();
    });

    $("#owe-warrant").click(function () {
        warrant();
    });
})


function officer()
{
    $("input[name=officer]").attr("disabled",false);
    $("input[name=warrant]").attr("disabled",true);
    $("input[name=enlisted]").attr("disabled",true);
}

function warrant()
{
    $("input[name=officer]").attr("disabled",true);
    $("input[name=warrant]").attr("disabled",false);
    $("input[name=enlisted]").attr("disabled",true);
}

function enlisted()
{
    $("input[name=officer]").attr("disabled",true);
    $("input[name=warrant]").attr("disabled",true);
    $("input[name=enlisted]").attr("disabled",false);
}