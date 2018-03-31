//This is for the sliding selection effect (Template used)
$('.element').each(function() {
        $(this).mouseover(function() {
            $(this).addClass('active');
          $('.stage').children('.element').not('.active').addClass('inactive');
        });
        $(this).mouseleave(function() {
            $(this).removeClass('active');
            $('.stage').children('.element').not('.active').removeClass('inactive');
        });
    });
