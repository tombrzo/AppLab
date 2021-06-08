const blueButton = function showBlueButton() {
  const goTopButton = document.querySelector('.goTopBtn');
  const topBarHeight = 200;

  const showButtonOnScrollDown = function showButtonOnScrollDownUnderHeight(heightInPixels) {
    if (
      document.body.scrollTop > heightInPixels
          || document.documentElement.scrollTop > heightInPixels
    ) {
      goTopButton.style.display = 'block';
    } else {
      goTopButton.style.display = 'none';
    }
  };

  window.onscroll = function onScroll() {
    showButtonOnScrollDown(topBarHeight);
  };

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  goTopButton.addEventListener('click', topFunction);
};

export default blueButton;
