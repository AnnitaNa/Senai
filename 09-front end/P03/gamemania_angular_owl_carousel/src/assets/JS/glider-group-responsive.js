//---------------------------------------------------------------------------------------
//------------------ MULTI CAROUSEL ITENS WITH GLIDER -----------------------------------
//---------------------------------------------------------------------------------------

// creates a responsive Carousel with glider.js (https://glidejs.com/)


//finds all id that begins with glider
 const gliders = document.querySelectorAll("[id^=glider]");

 //.forEach() needed for more than one carousel per page
gliders.forEach((glide) => {
  const glider = document.querySelector(`#${glide.id} .glider`);
  const gliderPrev = document.querySelector(`#${glide.id} .responsive-prev`);
  const gliderNext = document.querySelector(`#${glide.id} .responsive-next`);
  const gliderDots = document.querySelector(`#${glide.id} .dots`);

//creates the glider
  new Glider(glider, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: gliderDots,
    arrows: {
      prev: gliderPrev,
      next: gliderNext
    },
    responsive: [
      {
      breakpoint: 600,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
      },
      },
 
      {
      breakpoint: 950,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      },
      },
 
      {
      breakpoint: 1200,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
      },
      },
  ]
  });
});
