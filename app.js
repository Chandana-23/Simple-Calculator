var result = document.getElementById('result');

function pushBtn(object)
{
    var pushed = object.innerHTML;
    if (pushed=='=')
    {
        try{
            result.innerHTML = eval(result.innerHTML);
        }
        catch(err){
            result.innerHTML = 'Error';
        }
    }
    else if (pushed=='AC'){
        result.innerHTML='0';
    }
    else{
        if(result.innerHTML=='0')
        {
            result.innerHTML = pushed;
        }
        else{
            result.innerHTML+=pushed;
        }
    }
}


