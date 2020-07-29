let bg;

let palette = ["#96ceb4","#ffeead","#ff6f69","#ffcc5c","#88d8b0"];
let bgcolor = "#ffffff";

let imgHeightControl, imgWidthControl;
let PaletteColor01, PaletteColor02, PaletteColor03, PaletteColor04, PaletteColor05, singleCurveControl, InputControl, backgroundColorPicker,singleStepLength, DrawTimesControl, FlowerAmountControl, FlowerIntensityControl, MessControl, StrokeWeightControl;

let singleStep = 10;
let singleChildStep=20;
let sWeight=3;
let mess=0.001;
let singleCurve=20;
let flowerIntensity=10;
let drawTimes=4;
let flowerAmount=800;


function makeControls() {
  // Controls 
  let controlWrapper = createDiv().id("control-wrapper");
  let controlWrapperRight = createDiv().id("control-wrapper-right");

  makeButton("下载图像", controlWrapperRight, download);
  let sline54 = createDiv("<hr></hr>");
  sline54.parent(controlWrapperRight);

  imgWidthControl = makeSlider("图像宽度", minVal = 30, maxVal = window.innerWidth * 0.655, value = window.innerHeight * 0.85, step = 1, parent = controlWrapper, resizeCan);
  imgHeightControl= makeSlider("图像长度", minVal = 30, maxVal = window.innerHeight * 0.85, value = window.innerHeight * 0.85, step = 1, parent = controlWrapper, resizeCan);
    
  backgroundColorPicker = makeColorPicker("画布背景", startColor = bgcolor, parent = controlWrapper, setBackgroundColor);

  //------------------------------------------------------

  // let noticet0 = createDiv("<h6>点击叠加生效:</h6>");
  // noticet0.parent(controlWrapperRight);
  // noticet0.class("notice");

  let sline2 = createDiv("<hr></hr>");
  sline2.parent(controlWrapper);
  // let noticet2 = createDiv("<h6>示例模板:</h6>");
  // noticet2.parent(controlWrapper);
  // noticet2.class("notice");

  singleStepLength = makeSlider("单线段节数[2,20]", minVal = 2, maxVal = 20, value = 10, step = 1, parent = controlWrapperRight, setSingleStepLength);
  singleChildStepLength = makeSlider("单线段步长[1,750]", minVal = 1, maxVal = 750, value = 20, step = 1, parent = controlWrapperRight, setSingleChildStepLength);
  StrokeWeightControl = makeSlider("单线段粗细[1,50]", minVal = 1, maxVal = 50, value = 1, step = 1, parent = controlWrapperRight, setStrokeWeight);
  MessControl= makeSlider("单簇混乱[0,0.05]", minVal = 0.000, maxVal = 0.05, value = 0.001, step = 0.001, parent = controlWrapperRight, setMess);
  singleCurveControl = makeSlider("单簇弯曲[0.01,200]", minVal = 0.01, maxVal = 200, value = 20, step = 0.001, parent = controlWrapperRight, setSingleCurve);
  FlowerIntensityControl = makeSlider("单簇密度[1,300]", minVal = 1, maxVal = 300, value = 10, step = 1, parent = controlWrapperRight, setFlowerIntensity);
  DrawTimesControl = makeSlider("绘制次数[1,10]", minVal = 1, maxVal = 10, value = 4, step = 1, parent = controlWrapperRight, setDrawTimesControl);
  FlowerAmountControl = makeSlider("总簇数[10,800]", minVal = 10, maxVal = 800, value = 800, step = 10, parent = controlWrapperRight, setFlowerAmount);

  PaletteColor01 = makeColorPicker("线条颜色01", startColor  = palette[0], parent = controlWrapperRight, SetColor);
  PaletteColor02 = makeColorPicker("线条颜色02", startColor = palette[1], parent = controlWrapperRight, SetColor);
  PaletteColor03 = makeColorPicker("线条颜色03", startColor = palette[2], parent = controlWrapperRight, SetColor);
  PaletteColor04 = makeColorPicker("线条颜色04", startColor = palette[3] , parent = controlWrapperRight, SetColor);
  PaletteColor05 = makeColorPicker("线条颜色05", startColor = palette[4], parent = controlWrapperRight, SetColor);

  makeButton("随机种子", controlWrapper,() => {location.reload()});

  let sline4 = createDiv("<hr></hr>");
  sline4.parent(controlWrapper);

  // Buttons
  makeButton("色板·汽水", controlWrapper, ColorTest001);
  makeButton("色板·Unicorn", controlWrapper, ColorTest002);
  makeButton("色板·樱花", controlWrapper, ColorTest003);
  makeButton("色板·柑橘", controlWrapper, ColorTest004);
  makeButton("色板·唐红", controlWrapper, ColorTest005);
  let sline3 = createDiv("<hr></hr>");
  sline3.parent(controlWrapper);
  makeButton("模式·洒", controlWrapper, PatternScatter);
  makeButton("模式·羽", controlWrapper, PatternFeather);
  makeButton("模式·绒", controlWrapper, PatternHana);
  makeButton("模式·乱", controlWrapper, PatternMess);
  makeButton("模式·颗粒", controlWrapper, PatternParticle);
  makeButton("模式·雨", controlWrapper, PatternRain);

  makeButton("单次绘制", controlWrapperRight, DrawOnce);
  makeButton("叠加", controlWrapperRight, DrawAgain);
  makeButton("清空画布", controlWrapperRight, clear);

  return controlWrapper;
}

//模式设置函数
//---------------------------------------------------------

function PatternScatter(){
  singleStep = 2;
  singleChildStep = 1;
  sWeight = 7;
  mess = 0.01;
  singleCurve = 15;
  flowerIntensity = 3;
  drawTimes = 10;
  flowerAmount = 200;

  DrawAgain();
}

function PatternMess(){
  singleStep = 20;
  singleChildStep = 180;
  sWeight = 1;
  mess = 0.01;
  singleCurve = 30;
  flowerIntensity = 300;
  drawTimes = 5;
  flowerAmount = 1;

  DrawAgain();
}

function PatternRain(){
  singleStep = 2;
  singleChildStep = 30;
  sWeight = 3;
  mess = 0;
  singleCurve = 2;
  flowerIntensity = 1;
  drawTimes = 10;
  flowerAmount = 50;

  DrawAgain();
}

function PatternFeather(){
  singleStep = 17;
  singleChildStep = 6;
  sWeight = 1;
  mess = 0.005;
  singleCurve = 12;
  flowerIntensity = 280;
  drawTimes = 1;
  flowerAmount = 200;

  DrawAgain();
}

function PatternWatercolor(){
  singleStep = 2;
  singleChildStep = 2;
  sWeight = 1;
  mess = 0.01;
  singleCurve = 100;
  flowerIntensity = 100;
  drawTimes = 3;
  flowerAmount = 200;

  DrawAgain();
}

function PatternParticle(){
  singleStep = 2;
  singleChildStep = 5;
  sWeight = 1;
  mess = 0.01;
  singleCurve = 200;
  flowerIntensity = 3;
  drawTimes = 10;
  flowerAmount = 200;

  DrawAgain();
}

function PatternHana(){
  singleStep = 2;
  singleChildStep = 100;
  sWeight = 1;
  mess = 0.05;
  singleCurve = 200;
  flowerIntensity = 500;
  drawTimes = 1;
  flowerAmount = 10;

  DrawAgain();
}


//参数设置函数
//---------------------------------------------------------
function setSingleStepLength(){
  singleStep = singleStepLength.value();
}

function setSingleChildStepLength(){
  singleChildStep = singleChildStepLength.value();
}

function setStrokeWeight(){
  sWeight = StrokeWeightControl.value();
}

function setMess(){
  mess = MessControl.value();
}

function setSingleCurve(){
  singleCurve = singleCurveControl.value();
}

function setFlowerIntensity(){
  flowerIntensity = FlowerIntensityControl.value();
}

function setDrawTimesControl(){
  drawTimes = DrawTimesControl.value();
}

function setFlowerAmount(){
  flowerAmount = FlowerAmountControl.value();
}

//---------------------------------------------------------


function DrawOnce() {
  clear();
  for(let t=0;t<drawTimes;t++)
    draw();
}

function DrawAgain() {
  for(let t=0;t<drawTimes;t++)
    draw();
}

function SetColor(){
  palette[0] = PaletteColor01.value();
  palette[1] = PaletteColor02.value();
  palette[2] = PaletteColor03.value();
  palette[3] = PaletteColor04.value();
  palette[4] = PaletteColor05.value();
  bgcolor    = backgroundColorPicker.value();

}

function ColorTest001(){
  palette[0] = "rgb(150, 206, 180)";
  palette[1] = "rgb(255, 238, 173)";
  palette[2] = "rgb(255, 111, 105)";
  palette[3] = "rgb(255, 255, 255)";
  palette[4] = "rgb(136, 216, 176)";
  //bgcolor    = "rgb(255, 255, 255)";
  //canvas.style("background-color", bgcolor);

  DrawAgain();
}

function ColorTest002(){
  palette[0] = "rgb(249, 215, 218)";
  palette[1] = "rgb(253, 231, 240)";
  palette[2] = "rgb(207, 242, 223)";
  palette[3] = "rgb(191, 204, 227)";
  palette[4] = "rgb( 96, 118, 159)";

  //bgcolor    = "rgb(255, 255, 255)";
  //canvas.style("background-color", bgcolor);

  DrawAgain();
}

function ColorTest003(){
  palette[0] = "rgb(255, 229, 233)";
  palette[1] = "rgb(255, 209, 209)";
  palette[2] = "rgb(255, 194, 194)";
  palette[3] = "rgb(255, 255, 255)";
  palette[4] = "rgb(255, 255, 255)";

  //bgcolor    = "rgb(  0,   0,   0)";
  //canvas.style("background-color", bgcolor);
  DrawAgain();
}

function ColorTest004(){
  palette[0] = "rgb(255, 123, 0)";
  palette[1] = "rgb(255, 215, 56)";
  palette[2] = "rgb(229, 254, 97)";
  palette[3] = "rgb(255, 239, 204)";
  palette[4] = "rgb(255, 241, 82)";

  //bgcolor    = "rgb(  0,   0,   0)";
  //canvas.style("background-color", bgcolor);
  DrawAgain();
}

function ColorTest005(){
  palette[0] = "rgb(204,   0,   0)";
  palette[1] = "rgb(251, 143, 116)";
  palette[2] = "rgb(255, 216, 214)";
  palette[3] = "rgb(255,  58,  36)";
  palette[4] = "rgb(255, 255, 255)";

  //bgcolor    = "rgb(  0,   0,   0)";
  //canvas.style("background-color", bgcolor);
  DrawAgain();
}


//------------------------------------

// Function to set background color
function setBackgroundColor() {
  // Avoids clearing the content
  canvas.style("background-color", backgroundColorPicker.value());
}

function setup(){
  noLoop();
  // Container for everything
  let container = createDiv().class("container");
  let controls = makeControls();
  controls.parent(container);
  let canvasContainer = createDiv();
  canvasContainer.class("canvas_div");
  canvas = createCanvas(imgHeightControl.value(), imgWidthControl.value()).class("p5_canvas");
  canvasContainer.parent(container);
  canvas.parent(canvasContainer);

  bg = createGraphics(window.innerWidth, window.innerHeight);
  bg.noFill();
  //DrawGridsBG();
  setBackgroundColor();
  draw();
}

function draw(){
  resizeCan();
  for(let i=0; i<flowerAmount; i++){
    let x = random(random(window.innerWidth));
    let y = random(random(window.innerHeight));
    let d = 50;
    let col = color(random(palette));
    stroke(col);
   
    for(let j=0; j<flowerIntensity; j++){
      let rnd = random(1);
      let a = random(TAU);
      strokeWeight(random(sWeight));
      noiseLine(x+d*rnd*0.5*cos(a+90), y+d*rnd*0.5*sin(a));
    } 
  }
  image(bg, 0, 0);
}

function noiseLine(x, y) {
  let px = x;
  let py = y;
  
  for (let i = 0; i < singleStep; i++) {
    let ns = mess;
    let angle = noise(x * ns, y * ns, i * 0.0001) * singleCurve;
    line(x, y, px, py);
    px = x;
    py = y;
    x += cos(angle) * singleChildStep;
    y += sin(angle) * singleChildStep;
   }
  
}

//------------------------------------------------------------------

// Download canvas
function download() {
  noLoop(); // pause
  let link = document.createElement('a');
  link.download = 'noise_field.png';
  link.href = document.querySelector('canvas').toDataURL()
  link.click();
}


function resizeCan(){
  // Create controls and canvas
  if(canvas.width!=imgWidthControl.value()||canvas.height!=imgHeightControl.value())
    resizeCanvas(imgWidthControl.value(), imgHeightControl.value());
}

function DrawGridsBG(){
  let sep = 5;
  bg.stroke(255, 20);
  bg.strokeWeight(0.5);
  for (let i = 0; i <= width*2.2; i+=sep) {
    for (let j = 0; j <= height; j+=sep) {
      bg.rect(i, j, sep, sep);
    }
  }
}

// Clear content
function clearContent() {
  clear();  
  flowfield = [];  
  xoff = X_START = random(100);
  yoff = random(100);
  zoff = random(100);
}

