let inputs = document.getElementsByTagName("input");
let labels = document.getElementsByTagName("label");
let outputs = document.getElementsByTagName("span");
let btn  = document.getElementById("btn");
let dayError = document.getElementById("day-error");
let monthError = document.getElementById("month-error");
let yearError = document.getElementById("year-error");


let cday , cmonth , cyear;
let day , month ,year, nd , cd , rd , rdays , rmonths ,ryears;
btn.onclick = function(){
    // day check 
    if(inputs[0].value == ""){
        dayError.innerText = "This field is required";
        inputs[0].classList.add("border-[#ff5757]");
        labels[0].classList.add("text-[#ff5757]");
    }else if(inputs[0].value > 31 || inputs[0].value < 1) {
        dayError.innerText = "Must be a valid day";
        inputs[0].classList.add("border-[#ff5757]");
        labels[0].classList.add("text-[#ff5757]");
    }else{
        dayError.innerText = "";
        inputs[0].classList.remove("border-[#ff5757]");
        labels[0].classList.remove("text-[#ff5757]");
        day = inputs[0].value;
    }
    // month check 
    if(inputs[1].value == ""){
        monthError.innerText = "This field is required";
        inputs[1].classList.add("border-[#ff5757]");
        labels[1].classList.add("text-[#ff5757]");
    }else if(inputs[1].value > 12 || inputs[1].value < 1) {
        monthError.innerText = "Must be a valid month";
        inputs[1].classList.add("border-[#ff5757]");
        labels[1].classList.add("text-[#ff5757]");
    }else{
        monthError.innerText = "";
        inputs[1].classList.remove("border-[#ff5757]");
        labels[1].classList.remove("text-[#ff5757]");
        month = inputs[1].value
    }
    // year check 
    if(inputs[2].value == ""){
        yearError.innerText = "This field is required";
        inputs[2].classList.add("border-[#ff5757]");
        labels[2].classList.add("text-[#ff5757]");
    }else if(inputs[2].value < 1000) {
        yearError.innerText = "Must be a valid year";
        inputs[2].classList.add("border-[#ff5757]");
        labels[2].classList.add("text-[#ff5757]");
    }else{
        yearError.innerText = "";
        inputs[2].classList.remove("border-[#ff5757]");
        labels[2].classList.remove("text-[#ff5757]");
        year = inputs[2].value
    }
    if(dayError.innerText == "" && monthError.innerText == "" && yearError.innerText ==""){
        nd = new Date(`${year}-${month}-${day}`).getTime();
        cd = new Date().getTime();
        rd = new Date(cd-nd);
        ryears = parseInt(rd/1000/60/60/24/365);
        rmonths = parseInt(rd/1000/60/60/24/30) - (ryears *12);
        rdays = parseInt(rd/1000/60/60/24) - (ryears * 12 *30);
        outputs[0].innerText = ryears;
        outputs[1].innerText = rmonths;
        outputs[2].innerText = parseInt(rdays/30) ;

    }
    
}

