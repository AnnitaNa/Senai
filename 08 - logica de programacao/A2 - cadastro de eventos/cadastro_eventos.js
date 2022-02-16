
function getDate() {
    const date_event = new Date(document.querySelector("#data").value);
    const today = new Date();
    const diff = date_event.getTime() - today.getTime();

    
    if (diff >0) {
        
        document.getElementById("data-result").innerHTML = "you can upload the event";
    } else {
        document.getElementById("data-result").innerHTML = "The time has already passed";
       
    }

}