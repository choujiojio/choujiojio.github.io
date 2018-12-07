function JSQ()
{
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    // add a zero in front of numbers < 10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('jsq').innerHTML = yyyy + "年" + mm + "月" + dd + "日" + " " + h + ":" + m + ":" + s;
    t = setTimeout('JSQ()', 500);
}

function checkTime(i)
{
    if (i < 10) { i = "0" + i; }
    return i;
}
