/*global $ */
$(document).ready(function () {
    'use strict';
    $(".hamburger-menu").on("click", function () {
        $("header nav ul").toggleClass("open");
    });
});