var dep = "B31700" //$.url.param("dep"); //"B32800";

$(window).load(function () {
    ////initializeCode
    //if (!dep || isNaN(dep)) {
    //    window.location.replace("../home.aspx");
    //}
    //else {
    //    // 消防/333編組內容 
    //    GetDT(dep);
    //}
    alert(dep);
    GetDT(dep);    
});



$(function () {
});


function GetDT(dep) {
    $.ajax({
        type: "POST",
        url: "../home.aspx/DDataBind",
        data: "{dep: '" + dep + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        timeout: 60000,
        success: function (result) {
            var data = JSON.parse(result.d);

            if (data && data.length >= 0)
            {
                // 白班
                // removes existing rows from table except header row
                $("#detail_tableD tr:gt(0)").empty();
                //apply tmpl plugin to <script> and append result to table
                $("#dtTemplateD").tmpl(data).appendTo("#detail_tableD");

                $("#detail_tableD").find('tr:first td:first-child').before(
                        '<td rowspan="' + data.filter(function (value) { return value.classid === "0" }).length + '" style="width:3%"  class="class_title">' +
                            '<span class="class_name" Width="22px" style="font-family:微軟正黑體; color:#1BB5C6;">白班</span>' +
                        '</td>');

                // 小夜班
                // removes existing rows from table except header row
                $("#detail_tableE tr:gt(0)").empty();
                //apply tmpl plugin to <script> and append result to table
                $("#dtTemplateE").tmpl(data).appendTo("#detail_tableE");
                
                $("#detail_tableE").find('tr:first td:first-child').before(
                        '<td rowspan="' + data.filter(function(value) { return value.classid === "1" }).length + '" style="width:3%"  class="class_title">' +
                            '<span class="class_name" Width="22px" style="font-family:微軟正黑體; color:#ff9800;">小夜班</span>' +
                        '</td>');

                //大夜班
                // removes existing rows from table except header row
                $("#detail_tableN tr:gt(0)").empty();
                //apply tmpl plugin to <script> and append result to table
                $("#dtTemplateN").tmpl(data).appendTo("#detail_tableN");

                $("#detail_tableN").find('tr:first td:first-child').before(
                    '<td rowspan="' + data.filter(function (value) { return value.classid === "2" }).length + '" style="width:3%"  class="class_title">' +
                        '<span class="class_name" Width="22px" style="font-family:微軟正黑體; color:#ff5722;">大夜班</span>' +
                    '</td>');

                loadDT(dep); // 定時重新整理
            }
            else {
                return false;
            }
        },
        error: function (xhr) {
            console.log(xhr.responseText);
        }
    });
}


function loadDT(dep) {
    var NowDate = new Date();
    document.getElementById('Update_Time').innerHTML = formatDate(NowDate) + ' ' + NowDate.getHours() + ":" + NowDate.getMinutes() + ":" + NowDate.getSeconds();;

    // We use a trick to make our 'interval' var kinda static inside the function.
    // Its value will not change between calls to loadDT().
    var interval = null;

    // This is the core of a trick: replace outer function with inner helper 
    // that remembers 'interval' in its scope.
    loadDT = realLoadDT;
    return realLoadDT(dep);

    function realLoadDT(dep) {
        var speed = 300000;

        // Remove old interval if it exists, then set up a new one
        interval && clearInterval(interval);
        interval = setInterval(reloadData, speed);

        function reloadData() {
            // ... your code, but no do nothing with interval here ...
        }
    }
}

