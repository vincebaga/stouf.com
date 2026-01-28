document.addEventListener('DOMContentLoaded', () => {
  GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
	touchFollowAxis: true,
	keyboardNavigation: true,
    loop: true,
    zoomable: true,
    openEffect: 'zoom',
    closeEffect: 'fade',
	closeOnOutsideClick: true
  });
});
