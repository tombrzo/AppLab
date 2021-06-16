const headerSideNavBar = function showAndHideSideNavigation() {
  const headerOpenBtn = document.querySelector('.header__open-btn');

  function openNav() {
    document.querySelector('.header__sidebar').style.width = '250px';
    document.querySelector('.header__nav').style.marginRight = '250px';
  }
  headerOpenBtn.addEventListener('click', openNav);

  const closebtn = document.querySelector('.close-btn');

  function closeNav() {
    document.querySelector('.header__sidebar').style.width = '0';
    document.querySelector('.header__nav').style.marginRight = '0';
  }
  closebtn.addEventListener('click', closeNav);
};

export default headerSideNavBar;
