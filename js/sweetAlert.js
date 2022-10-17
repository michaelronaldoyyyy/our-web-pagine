(async()=>{ // nos trae el valor de pais xon el async y await
    const {value:pais}=await Swal.fire({

        title:'bienvenida',
        text:'hola mi niña esta es una alerta para recordarte lo lindos que somos',
        // html:'<b class="rojo">hola!</b>'
    
        // icon: '', //el signo que sale arriba
        confirmButtonText: 'seleccionar', //texto del boton 
        footer:'<span class = "rojo">esta es informacion importante </span>',//mensaje de pie de pagina del mensaje
        // width:'50%', //el tamaño
        padding:'1rem', //los margenes 
        //background:'#000', //color de fondo del mensaje
        // grow:'fullscreen', tambien es el tamaño del mensaje
        backdrop: true, // lo de atras se vera oscuro 
        timer:20000, //tiempo del mensaje
        timerProgressBar: true, //muestra eltiempo que se muestra el mensaje
        //toast: true, //hace que la alerta sea mas pquñay compacta
        position:'center', //posicion del mensaje
        allowOutsideClick: true, //que no puedan dar clic afuera
        allowEscapeKey: false,
        allowEnterKey:false,
        stopKeydownPropagation:true, //los eventos de teclado no van a funcionar para la pagina 
    
        input:'select',
        inputPlaceholder:'selecciona uno ',
        inputValue:'',
        inputOptions:{
            amor_de_tu_vida1:'michael',
            amor_de_tu_vida2:'stiven'
        },
        
        // customClass:{ //son estilos que le podemos dar a las clases
        	//container:'',
        	// popup:'popup-class',
        	// header:
        	// title:
        	// closeButton:
        	// icon:
        	// image:
        	// content:
        	// input:
        	// actions:
        	// confirmButton:
        	// cancelButton:
        	// footer:	
        // },
        
    
        showConfirmButton: true, //mostrar el botton
        confirmButtonColor: '#3E90E9',
        confirmButtonAriaLabel:'confirmar',
    
        showCancelButton:  true, //las mismas propiedades para el botos de cancelar
        cancelButtonText: 'cancelar',
        // cancelButtonColor:
        cancelButtonAriaLabel: 'cancelar',
        
        buttonsStyling:true,  //si queremos establecer os stylos ccs prar el botton
        showCloseButton:true,
        closeButtonAriaLabel: 'cerrar alerta',
    
    
        imageUrl:  'img/cafe.jpg',// nos permite agregar una imagen desde una url
        imageWidth: '200px',
        // imageHeight:
        imageAlt:'linda'
    });
    if (pais) {
        Swal.fire({
            title:`seleccionaste ${pais}`
        });
    }
    
})()

