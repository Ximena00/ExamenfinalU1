var app ={};
        var traer = function(datos){
        console.log(datos);
        app.conti=datos;
        var html = ""
        html+= "<thead><tr><th>calle</th><th>CP</th><th>municipio</th></tr></thead>"
        
        app.conti.map(inform => {
        html+="<tr><td>"+inform.calle+"</td>";
        html+="<td>"+inform.CP+"</td>";
        html+="<td>"+inform.municipio+"</td></tr>";
        
         })
        html+= "<tfood><tr><th>total</th><th></th><th></th></tr>"                
        document.getElementById("results").innerHTML = html;
        SumarColumna('results', 1);
}
