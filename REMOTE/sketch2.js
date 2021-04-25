let url = 'https://io.adafruit.com/api/v2/tjrghkdud/feeds/servo/data';

var data = 0;



function setup() {
    createCanvas(windowWidth, 780);
    background(0, 147, 255);
    textSize(35);
    fill(255);
    text('👋 👋 👋 👋 👋 👋 👋', 700, 400);

}

function draw() {


}




function press() {
    background(255, 116, 0);
    data = 30;
    console.log(data);
    sendData(data);

    textSize(40);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 100);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 200);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 300);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 400);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 500);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 600);
    text('😎     👍     😎     👍     😎     👍     😎     👍     😎     👍     😎     👍', 290, 700);


}

function press2() {
    background(98, 0, 255);
    data = 60;
    console.log(data);
    sendData(data);

    textSize(40);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 100);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 200);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 300);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 400);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 500);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 600);
    text('😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣     😂     🤣', 290, 700);


}

function press3() {
    background(255, 59, 59);
    data = 90;
    console.log(data);
    sendData(data);

    textSize(40);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 100);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 200);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 300);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 400);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 500);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 600);
    text('👎     😦     👎     😦     👎     😦     👎     😦     👎     😦     👎     😦', 290, 700);

}

function press4() {
    background(100);
    data = 120;
    console.log(data);
    sendData(data);

    textSize(40);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 100);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 200);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 300);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 400);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 500);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 600);
    text('😡     😠     😡     😠     😡     😠     😡     😠     😡     😠     😡     😠', 290, 700);


}

function press5() {
    background(0, 147, 255);
    data = 179;
    console.log(data);
    sendData(data);


    textSize(35);
    fill(255);
    text('👋 👋 👋 👋 👋 👋 👋', 700, 400);


}








function sendData(turnOn) {
    let postData = {
        "value": turnOn,
        "X-AIO-Key": "aio_tivz05uXZsrjO02G6eOgthvVTFO8"
    };
    httpPost(url, 'json', postData, function (result) {
        console.log(result);
    });
}
