import {createElement, appendNode, addClass, querySelector, hasClass, toggleClass} from '../../utils';
import styles from './index.scss';

class DropDown {
    constructor({
        data = [],
        onSelect = () => {},
        title = 'Select Item'
    }) {
        this.data = data || [];
        this.onSelect = (e) => {
            const dropDownContainer = querySelector(`.${styles.dropDown}`);
            if(e.target.nodeName === 'INPUT') {
                toggleClass(dropDownContainer, styles.hideDropDown);
            } else {
                this.setActiveItem(e.target.id);
                toggleClass(dropDownContainer, styles.hideDropDown);
                onSelect(this.activeItem);
            }
        };
        this.container = null;
        this.title = title;
        this.activeItem = null;
    }

    constructUI() {
        const container = createElement('div');
        const input = createElement('input');
        const dropDownContainer = createElement('ul');

        addClass(container, styles.container);
        addClass(dropDownContainer, [styles.hideDropDown, styles.dropDown]);
        addClass(input, styles.input);

        input.value = this.title;
        input.readOnly = true;

        const elements = this.data.map(val => {
            const li = createElement('li');
            li.id = val;
            li.innerText = val;
            return li;
        });

        elements.forEach(element => {
            appendNode(element, dropDownContainer);
        })

        appendNode(input, container);
        appendNode(dropDownContainer, container);
        this.container = container;
    }

    getUI() {
        this.constructUI();
        this.container.addEventListener('click', this.onSelect);
        return this.container;
    }

    getActiveItem() {
        return this.activeItem;
    }

    setActiveItem(item) {
        const input = querySelector(`.${styles.input}`)
        input.value = item;
        this.activeItem = item;
    }

    destroyUI() {
        this.container.removeEventListener('click', this.onSelect);
        this.container = null;
    }
}

export default DropDown;
