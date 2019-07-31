$(document).ready(function () {
    $(".left_menu_click").click(function () {
        $("#left_menu").toggle("slide");
    });
    $("#menu_img_click").click(function () {
        $("#left_menu").toggle("slide");
    });
});

$(function () {
    ShowTime();
});


function ShowTime() {
    
    var NowDate = new Date();
    var d = NowDate.getDay();
    var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    //document.getElementById('lblDate').innerHTML = '目前時間：' + NowDate.toLocaleString() + '（' + dayNames[d] + '）';
    document.getElementById('lblDate').innerHTML = formatDate(NowDate) + '（' + dayNames[d] + '）';   
    //setTimeout('ShowTime()', 1000);
}


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
