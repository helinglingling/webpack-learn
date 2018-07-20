import _ from 'lodash'
import {add} from './math.js'


function component() {
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + add(5,6)
      ].join('\n\n');
      
    return element;
  }

document.body.appendChild(component())   
