function disp(value){
    document.getElementById("textarea").value+=value
}

function cal()
{
    let textval=document.getElementById("textarea").value;
    let output=eval(textval);
    document.getElementById("textarea").value=output;

}
function clr()
{
    document.getElementById("textarea").value="";
}
