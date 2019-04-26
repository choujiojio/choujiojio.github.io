var CompleteYearNum;

function JSQ()
{
    
    //计算距离完结N年的剩余时间
    calcNYear_RemainingTime(0);

    //计算已完结的时间
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

function calcDiffYear(beginDT,endDT)
{
    var beginDTYear = beginDT.getFullYear();
    var endDTYear = endDT.getFullYear();

    //如果到了4月26号，就默认已经到了一周年
    if(endDT.getMonth+1<=4 && endDT.getDate()<26) 
    return endDTYear-beginDTYear;

    return endDTYear-beginDTYear+1;
}

function mouseover()
{
    var completeYear =document.getElementById("completeYear");
    completeYear.style.cssText="cursor:pointer";    

}

function mouseclick()
{
    var nYear = prompt("你想看距离完结几周年的剩余时间?",CompleteYearNum+1);
    var reg = /^[1-9]\d*$/;
    if (nYear) {
        if(!reg.test(nYear))
        {
            alert("只能填正整数啊，马飞！");
            return;
        }
        calcNYear_RemainingTime(parseInt(nYear));
    } 
}
var s;
function calcNYear_RemainingTime(nYear)
{
    var completeTime = new Date("2018-04-26 00:28:21");
    
    var today=new Date();
    
    CompleteYearNum=calcDiffYear(completeTime,today);

    if(nYear!=0) 
    {
        if(nYear<CompleteYearNum){
            alert("只能是大于或等于"+CompleteYearNum+"周年的时间！");
            return;
        }else{
            CompleteYearNum=nYear;
            clearInterval(s);
        }
        
    }
    
    var CompleteNYearTime = new Date(completeTime.setFullYear(completeTime.getFullYear()+CompleteYearNum));

    document.getElementById("completeYear").innerHTML=CompleteYearNum;

    s = setInterval(function(){
        today=new Date();
        if(CompleteNYearTime.getTime()-today.getTime()>0){
            passtime(today,CompleteNYearTime,2);
        } else {
            clearInterval(s);
        }
        
    },500);
}

