// instancia jquery e evita conflitos
//jQuery ( function($){
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') //tag
    let itens = $('.featured-item') //class
    let destaques = $('#featured') //id

 
    //Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link')

    $('.featured-item:first h4').append('<span class="badge bg-success m-1">Novo</span>')
    //$('.featured-item:first h4').start('<span class="badge bg-success m-1">Novo</span>')
    //$('.featured-item:first h4').html('<span class="badge bg-success m-1">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide('active')
    // $('.featured-item:first h4').show('active')
    // $('.featured-item:first h4').fadeIn('2000')
    // $('.featured-item:first h4').fadeOut('2000')
    // $('.featured-item:first h4').css('color', '#f00')
   /*  $('.featured-item h4').dblclick (function(){
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        })
    
    }) */

 //Manipulação de eventos
 $('.featured-item a').on('blur', function(event){

    event.preventDefault();
    alert('Produto esgotado');


 })

$('.navbar-toggler').click(function(){
    $('#navbarResponsive').toggle();
});

$('.nav-item').click(function(){
    $('#navbarResponsive').hide();
})

/*
 * Callback
 * Entendendo ações que começam ao término de outra
*/
/* $('.featured-item:nth(1)')
    .hide(500, function(){
        // este é o callback
        console.log($(this).find('h4').text() + ' esgotado')
    })
    .show(500, function(){
        console.log($(this).find('h4').text() + ' em estoque')
    }) */

/*
 * Animações
*/
/* const duracao = 1000
$('.featured-item:nth(0)')
.hide(duracao)
.show(duracao)
.fadeOut(duracao)
    .fadeIn(duracao)
    .toggle(duracao)
    .toggle(duracao)
    
    $('#form-submit').on('click', function(e){
        
        e.preventDefault()
        
        if($('#email').val() != ''){
            $('#email').animate({
                opacity: "toggle",
                top: "-50px"
            }, duracao, function(){
                console.log($(this).val())
            })
        
        }
        
        
    });
    
    */
   /*
   * Event listener .nav-modal-open 
   */
  
  $('.nav-modal-open').on('click', function(e){
      
      e.preventDefault();
      
      let elem = $(this).attr('rel')
      
      $('.modal-body').html($('#' + elem).html())
      $('.modal-header h5.modal-title').html($(this).text())
      
      let myModal = new bootstrap.Modal($('#modalId'))
      
      myModal.show()
      
    })
    
    function validate(elem){
        if (elem.val() == ''){
    
            console.log('O campo de ' + elem.attr('name') + ' é obrigatório.')

            elem.parent().find('.text-muted').show()
    
            elem.addClass('invalid')
    
            return false
        } else {
            elem.removeClass('invalid')
            elem.parent().find('.text-muted').hide()
        }
    
    }

    $('body').on('blur', '#contato-nome', function(){
        if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $(this).removeClass('invalid')

            $(this).parent().find('.text-muted').hide()

        } else {
            $(this).parent().find('.text-muted').show()
    
            $(this).addClass('invalid')
        }

    })
    
    $('body').on('blur', '#contato-email', function(){
        if ($(this).val().match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')){

            $(this).removeClass('invalid')

            $(this).parent().find('.text-muted').hide()

        } else {
            $(this).parent().find('.text-muted').show()
    
            $(this).addClass('invalid')
        }
    })
    
    $('body').on('submit', '.modal-body .form', function(e){

        
        const inputName = $('#contato-nome')
        const inputEmail = $('#contato-email')
        
        if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
            e.preventDefault();
            console.log('Campos inválidos')
            return false
            
        } else {
            $(this).submit()
        }

    })

    
    
    
    $('#modalId').on('shown.bs.modal', function (){
        $('#date').mask('00/00/0000');
        $('#cep').mask('00000-000');
        $('#phone').mask('00000-0000');
        $('#cpf').mask('000.000.000-00');
        
    })

    $('body').on('blur', '#date, #cep, #phone, #cpf', function(){
        validate($(this))
    })
    
    $('body').on('focus', '#date', function(){
        $(this).datepicker({
            closeText: "Fechar",
            prevText: "Anterior",
            nextText: "Próximo",
            currentText: "Hoje",
            monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
            monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
            dayNames: [
                "Domingo",
                "Segunda-feira",
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "Sábado"
            ],dayNamesShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ],
            dayNamesMin: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy"
        });
        
        
    })

    
    
})
    

