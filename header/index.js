fetch("/header/index.html")
.then(response => { return response.text() })
.then(data => initHeader(data));

function initHeader(html)
{
    document.getElementById("header").innerHTML = html;
    let page = location.pathname;
    page = page.substring(1);

    let slashIndex = page.indexOf('/');
    if (slashIndex != -1)
    {
        page = page.substring(0, page.indexOf('/'));
    }

    document.getElementById('navbar-' + page).classList.add('active');
}
