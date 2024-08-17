var topNavLinks = document.getElementById('top-nav-links');
var mIcon = document.getElementById('menuIcon');
var cIcon = document.getElementById('closeIcon');

function openMenu(){
    topNavLinks.style.display = 'block';
    cIcon.style.display = 'block';
    mIcon.style.display = 'none';


    /* it means mobile view main hi hamne menu icon lgaya tha and top-nav-links that mean list wala section hide kiya tha..in mobile view....so by click button we are again making it visible on mobile view. but as the CSS has not setup for the list in the mobile view. So the list will not show properly...We need to update/add the CSS accordingly.
    
    and now...when the list is open we need to show the close icon..which in start is hidden and the menu icon should be hidden when the list is open..
    
    Now when the close icon is showing we need to setup a function as to close the list when we click on the close icon*/
}

function closeMenu(){
    topNavLinks.style.display = 'none';
    cIcon.style.display = 'none';
    mIcon.style.display = 'block';



    /*with this eveything is working accordingly*/
}

