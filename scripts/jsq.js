function JSQ()
{
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var oldTime = new Date(Date.parse("4/26/2018"));
    var endTime = new Date(Date.parse("4/26/2019"));
    var diffTime = today - oldTime;
    var dayOfWay = diffTime / 1000 / 60 / 60 / 24;
    var deadline = endTime - today;
    var dayOfDead = deadline / 1000 / 60 / 60 / 24;
    // add a zero in front of numbers < 10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('jsq').innerHTML = yyyy + "年" + mm + "月" + dd + "日" + " " + h + ":" + m + ":" + s;
    document.getElementById('dayofway').innerHTML = dayOfWay + "天";
    document.getElementById('deadline').innerHTML = dayOfDead + "天";
    t = setTimeout('JSQ()', 500);


}

function checkTime(i)
{
    if (i < 10) { i = "0" + i; }
    return i;
}
