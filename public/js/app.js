$(document).ready(function() {

    // Evento para redirigir a la pagina para crear post
    $('#botonCrearPost').on('click', function() {
        window.location.href = '/crear-post';
    });

    // Evento para borrar con los botones que tienen .borrar
    $('.borrar').click(function(event) {
        var postId = $(this).val(); // Uso jquery para capturar el parametro del id del boton que se apreta;
            $.ajax({
            url: '/eliminar/' + postId,
            type: 'DELETE',
            success: function(result) {
                window.location.href = '/';
            },
            error: function(err) {
                console.error(err);
            }
        });
    });

});