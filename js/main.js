
// Word Typing Animation
var words = ['Graphic', 'Web', 'Visual', 'Frontend', 'UI', 'React', 'Print', 'Vue'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 30,
    speed = 100;
var wordflick = function () {
    setInterval(function () {
        if (forwards) {
        if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
            }
        }
        }
        else {
        if (offset == 0) {
            const screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width
            const wordFlipmoved = $('.word-flip > span').hasClass('moved')
            console.log(screenWidth >= 576)

            if(wordFlipmoved) {
                $('.word-flip > span').css('transform', 'translateY(0rem)')
            } else {
                // The values correlate with font size on CSS

                if (screenWidth >= 992) { // Large screen
                    $('.word-flip > span').css('transform', 'translateY(-3.1rem)')
                } else if (screenWidth >= 768) { // Medium screen
                    $('.word-flip > span').css('transform', 'translateY(-2.9rem)')
                } else if (screenWidth >= 576) { // Small screen
                    $('.word-flip > span').css('transform', 'translateY(-2.7rem)')
                } else { // X-Small Screen
                    $('.word-flip > span').css('transform', 'translateY(-2.5rem)')
                }
            }
            $('.word-flip > span').css('transition', 'transform 1s ease-in-out')
            $('.word-flip > span').toggleClass('moved')
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
            i = 0;
            }
        }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
        if (forwards) {
            offset++;
        }
        else {
            offset--;
        }
        }
        $('.word-typing').text(part);
    }, speed);
};

// function wordflip (selector) {
//     $.keyframe.define([{
//         name: 'word-flip',
//            '0%':   {marginTop: "0"},
//            '50%':  {marginTop: "-6rem"},
//            '100%': {marginTop: "0"}
//     }]);

//     $(selector).playKeyframe({
//         name: 'word-flip', // name of the keyframe you want to bind to the selected element
//         duration: 100, // [optional, default: 0, in ms] how long you want it to last in     milliseconds
//         // timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
//         delay: 30, //[optional, default: 0, in ms]  how long you want to wait before the animation starts in milliseconds, default value is 0
//         repeat: 'infinite', //[optional, default:1]  how many times you want the animation to repeat, default value is 1
//         direction: 'alternate', //[optional, default: 'normal']  which direction you want the frames to flow, default value is normal
//         // fillMode: 'running', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
//         // complete: function(){} //[optional]  Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
//     });
        
// }

$(document).ready(function () {
    wordflick();
});