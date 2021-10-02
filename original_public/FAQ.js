// FAQ //
const faq = [
    {  // Q&A Object //
    // replace single quote < ' > with -- \'
        q:'Who is the "Village of Thousands"?',
        a:'answer'
    },
    {
        q:'Can I become one of the this thousands? ...or is it "May I"?? Idk.',
        a:'answer'
    }
    // q2: [
    //     'Can I become one of the this thousands? ...or is it "May I"?? Idk.',
    //     'answer'
    // ],
    // q3: [
    //     'question',
    //     'answer'
    // ],
    // q4: [
    //     'question',
    //     'answer'
    // ],
]   // console.log(faq.q1[0])   <-- (in case you forgot how to navigate objects)

for (i = 0; i < faq.length; i++) {
    console.log(faq[i].q)
    console.log(faq[i].a)
}
// console.log(faq)
// const zoomBox = document.getElementsByClassName('materialboxed');
// const zoomActive = document.getElementsByClassName('materialboxed active');

// zoomBox.addEventListener('click', function () {
//     zoomActive.style.position = null
// })