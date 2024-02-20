function validate()
{
    let user=document.getElementById("username").value
    let email=document.getElementById("email").value
    let pswd=document.getElementById("password").value
    let cpswd=document.getElementById("cpassword").value
    console.log(user)
    console.log(email)
    console.log(pswd)
    console.log(cpswd)

    checkuser(user)
    checkemail(email)
    checkpswd(pswd)
    checkCpswd(cpswd , pswd)

}

function checkuser(u){
    if(u.length>8 ){
        document.getElementById("username").classList.replace("failure" , "success");
        document.getElementById('user_err').innerHTML="";
    }
    else{
        document.getElementById("username").classList.add("failure");
        document.getElementById('user_err').innerHTML="Invalid Username(must contain 8 letters)";
    }
}


function checkemail(e){
    if(e.length>8  && e.includes('@gmail')){
        document.getElementById("email").classList.replace("failure" , "success");
        document.getElementById('email_err').innerHTML="";
    }
    else{
        document.getElementById("email").classList.add("failure");
        document.getElementById('email_err').innerHTML="Invalid Email(must contain 8 letters and @gmails)";
    }
}

function checkpswd(p){
    if(p.length>8  && p.includes('_')){
        document.getElementById("password").classList.replace("failure" , "success");
        document.getElementById('pswd_err').innerHTML="";
    }
    else{
        document.getElementById("password").classList.add("failure");
        document.getElementById('pswd_err').innerHTML="Invalid Password(must contain 8 letters and '_')";
    }
}

function checkCpswd(cp , pswd){
    if(cp.length>8  && cp!=""){
        document.getElementById("cpassword").classList.replace("failure" , "success");
        document.getElementById('cpswd_err').innerHTML="";
    }
    else{
        document.getElementById("cpassword").classList.add("failure");
        document.getElementById('cpswd_err').innerHTML="Invalid Password(password must be same)";
    }
}