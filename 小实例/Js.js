/**
 * Created by darling on 2017/9/24.
 */
$(document).ready(function () {
    $("#p1").click(function () {
        $("#picture").css("background-image","url(../img/s1.jpg)");
    });
    $("#p2").click(function () {
        $("#picture").css("background-image","url(../img/s2.jpg)");
    });
    $("#p3").click(function () {
        $("#picture").css("background-image","url(../img/s3.jpg)");
    });
    $("#w1").click(function () {
        $("#picture").css("width","50px");
    });
    $("#w2").click(function () {
        $("#picture").css("width","100px");
    });
    $("#w3").click(function () {
        $("#picture").css("width","150px");
    });
    $("#h1").click(function () {
        $("#picture").css("height","50px");
    });
    $("#h2").click(function () {
        $("#picture").css("height","100px");
    });
    $("#h3").click(function () {
        $("#picture").css("height","150px");
    });
    $("#reset").click(function () {
        $("#picture").css({
            "width":"200px",
            "height":"200px",
        });
    });
    $("#bg p").click(function () {
        $("#over").css("display","block");
        $("#menu").css("display","block");
    });
    $("#certain").click(function () {
        $("#over").css("display","none");
        $("#menu").css("display","none");
    });
});
