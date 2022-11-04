$(document).ready(function() {
    let userLang = navigator.language || navigator.userLanguage;
    SetLang(userLang);
});

function SetLang(lang) {
    console.log(lang);
    if (lang != 'ru-RU' && lang != 'ru') {
        console.log('not ru');
        $('body > div > div.content > div.left_content > div > p').html("Flexible game world with interesting <br>author's solutions!");
        $('body > div > div.content > div.left_content > div > a').html("GO TO SITE");
        $('body > div > div.content > div.right_content > div > p').html("Stable official platform with <br>complete implementation!");
        $('body > div > div.content > div.right_content > div > a').html("GO TO SITE");
    }
}