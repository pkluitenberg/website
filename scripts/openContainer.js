function openContainer(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf('hide') != -1) {
        x.className = x.className.replace(' hide', ' show')
    } else {
        x.className = x.className.replace(' show', ' hide');
    }
}