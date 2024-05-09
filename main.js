let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let currentVideo = null;

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1)*400)
        });

        setTimeout(() =>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx+1)*50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top ='-100vh';
        },2300);

    })
})

function clickButton(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        if (currentVideo && currentVideo !== element && !currentVideo.paused) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
            currentVideo.classList.add('hidden');
            currentVideo.style.display = 'none'; // Ensure the element is not just hidden but also not taking space
        }

        element.classList.remove('hidden');
        element.style.display = 'block'; // Force display block

        // Additional check to force browser to re-render the video
        element.style.display = 'none';
        setTimeout(() => {
            element.style.display = 'block';
        }, 10);

        if (element.tagName === 'AUDIO') {
            element.play();
        } else if (element.tagName === 'VIDEO') {
            element.play();
            currentVideo = element; // Update the current video
            element.classList.add('centered-video'); // Check if this class might be causing issues
        }
    } else {
        console.error('Element not found:', elementId);
    }
}

function clickButton1(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        if (currentVideo && currentVideo !== element && !currentVideo.paused) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
            currentVideo.classList.add('hidden');
            currentVideo.style.display = 'none'; // Ensure the element is not just hidden but also not taking space
        }

        element.classList.remove('hidden');
        element.style.display = 'block'; // Force display block

        // Additional check to force browser to re-render the video
        element.style.display = 'none';
        setTimeout(() => {
            element.style.display = 'block';
        }, 10);

        if (element.tagName === 'AUDIO') {
            element.play();
        } else if (element.tagName === 'VIDEO') {
            element.play();
            currentVideo = element; // Update the current video
            element.classList.add('right-aligned-video'); // Adjust this class as necessary
        }
    } else {
        console.error('Element not found:', elementId);
    }
}