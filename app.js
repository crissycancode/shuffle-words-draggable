const sentence = 'what day is it today ?';
let ar = sentence.split(' ');

ar.forEach(createBox);
ar = ar.sort(() => Math.random() - 0.5)
ar.forEach(createElements);

function createElements(icon) {
  const myelement = document.getElementById('hello');
  const val = document.createElement('i');
      val.classList.add('fas', icon, 'draggable');
      val.setAttribute('draggable', 'true');
      val.style.width = '200px';
      val.style.display= 'flex';
      val.style.alignItems = 'center';
      val.style.fontSize = '32px';
      val.style.margin = '0px 8px';
      val.style.cursor = 'move';
      val.style.transition = 'opacity 0.2s';
      val.id = icon;
      val.textContent = icon;
      val.style.fontFamily ='roboto, sans-serif';
  myelement.appendChild(val);
}


function createBox(icon) {
  const myelement = document.getElementById('two');
  const aval = document.createElement('div');

    aval.classList.add('droppable');
    myelement.appendChild(aval);
      const val = document.createElement('i');
      val.classList.add('fas', icon, 'droppable');
      val.setAttribute('draggable', 'true');
      val.style.width = '200px';
      val.style.display= 'flex';
      val.style.justifyContent = 'center';
      val.style.flexDirection = 'row'
      val.style.textAlign = 'center'
      val.style.fontSize = '32px';
      val.style.margin = '16px auto';
      val.style.cursor = 'move';
      val.style.fontWeight = 'bold';
      val.style.backgroundColor = '#ffffff';
      val.style.color = '#ffffff';
      val.style.border = '3px dashed #111111';
      val.style.transition = 'border-width 0.2s, transform 0.2s, background-color 0.4s';
      val.id = icon;
      val.textContent = icon;
  myelement.appendChild(val);
}


const draggableElements = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.droppable');

// END OF EDITING

draggableElements.forEach(element => {
  element.addEventListener('dragstart', dragStart);
  // element.addEventListener('drag', drag);
  // element.addEventListener('dragend', dragEnd);
});

droppableElements.forEach(element => {
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragleave', dragLeave);
  element.addEventListener('drop', drop);
});

function dragStart(e) {
  e.dataTransfer.setData('text', e.target.id);
  // console.log(e.target.id);
  
}

function dragEnter(e){
  if(!e.target.classList.contains('dropped')){
    e.target.classList.add("droppable-hover");
  }
  
}


function dragOver(e) {
  if(!e.target.classList.contains('dropped')){
    e.preventDefault();
  }
}

function dragLeave(e){
  e.target.classList.remove("droppable-hover");
}

function drop(e) {
  e.preventDefault();
  const target = e.target;
  target.classList.remove("droppable-hover");

  const draggableElementData = e.dataTransfer.getData('text');
  // const droppableElementData = tar.getAttribute('data-draggable-id');
  const droppableElementData = target.textContent;

  if(draggableElementData === droppableElementData){
    
    e.target.classList.add('dropped');
    const draggableElement = document.getElementById(draggableElementData);
    // tar.style.backgroundColor = draggableElement.style.color;

    draggableElement.classList.add('dragged');
    draggableElement.setAttribute('draggable', 'false');
    // console.log(draggableElement.id);
    target.innerHTML = '';
    target.innerHTML += `
    <i class="draggable" 
      draggable="true" 
      style= "
      color: black;  
      display: flex;
      align-items: center;
      font-size: 32px;
      margin: 0px 8px;
      cursor: move;
      transition: opacity 0.2s;
      font-family: 'Roboto', sans-serif;
      text-align: center;" 
      id=${draggableElement.id}>
        ${draggableElement.id}
    </i> 
    `;

    
  }
  // sconsole.log('const: ' + draggableElement);
}

function dropOver(e) {
  //droppable hoover

}
