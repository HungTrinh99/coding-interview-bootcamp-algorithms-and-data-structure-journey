// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.lenght = 0;
    }

    insertFirst(data) {
        this.insertAt(data, 0);
    }

    size() {
        return this.lenght;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        return this.getAt(this.lenght - 1);
    }

    clear() {
        this.head = null;
        this.lenght = 0;
    }

    removeFirst() {
        this.removeAt(0);
    }

    removeLast() {
        this.removeAt(this.lenght - 1);
    }

    insertLast(data) {
        this.insertAt(data, this.lenght);
    }

    getAt(index) {
        let iter = this.head;
        if (iter === null) {
            return null;
        }

        if (index > this.lenght - 1) {
            return null;
        }

        while (index > 0 && iter.next) {
            iter = iter.next;
            index--;
        }

        return iter;
    }

    removeAt(index) {
        if (!this.head || index > this.lenght - 1) {
            return;
        }

        this.lenght--;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        const next = this.getAt(index);

        if (next) {
            previous.next = next.next;
        } else {
            previous.next = null;
        }
    }

    insertAt(data, index) {
        this.lenght++;
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        previous.next = new Node(data, previous.next);
    }

    forEach(fn) {
        let elem = this.head;
        let index = 0;
        while (elem !== null && elem.next) {
            fn.apply(this, elem, index++);
        }
    }
}

module.exports = {Node, LinkedList};
