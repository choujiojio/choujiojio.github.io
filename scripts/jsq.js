function JSQ()
{
    
    var oneYearAfterTheComplete =new Date("2019-04-26 00:28:21");
    var today;
    

    var s = setInterval(function(){
        today=new Date();
        if(oneYearAfterTheComplete.getTime()-today.getTime()>0){
            passtime(today,oneYearAfterTheComplete,2);
        } else {
            clearInterval(s);
        }
        
    },500);



    execTimeChange();
}

function execTimeChange()
{
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    
    //returnCitySN['cip'] + returnCitySN['cname']
    
    
    // add a zero in front of numbers < 10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('jsq').innerHTML = yyyy + "年" + mm + "月" + dd + "日" + " " + h + ":" + m + ":" + s;
    var completeTime =new Date("2018-04-26 00:28:21");
    
    passtime(completeTime,today,1);
    
    var t=setTimeout('execTimeChange()', 500);

}

function checkTime(i)
{
    if (i < 10) { i = "0" + i; }
    return i;
}

function passtime(beginDT,endDT,type)
{
    
    var datediff =  endDT.getTime()-beginDT.getTime();          //相差总的毫秒数
    var datediff_day_ms = datediff%(24*3600*1000);              //除天数外剩余的毫秒数
    var datediff_hour_ms = datediff_day_ms%(3600*1000);         //除小时外剩余的毫秒数
    var datediff_minute_ms = datediff_hour_ms%(60*1000);        //除分钟外剩余的毫秒数

    var datediff_dd = Math.floor(datediff/1000/3600/24);        //相差天数
    var datediff_h = Math.floor(datediff_day_ms/(3600*1000));   //相差小时数
    var datediff_m = Math.floor(datediff_hour_ms/(60*1000));    //相差分钟数
    var datediff_s = Math.round(datediff_minute_ms/1000);       //相差秒数

    document.getElementById(type==1?'pass_time':'remaining_time').innerHTML = datediff_dd+"天"+datediff_h+"小时"+datediff_m+"分钟"+datediff_s+"秒";
}

function readXml()
{
    

}


