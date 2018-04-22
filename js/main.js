const hide = () => {
  var element = document.getElementById('main');
  element.style.display === 'block' ? element.style.display = 'none' : element.style.display = 'block';
};

const uncheck = elem => {
  var tableElem = document.getElementById(elem);
  var elements = tableElem.getElementsByTagName('input');
  for (var i = 0; i < elements.length; i++) {
    if(!elements[i].disabled) {
    	elements[i].checked = false;
    }
  }
};
