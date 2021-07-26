const submit = document.getElementById('submit');
const un = document.getElementById('un');
const pw = document.getElementById('pw');
const link = document.getElementById('submitLink');


un.addEventListener("input", (unvalue) => {
    const unValue = unvalue.currentTarget.value;
    if(unValue === ""){
        pw.disabled = true;
    }else{
        pw.disabled= false
    }
});

pw.addEventListener("input", (pwvalue) => {
    const pwValue = pwvalue.currentTarget.value;
    if(pwValue === ""){
        submit.disabled = true;
        link.style.visibility= "hidden";
        submit.style.color= "grey";
    }else{
        submit.disabled = false;
        submit.style.color= "white";
        link.style.visibility= "visible";
    }
});


//function linkclick(){
//    document.write("<h1 style=\"color: red; position: absolute; top: 50%; left: 50%;   transform: translate(-50%, -50%);\" >Hello</h1>")
//}