class QueueElement {
    constructor(element, priority) { this.element = element; this.priority = priority; }
}
class PriorityQueue {
    constructor() { this.items = []; }
    enqueue(element, priority) {
        const qe = new QueueElement(element, priority);
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (qe.priority < this.items[i].priority) {
                this.items.splice(i, 0, qe); added = true; break;
            }
        }
        if (!added) this.items.push(qe);
    }
    dequeue() { return this.items.shift(); }
    front() { return this.items[0]; }
    isEmpty() { return this.items.length === 0; }
    size() { return this.items.length; }
    getItems() { return this.items; }
}
export { PriorityQueue };