$(document).ready(function () {
    $("#btnregistrar").click(function (e) { 
        e.preventDefault();
        registrar();
    });

    $(".opcion-eliminar").click(function (e) { 
        e.preventDefault();
        var fila =$(this).parents().get(1);
        fila.remove();
    });

$("body").on("click", ".opcion-eliminar", function () {
    
});

});

function registrar()
{
    var nombre = $("#txtnombre").val();
    var correo = $("#txtcorreo").val();
    var fecha = $("#txtfecha").val();
    var pais = $("#cbopais").val();
    var sexo = $("input:radio[name=customRadio]:checked").val();

    //creación de fila

    var fila="";
    fila+="<tr>";    
    fila+="<td>"+nombre+"</td>";    
    fila+="<td>"+correo+"</td>";    
    fila+="<td>"+fecha+"</td>";    
    fila+="<td>"+pais+"</td>";    
    fila+="<td>"+sexo+"</td>";    
    fila+="<td>"+'<button class="btn btn-danger btn-sm opcion-eliminar">x</button>'+ "</td>";
    fila+="</tr>"

   //agregar fila a tbody

    $("#tbldatos").append(fila);




    
    console.log("Nombre: "+nombre);
    console.log("Correo: "+correo);
    console.log("F. Nacimiento: "+fecha);
    console.log("País: "+pais);
    console.log("Sexo: "+sexo);


}