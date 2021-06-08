// License
// Copyright (c) 2017 Ken Wheeler
// Licensed under the MIT license.

// https://github.com/kenwheeler/slick/

// according to sclick folder  sass-project\src\slick

// import jQuery from 'jquery';
import 'slick-carousel';

// const { $ } = window;

// window.$ = window.jQuery;
// window.jQuery = jQuery;

const slider = function moveImagesInSlider() {
  $(document).ready(() => {
    $('.lazy').slick({
      lazyLoad: 'ondemand',
      infinite: true,
    });
  });
};

export default slider;
