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
        this.head = new Node(data, this.head);
        this.lenght++;
    }

    size() {
        return this.lenght;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let last = this.head;
        while (last.next) {
            last = last.next;
        }

        return last;
    }

    clear() {
        this.head = null;
        this.lenght = 0;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        this.lenght--;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        this.lenght--;
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let next = previous.next;
        while (next.next) {
            previous = next;
            next = next.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        this.lenght++;

        const last = this.getLast();
        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
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
            this.removeFirst();
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
            this.insertFirst(data);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        previous.next = new Node(data, previous.next);
    }
}

module.exports = {Node, LinkedList};
