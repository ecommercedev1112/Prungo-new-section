$(document).ready(function(){
    var count = $('[data-image-count]').data('image-count');
    $('.custom-slider-review').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: count,
        slidesToScroll: 1,
        prevArrow: `<button class="slide-arrow prev-arrow review">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_14438_170)">
        <circle cx="28" cy="27" r="24" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3224 18.0136C31.778 18.4692 31.778 19.2079 31.3224 19.6635L23.9806 27.0052L31.3224 34.3469C31.778 34.8025 31.778 35.5412 31.3224 35.9968C30.8667 36.4524 30.128 36.4524 29.6724 35.9968L21.5058 27.8302C21.0502 27.3746 21.0502 26.6359 21.5058 26.1803L29.6724 18.0136C30.128 17.558 30.8667 17.558 31.3224 18.0136Z" fill="black"/>
        </g>
        <defs>
        <filter id="filter0_d_14438_170" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14438_170"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14438_170" result="shape"/>
        </filter>
        </defs>
        </svg>
        </button>`,
        nextArrow: `<button class="slide-arrow next-arrow reviw">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_14438_174)">
        <circle cx="28" cy="27" r="24" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6776 18.0136C23.1333 17.558 23.872 17.558 24.3276 18.0136L32.4942 26.1803C32.9498 26.6359 32.9498 27.3746 32.4942 27.8302L24.3276 35.9968C23.872 36.4524 23.1333 36.4524 22.6776 35.9968C22.222 35.5412 22.222 34.8025 22.6776 34.3469L30.0194 27.0052L22.6776 19.6635C22.222 19.2079 22.222 18.4692 22.6776 18.0136Z" fill="#434241"/>
        </g>
        <defs>
        <filter id="filter0_d_14438_174" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14438_174"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14438_174" result="shape"/>
        </filter>
        </defs>
        </svg>
        </button>`,
        
        responsive: [                
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    prevArrow: `<button class="slide-arrow prev-arrow review">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_14438_170)">
                                <circle cx="28" cy="27" r="24" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3224 18.0136C31.778 18.4692 31.778 19.2079 31.3224 19.6635L23.9806 27.0052L31.3224 34.3469C31.778 34.8025 31.778 35.5412 31.3224 35.9968C30.8667 36.4524 30.128 36.4524 29.6724 35.9968L21.5058 27.8302C21.0502 27.3746 21.0502 26.6359 21.5058 26.1803L29.6724 18.0136C30.128 17.558 30.8667 17.558 31.3224 18.0136Z" fill="black"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_14438_170" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14438_170"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14438_170" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                                </button>`,
                                nextArrow: `<button class="slide-arrow next-arrow reviw">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_14438_174)">
                                <circle cx="28" cy="27" r="24" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6776 18.0136C23.1333 17.558 23.872 17.558 24.3276 18.0136L32.4942 26.1803C32.9498 26.6359 32.9498 27.3746 32.4942 27.8302L24.3276 35.9968C23.872 36.4524 23.1333 36.4524 22.6776 35.9968C22.222 35.5412 22.222 34.8025 22.6776 34.3469L30.0194 27.0052L22.6776 19.6635C22.222 19.2079 22.222 18.4692 22.6776 18.0136Z" fill="#434241"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_14438_174" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14438_174"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14438_174" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                                </button>`
                    }  
                    
                },           
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: `<button class="slide-arrow prev-arrow">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_14438_170)">
                    <circle cx="28" cy="27" r="24" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3224 18.0136C31.778 18.4692 31.778 19.2079 31.3224 19.6635L23.9806 27.0052L31.3224 34.3469C31.778 34.8025 31.778 35.5412 31.3224 35.9968C30.8667 36.4524 30.128 36.4524 29.6724 35.9968L21.5058 27.8302C21.0502 27.3746 21.0502 26.6359 21.5058 26.1803L29.6724 18.0136C30.128 17.558 30.8667 17.558 31.3224 18.0136Z" fill="black"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_14438_170" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14438_170"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14438_170" result="shape"/>
                    </filter>
                    </defs>
                    </svg>  
                    </button>`,
                    
                    nextArrow: `<button class="slide-arrow next-arrow">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_14438_174)">
                    <circle cx="28" cy="27" r="24" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6776 18.0136C23.1333 17.558 23.872 17.558 24.3276 18.0136L32.4942 26.1803C32.9498 26.6359 32.9498 27.3746 32.4942 27.8302L24.3276 35.9968C23.872 36.4524 23.1333 36.4524 22.6776 35.9968C22.222 35.5412 22.222 34.8025 22.6776 34.3469L30.0194 27.0052L22.6776 19.6635C22.222 19.2079 22.222 18.4692 22.6776 18.0136Z" fill="#434241"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_14438_174" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14438_174"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14438_174" result="shape"/>
                    </filter>
                    </defs>
                    </svg>    
                    </button>`
                    }  
                    
                }
            ]
    });
  
    
});