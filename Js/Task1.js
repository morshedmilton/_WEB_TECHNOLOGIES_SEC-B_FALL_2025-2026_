function validateform(event){

    const uname=event.target.uname.value;
    const pid=document.getElementById("pid");

    if(uname==""){

        pid.textContent ="Username is empty";
        pid.style.color="red";
        return false;
    }


    let allAllowed = true;
    for (let i = 0; i < uname.length; i++) {
        const ch = uname[i];
        if (!((ch >= 'a' && ch <= 'z') ||
              (ch >= 'A' && ch <= 'Z') ||
              (ch === '.') || (ch === ' ') ||
              (ch === '-'))) {
            allAllowed = false;
            break;
        }
    }

    if (!allAllowed) {
        pid.textContent = "Can contain a-z or A-Z or dot(.) or dash(-)";
        pid.style.color = "red";
        return false;
    }


    if(!((uname[0]>='a' && uname[0]<='z') ||
        (uname[0]>='A' && uname[0]<='Z')) ){

        pid.textContent="Must start with a letter ";
        pid.style.color="red";
        return false;
    }


    if(uname.length <2){

        pid.textContent="Username Contains at least two words";
        pid.style.color="red";
        return false;
    }
    
    pid.textContent="";
     console.log('All validation Passed. Form Submitted')
    return true;


}