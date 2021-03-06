$('#header').on('mousemove', (e) => {
  $('#header .content-wrapper').css({
    left: `${e.pageX / 100}px`,
    top: `${e.pageY / 100}px`
  })
})

$('a[href="#why"], a[href="#system"], a[href="#header"]').on('click', function(e){
  e.preventDefault()
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500)
})