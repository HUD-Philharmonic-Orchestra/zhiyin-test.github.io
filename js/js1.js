
         function judge(){

           var na=document.forms["Form"]["Name"].value;
           var kn=document.forms["Form"]["Keynum"].value;
           if(na==""||kn=="")
            {
                alert("用户名或密码不能为空！");
                 return false;
            }
           
         }
         function Reset(){location.reload()}


var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
    var d=new Date();
    var t=d.toLocaleTimeString();
    document.getElementById("demo").innerHTML=t;
}

        function setCookie(name, value, expiredays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiredays);
            document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate
                .toGMTString()); //创建cookie
        }

        function getCookie(name) //获取cookie
        {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(name + "=");
                if (c_start != -1) {
                    c_start = c_start + name.length + 1;
                    c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) c_end = document.cookie.length;
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return "";
        }

        function checkCookie() //检查cookie是否存在，若存在，读取出来
        {
            var userName = document.getElementById("Name");
            var password = document.getElementById("Keynum");
            var UValue = getCookie(userName.id);
            var PValue = getCookie(password.id);
            if (UValue != null && UValue != "" && PValue != null && PValue != "") {
                userName.value = UValue;
                password.value = PValue;
                location.repalce("index.html")；
            }
            location.repalce("index.html")；
        }
        function saveCookie() { //保存cookie
            var UName = document.getElementById("userName");
            var PName = document.getElementById("password");
            if (UName.value == "") {
                alert("请输入用户名！");
            } else if (PName.value == "") {
                alert("请输入密码！");
            } else if (confirm("是否保存用户名密码？")) {
                setCookie(UName.id, UName.value, 30);
                setCookie(PName.id, PName.value, 30);
                location.repalce("index.html")；
            }
            location.repalce("index.html")；
        }


         function judge_zhaoxin(){

           var na=document.forms["Form"]["Name"].value;
           var tn=document.forms["Form"]["telnum"].value;
           if(na==""||tn=="")
            {
                alert("有必填项目未填");
                 return false;
            }
         }
         function Reset(){location.reload()}

         function judge_connect(){

           var na=document.forms["Form"]["Name"].value;
           var tn=document.forms["Form"]["Telnum"].value;
           if(na==""||tn=="")
            {
                alert("有必填项目未填");
                 return false;
            }
           
         }
         function Reset(){location.reload()}
