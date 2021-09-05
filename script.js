//////////////////////
// GLOBAL VARIAVLES //
//////////////////////

// IndexedDB
window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
    dbVersion = 1;

// Avatar //

let avatarArr = ['<i class="large material-icons">fingerprint</i>']
document.querySelector('.avatar').innerHTML=avatarArr[0]
document.querySelector('.account-avatar').innerHTML=avatarArr[0]

// Navigation //
const footer_links = {  // Footer Links Object //
    r1: ["ABOUT", "TERMS OF SERVICE", "SHIPPING", "RETURNS"],
    r2: ["NEWSLETTER", "FAQ", "CONTACT US"]
}

// var newArray = footer_links.map(function (item) {
//     console.log(item)
// });
// const coinbase_api_key = "NvGScSHN4ONSAR6e"

// fetch("https://api.commerce.coinbase.com/checkouts", {
//   headers: {
//     "X-Cc-Api-Key": "NvGScSHN4ONSAR6e"
//   }
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });


// if (!checkOnlineStatus() && online_ping) {  // Check if online ping
//     // Nothing on page is displayed
//     for(let i=0; i < footer_links.r1.length; i++)
//     $("#online").html('<div class="offline" id="offline">You should probably connect to the Internet, bro.</div>');
// }


////////////////////
// INITIALIZE APP //
////////////////////
init = () => {

    // MATERIALIZE JS //
    document.addEventListener('DOMContentLoaded', function() {  // Float button click set to open a bottom nav //
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems, {
            hoverEnabled: false,
            toolbarEnabled: true
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() { // Enable parallax //
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems);
    });

}

init()




/////////////////////////////////////////////////////
// ----------------------------------------------- //
//       ~~~ USEFUL TOOLS N SHIZZ, BROH! ~~~       //
//                STEAL THIS CODE :)               //
// ----------------------------------------------- //
/////////////////////////////////////////////////////

// LAZYLOAD IMAGES //
const lazyLoad = document.querySelectorAll('img[data-src]');
loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
    image.setAttribute('style', 'display:block;');
    // image.removeAttribute('data-src');       // Doesn't seem to do what I expected it to do :/
    };
};

lazyLoad.forEach((img) => {
    loadImages(img);
});

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        });
    });
    lazyLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    lazyLoad.forEach((img) => {
    loadImages(img);
    });
}


// INITIALIZE APP //
init();