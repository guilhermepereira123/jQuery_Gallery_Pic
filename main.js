$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancel_button').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const addressNewImg = $('#new_img').val();
        const newIt = $('<li style="display: none"></li>');
        
        $(`<img src="${addressNewImg}"/>`).appendTo(newIt);

        $(`
        <div class="overlay_img_link">
            <a href="${addressNewImg}" target="_blank" title="Ver imagem tamanho real">
                Ver imagem tamanho real
            </a>
        </div>
        `).appendTo(newIt);

        $(newIt).appendTo('ul');
        $(newIt).fadeIn(1000);
        $('#new_img').val('');
    })
})