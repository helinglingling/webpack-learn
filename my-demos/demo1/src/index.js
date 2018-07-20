import _ from 'lodash'
import './style.css'
import Icon from './icon.jpg'
import data from './data.xml'
// 模块和资源组合在一起
function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

// 图片，字体，xml，csv文件引入
    var img = new Image();
    img.src = Icon;
    element.appendChild(img)

    console.log(data)

    return element;
  }
  
document.body.appendChild(component());