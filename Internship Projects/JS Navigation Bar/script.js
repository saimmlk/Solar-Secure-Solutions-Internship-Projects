let navStatus=0;

function openNav(){
    if(!navStatus){
        $(".main_div").css('width','100%');
        $("li").css('display','block');
        navStatus=1;
    }
    
    else
    {
        $('.main_div').css('width','0');
        $('li').css('display','none')
        navStatus=0;
    }
    
}