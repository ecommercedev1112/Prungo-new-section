$(document).ready(function(){
    var count = $('[data-image-count]').data('image-count');
    $('.custom-slider').slick({
        lazyLoad: 'ondemand',
        dots: true,
        slidesToShow: count,
        slidesToScroll: 1,
        prevArrow: `<button class="slide-arrow prev-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6651 7.50679C13.8929 7.7346 13.8929 8.10394 13.6651 8.33175L9.99423 12.0026L13.6651 15.6735C13.8929 15.9013 13.8929 16.2706 13.6651 16.4984C13.4373 16.7262 13.0679 16.7262 12.8401 16.4984L8.75679 12.4151C8.52899 12.1873 8.52899 11.8179 8.75679 11.5901L12.8401 7.50679C13.0679 7.27899 13.4373 7.27899 13.6651 7.50679Z" fill="white"/>
        </svg>
        </button>`,
        nextArrow: `<button class="slide-arrow next-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3349 7.50679C10.5627 7.27899 10.9321 7.27899 11.1599 7.50679L15.2432 11.5901C15.471 11.8179 15.471 12.1873 15.2432 12.4151L11.1599 16.4984C10.9321 16.7262 10.5627 16.7262 10.3349 16.4984C10.1071 16.2706 10.1071 15.9013 10.3349 15.6735L14.0058 12.0026L10.3349 8.33175C10.1071 8.10394 10.1071 7.7346 10.3349 7.50679Z" fill="white"/>
        </svg>
        </button>`,
        
        responsive: [                
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                    prevArrow: false,                    
                    nextArrow: false
                    }  
                    
                },           
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: `<button class="slide-arrow prev-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6651 7.50679C13.8929 7.7346 13.8929 8.10394 13.6651 8.33175L9.99423 12.0026L13.6651 15.6735C13.8929 15.9013 13.8929 16.2706 13.6651 16.4984C13.4373 16.7262 13.0679 16.7262 12.8401 16.4984L8.75679 12.4151C8.52899 12.1873 8.52899 11.8179 8.75679 11.5901L12.8401 7.50679C13.0679 7.27899 13.4373 7.27899 13.6651 7.50679Z" fill="white"/>
                    </svg>  
                    </button>`,
                    
                    nextArrow: `<button class="slide-arrow next-arrow" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3349 7.50679C10.5627 7.27899 10.9321 7.27899 11.1599 7.50679L15.2432 11.5901C15.471 11.8179 15.471 12.1873 15.2432 12.4151L11.1599 16.4984C10.9321 16.7262 10.5627 16.7262 10.3349 16.4984C10.1071 16.2706 10.1071 15.9013 10.3349 15.6735L14.0058 12.0026L10.3349 8.33175C10.1071 8.10394 10.1071 7.7346 10.3349 7.50679Z" fill="white"/>
                    </svg>    
                    </button>`
                    }  
                    
                }
            ]
    });
  
    
});