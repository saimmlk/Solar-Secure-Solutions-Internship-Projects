$.ajax({
    type:'get',
    url:'https://data.covid19india.org/v4/min/data.min.json',

    success:function(resp){
        console.log(resp.kl)
    },

    error:function(err){
        console.log(err)
    }
    
})