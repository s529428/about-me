$(document).ready(function(){
    //Loads the basket from the previous session. 
    $("#basket").text(localStorage.getItem("groceryList"));
    //Loads the total amount from the previous session. 
    $("#total_amount").text(localStorage.getItem("totalAmount"));
    //Loads the tax amount from the previous session. 
    $("#tax_amount").text(localStorage.getItem("taxAmount"));
    //Calculation Function
    $("#submitButton").click(function(){
        //Add to the basket
        localStorage.setItem("groceryList", (localStorage.getItem("groceryList") + $("input[name='itemName']").val() + ", "));
        $("#basket").text(localStorage.getItem("groceryList"));
        //Add to the total
        localStorage.setItem("totalAmount", (Number(localStorage.getItem("totalAmount")) + Number($("input[name='itemAmount']").val())));
        $("#total_amount").text(localStorage.getItem("totalAmount"));
        //Add the tax amount
        localStorage.setItem("taxAmount", (Number($("#total_amount").text()) * 0.25));
        $("#tax_amount").text(localStorage.getItem("taxAmount"));
    });

    $("#clearButton").click(function(){

    });
});


