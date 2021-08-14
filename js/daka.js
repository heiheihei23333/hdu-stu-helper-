window.addEventListener('load', function() {
    var group1 = document.querySelector(".group1");
    var radios1 = group1.querySelectorAll('.allmessage-group-content-img');
    var group2 = document.querySelector(".group2");
    var radios2 = group2.querySelectorAll('.allmessage-group-content-img');
    var group3 = document.querySelector(".group3");
    var radios3 = group3.querySelectorAll('.allmessage-group-content-img');
    var group4 = document.querySelector(".group4");
    var radios4 = group4.querySelectorAll('.allmessage-group-content-img');
    var group5 = document.querySelector(".group5");
    var radios5 = group5.querySelectorAll('.allmessage-group-content-img');
    var group6 = document.querySelector(".group6");
    var radios6 = group6.querySelectorAll('.allmessage-group-content-img');
    var group7 = document.querySelector(".group7");
    var radios7 = group7.querySelectorAll('.allmessage-group-content-img');
    var dakabutton = document.querySelector("#daka")
    var dakabuttoninnerHtml = dakabutton.querySelector("span")
    var dakanotice = document.querySelector(".notice-show")
    var body = document.body
    var bgc = document.getElementById("bgc")
    var notdakanotice = document.querySelector(".notdakanotice")
        // 确认信息后确认打卡
    var quit = document.querySelector(".quit")
    var confirm = document.querySelector(".confirm")
    var dakasuccess = document.querySelector(".dakasuccess")
        // 未打卡变已打卡（红变绿）
    var isdaka_img = document.querySelector("#isdaka-img")
    var isdaka_content = document.querySelector("#isdaka-content")
    xuanzhong(radios1);
    xuanzhong(radios2);
    xuanzhong(radios3);
    xuanzhong(radios4);
    xuanzhong(radios5);
    xuanzhong(radios6);
    xuanzhong(radios7);
    dakabutton.addEventListener('click', function() {
        // body.className = "bodyshow";
        dakanotice.classList.add("new");
        bgc.classList.add("new");
        dakanotice.style.visibility = "visible";
        // setTimeout(function() {
        //     bgc.className = "bgc-animate";
        // }, 3000)
        // console.log('daka');
    })
    quit.addEventListener('click', function() {
        dakanotice.style.visibility = "hidden";
        // bgc.style.visibility = "hidden";
    })
    confirm.addEventListener('click', function() {
            dakanotice.style.visibility = "hidden";
            dakasuccess.style.visibility = "visible";
            setTimeout(function() {
                dakasuccess.style.visibility = "hidden";
            }, 1500)
            dakabutton.className = "afterclickdaka";
            dakabuttoninnerHtml.innerHTML = "&nbsp今日已打卡";
            isdaka_img.src = "img/duilv.png";
            isdaka_content.innerHTML = "&nbsp已打卡";
            isdaka_content.style.color = "#07c160";
        })
        // 点击单选
    var timer = setTimeout(function() {
        notdakanotice.style.display = "none"
        clearTimeout(timer)
    }, 2000)

    function deletestyle(obj) {
        for (i = 0; i < obj.length; i++) {
            obj[i].style.backgroundColor = "#fff";
            obj[i].style.borderColor = "#aaa";
        }
    }

    function xuanzhong(obj) {
        for (i = 0; i < obj.length; i++) {
            obj[i].addEventListener("click", function() {
                deletestyle(obj)
                this.style.backgroundColor = "#1e87f0";
                this.style.borderColor = "#1e87f0";
            })
        }
    }

})