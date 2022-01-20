const ScrollToEl = (el) => {
    document.getElementById(el).scrollIntoView({behavior: "smooth"});
}

export default ScrollToEl;