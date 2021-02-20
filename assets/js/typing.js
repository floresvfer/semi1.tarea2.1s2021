let i = 0;
const txt = 'hello world'; /* The text */
const speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        if(i === 6){
            setTimeout(typeWriter, speed * 2.5);
            return;
        }
        setTimeout(typeWriter, speed);
    }else{
        document.getElementById("typing").innerHTML += "<span class=\"blink_me\">_</span>";
    }
}

typeWriter();
