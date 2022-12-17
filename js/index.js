document.addEventListener('DOMContentLoaded', function(){
  const openMenu = document.getElementById('open_menu');
  const closeMenu = document.getElementById( 'close_menu' );
  const wrapMenu = document.getElementById( 'wrap_menu' );

  openMenu.addEventListener( 'click', function () {
    openMenu.style = 'display: none;';
    wrapMenu.style = 'display: block;';
    closeMenu.style = 'display: block;';
  })

  closeMenu.addEventListener( 'click', function () {
    openMenu.style = 'display: block;';
    wrapMenu.style = 'display: none;';
    closeMenu.style = 'display: none;';
  })
})