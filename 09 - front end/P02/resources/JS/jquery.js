


$(document).ready (()=> {
    $(".dropdown-menu-toggle").on("mouseenter", (event)=> {
        $(event.currentTarget).siblings().show();
        $(event.currentTarget).addClass("selected-menu")
    })

    $(".dropdown-container").on("mouseleave", (event)=> {
        $(event.currentTarget).find(".dropdown-items").hide();
        $(event.currentTarget).find(".dropdown-menu-toggle").removeClass("selected-menu")
    })
    });
