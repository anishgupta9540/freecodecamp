// https://www.freecodecamp.org/learn/daily-coding-challenge/10-15
// HTML Tag Stripper

function stripTags(html) {
    return html.replace(/<[^>]*>/g, "");
}

stripTags('<a href="#">Click here</a>');
// "Click here"

stripTags('<p class="center">Hello <b>World</b>!</p>');
// "Hello World!"

stripTags('<img src="cat.jpg" alt="Cat">');
// ""

stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>');
// "sectionsection"