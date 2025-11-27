class Queue {
    constructor(){this.items=[];}
    enqueue(e){this.items.push(e);}
    dequeue(){return this.items.shift();}
    front(){return this.items[0];}
    isEmpty(){return this.items.length===0;}
    size(){return this.items.length;}
    getItems(){return this.items;}
}
export { Queue };