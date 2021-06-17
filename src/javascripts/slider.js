// License
// Copyright (c) 2017 Ken Wheeler
// Licensed under the MIT license.

// https://github.com/kenwheeler/slick/

// const slider = function moveImagesInSlider() {
//   $(() => {
//     $('.lazy').slick({
//       lazyLoad: 'ondemand',
//     });
//   });
// };


import jQuery from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let { $jq } = window;
window.$ = window.jQuery;
window.jQuery = jQuery;
$jq = jQuery.noConflict();


const slider = function moveImagesInSlider() {
  $jq(document).ready(() => {
    $jq('.lazy').slick();
  });
};

export default slider;
