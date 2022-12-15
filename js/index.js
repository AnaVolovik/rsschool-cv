document.addEventListener('DOMContentLoaded', function(){
  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById( 'closeMenu' );
  const wrapMenu = document.getElementById( 'wrapMenu' );

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