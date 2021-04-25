let url = 'https://io.adafruit.com/api/v2/tjrghkdud/feeds/servo/data';

var data = 0;

let slider;


function setup() {
    createCanvas(windowWidth, windowHeight);

    slider = createSlider(1, 179, 1);
    slider.position(10, 10);
    slider.style('width', '80%');

}


function draw() {

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
