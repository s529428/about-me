$(document).ready(function(){
    $("#submitButton").click(function(){
        $("#basket").text( $("#basket").text() + $("input[name='itemName']").val() + ", ");
        $("#total_amount").text(Number($("#total_amount").text()) + Number($("input[name='itemAmount']").val()));
        $("#tax_amount").text(Number($("#total_amount").text()) * 0.25);
    });
});

