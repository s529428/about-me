$(document).ready(function(){
    //Loads the basket from the previous session. 
    $("#basket").text(localStorage.getItem("groceryList"));
    //Loads the total amount from the previous session. 
    $("#total_amount").text(localStorage.getItem("totalAmount"));
    //Loads the tax amount from the previous session. 
    $("#tax_amount").text(localStorage.getItem("taxAmount"));
    //Calculation Function
    $("#submitButton").click(function(){
        if($("input[name='itemName']").val() != "" && $("input[name='itemAmount']").val() != ""){
            //Add to the basket
            localStorage.setItem("groceryList", (localStorage.getItem("groceryList") + $("input[name='itemName']").val() + ", "));
            $("#basket").text(localStorage.getItem("groceryList"));
            //Add to the total
            localStorage.setItem("totalAmount", (Number(localStorage.getItem("totalAmount")) + Number($("input[name='itemAmount']").val())));
            $("#total_amount").text("$" + localStorage.getItem("totalAmount"));
            //Add the tax amount
            localStorage.setItem("taxAmount", (Number(localStorage.getItem("totalAmount")) * 0.25));
            $("#tax_amount").text("$" + localStorage.getItem("taxAmount"));
        }
    });

    $("#clearButton").click(function(){
        //Clear the Basket
        localStorage.setItem("groceryList", "");
        $("#basket").text(localStorage.getItem("groceryList"));
        //Clear the Total
        localStorage.setItem("totalAmount", "0");
        $("#total_amount").text("$" + localStorage.getItem("totalAmount"));
        //Clear the Tax
        localStorage.setItem("taxAmount", "0");
        $("#tax_amount").text("$" + localStorage.getItem("taxAmount"));
    });
});

function loadAjaxRec() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajaxresponse.txt", true);
    xhttp.send();
}

