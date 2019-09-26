_('startWith');

origin = window.location.origin;

function exports(url)
{
    return !startWith(url, origin);
}