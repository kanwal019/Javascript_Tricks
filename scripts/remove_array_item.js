Array.prototype.removeValue = function(name, value){
   var array = $.map(this, function(v,i){
      return v[name] === value ? null : v;
   });
   this.length = 0;
   this.push.apply(this, array);
}

var countries = {};

countries.results = [
    {id:'AF',name:'Afghanistan'},
    {id:'AL',name:'Albania'},
    {id:'DZ',name:'Algeria'},
    {id:'IN',name:'India'},
    {id:'PK',name:'Pakistan'},
    {id:'SL',name:'Sri Lanka'}
];

$(document).ready(function()
{
    var orgData = "";
    for(var i=0; i<countries.results.length; i++)
    {
        orgData += "<pre>"+countries.results[i].id+" : "+countries.results[i].name+"</pre>";
    }
    $("#original-data").html(orgData);

    countries.results.removeValue('name', 'Albania');

    var newData = "<br/>";
    for(var i=0; i<countries.results.length; i++)
    {
        newData += "<p>"+countries.results[i].id+" : "+countries.results[i].name+"</p>";
    }
    $("#new-data").html(newData);
});
