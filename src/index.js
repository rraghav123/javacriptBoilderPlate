import { appendNode } from './utils';
import Dashboard from './views/dashboard';
import './styles/index.scss'

function root() {
    const UI = Dashboard();
    appendNode(UI);
}

document.addEventListener('DOMContentLoaded', () => {
    root();
})
