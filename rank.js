let owe = "o";
let message ="";
let selected;
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

    $("#report").click(function(){
        reportForDuty();
    })
})


function officer()
{
    $("input[name=officer]").attr("disabled",false);
    $("input[name=warrant]").attr("disabled",true);
    $("input[name=enlisted]").attr("disabled",true);
    owe="o";
}

function warrant()
{
    $("input[name=officer]").attr("disabled",true);
    $("input[name=warrant]").attr("disabled",false);
    $("input[name=enlisted]").attr("disabled",true);
    owe="w";
}

function enlisted()
{
    $("input[name=officer]").attr("disabled",true);
    $("input[name=warrant]").attr("disabled",true);
    $("input[name=enlisted]").attr("disabled",false);
    owe="e";
}

function reportForDuty() {
    message ="Hello ";
    switch(owe){
        case "o":
            selected = $("input[name=officer]:checked");
            break;

        case "w":
            selected = $("input[name=warrant]:checked");
            break;

        case "e":
            selected = $("input[name=enlisted]:checked");
            break;

        default:
            break;
    }
    message += selected.data("rank");
    message +=` ${$("#name-first").val()} ${$("#name-last").val()}. Welcome Aboard!`;
    $("#name-first").val("");
    $("#name-last").val("");
    $("#rankGreeting").text(message);
}