function onBoot() {alert("Hello World, and Merry Christmas!");}

$(document).ready(function()
{
    $('div#home').toggleClass('visible');

    $('ul#menu li').hover(function()
    {
        $(this).children('ul').slideToggle(200);
        $(this).children('a:not("selected")').toggleClass('active');
    });

    $('ul#menu > li > a:not("selected")').click(function()
    {
        $('div.visible').toggleClass('visible');
        $('a.selected').toggleClass('selected');
        $(this).toggleClass('selected');
        var element = "div" + $(this).attr('href');
        $(element).toggleClass('visible');
    });
});