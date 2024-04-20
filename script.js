let i = 0
let maxCount = 2;
const loop = () => {
    i = (i + 1) % maxCount;
    let borderWidth = i === 1 ? '10px' : '0'; // Set border width based on current value of i
    $('.box').animate({
    borderWidth: borderWidth,
    borderColor: 'red'
}, 500, loop)
};

loop()