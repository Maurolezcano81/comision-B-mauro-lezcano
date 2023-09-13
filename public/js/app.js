$(document).ready(function() {
    $('#botonCrearPost').on('click', function() {
        window.location.href = '/crear-post';
    });

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