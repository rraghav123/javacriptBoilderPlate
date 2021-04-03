import { getElementById, newNode } from './utils';

function root() {
    const ele = newNode('p');
    document.body.appendChild(ele);
    ele.id = 'hello';
    console.log(getElementById('hello'))
}

root();
