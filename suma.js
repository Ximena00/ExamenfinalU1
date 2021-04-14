function SumarColumna(grilla, columna) {
 
    var resultVal = 0.0; 
         
    $("#" + grilla + " tbody tr").not(':first').not(':last').each(
        function() {
         
            var celdaValor = $(this).find('td:eq(' + columna + ')');
            
            if (celdaValor.val() != null)
                    resultVal += parseFloat(celdaValor.html().replace(',','.'));
                     
        } //function
         
    ) //each
    
    $("#" + grilla + " tbody tr:last td:eq(" + columna + ")").html(resultVal.toFixed(2).toString().replace('.',','));   
 
}