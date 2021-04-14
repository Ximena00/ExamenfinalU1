var app ={};
        var traer = function(datos){
        console.log(datos);
        app.conti=datos;
        var html = ""
        
        html+= "<th>calle</th><th>CP</th><th>municipio</th>"
        app.conti.map(inform => {
        html+="<tr><td>"+inform.calle+"</td>";
        html+="<td>"+inform.CP+"</td>";
        html+="<td>"+inform.municipio+"</td></tr>";
         })

        document.getElementById("results").innerHTML = html;
}
