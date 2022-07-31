function toggle( targetId ) {
    let target = document.getElementById( targetId );
    if ( target ) {
        if ( target.style.display == "none" ) {
            target.style.display = "block";
        }
        else {
            target.style.display = "none";
        }}}
function popup(mylink, windowname, width, height) {
    if (! window.focus)return true;
    window.open(mylink, windowname,"type=fullWindow,scrollbars=yes");
    return false;
}
