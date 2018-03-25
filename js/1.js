var standard_email = /^[a-zA-Z0-9]+@(([a-zA-Z0-9])+\.)+([a-zA-Z]{2,4})+$/;
var standard_password = /^[a-zA-Z]\w\.{6,16}$/;
var flag = 0;
var check1 = 0;
var check2 = 0;
function checkEmpty(){
    var user_email = document.getElementById("inputEmail").value;
    var user_password = document.getElementById('inputPassword').value;
    if(! user_email.trim().length && !user_password.trim().length) {alert("请输入邮箱和密码");}
    else if(!user_password){alert("请输入密码");}
    else if(!user_email){alert("请输入邮箱");}
    else{
        return 0;
    }
}
function checkEmail(){
    var user_email = document.getElementById("inputEmail").value;
    if(!standard_email.test(user_email)){
        flag++;
        check1++;
    }
    Alert();
}
function checkPassword() {
    var user_password = document.getElementById('inputPassword').value;
    if(!standard_password.test(user_password)){
        flag ++;
        check2 ++;
    }
    Alert();
}
function Alert() {
    if(flag == 2){alert("邮箱和密码格式错误");}
    else if(flag == 1){
        if(check1 == 1){alert("邮箱格式错误"); check1 = 0;}
        if(check2 == 1){alert("密码格式错误"); check2 = 0;}
        return 0;
    }
}
function check() {
    checkEmpty();
    checkEmail();
}

