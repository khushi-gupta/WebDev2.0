dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;
  //onpointerdown is a web api to call event pointerdown when a button/mouse is clicked or screen is touched
  function pointerDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;//onpointerup,onpointerdown,onpointermove are all web apis to manage various events as name suggests
    document.onpointerup = stopElementDrag;

    function elementDrag(e) {
      pos1 = pos3 - e.clientX;//clientX gives current position of where the mouse is clicked
      pos2 = pos4 - e.clientY;//pos1,pos2 give difference between final and intial positions which is then used for changing the coordinates of the plant element
      pos3 = e.clientX;// current position
      pos4 = e.clientY;//pos3,pos4 hold new position
      console.log(pos1, pos2, pos3, pos4);
      terrariumElement.style.top = terrariumElement.offsetTop - pos2+'px';// offsetLeft or offsetTop return position in pixels
      terrariumElement.style.left = terrariumElement.offsetLeft- pos1+'px';// therefore we add 'px' so that pos1 ,pos2 is also in pixels
    }

    function stopElementDrag() {
      document.onpointerup = null;// when pointer is up we call onpointerup, this means we stopped dragging the element.
      document.onpointermove = null;

    }
  }
}
