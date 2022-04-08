


$(document).ready (()=> {

    $(".dropdown-menu-toggle").on("mouseenter", (event)=> {
        $(event.currentTarget).siblings().show();
        $(event.currentTarget).addClass("selected-menu");
    })

    $(".dropdown-container").on("mouseleave", (event)=> {
        $(event.currentTarget).find(".dropdown-items").hide();
        $(event.currentTarget).find(".dropdown-menu-toggle").removeClass("selected-menu");
    })

    //validade registration password
    $("#confirm-password").on("keyup", function () {
            let password = $("#Pass").val();
            let confpass = $("#confirm-password").val();
            if (password != confpass) {
                $("#check-password").html("As senhas são diferentes!").css("color","red");
            } else {
                $("#check-password").html("A senha foi confirmada com sucesso!").css("color","green");
            }
        })

});
