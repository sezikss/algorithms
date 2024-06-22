
var MyCircularQueue = function(k) {
    this.data = new Array(k)
    this.maxSize = k
    this.front = -1
    this.rear = -1
    this.length = 0
    
};


MyCircularQueue.prototype.enQueue = function(value) {
    
    if(this.isFull()) {
        return false
    }
    this.rear = (this.rear + 1) % this.maxSize
    this.data[this.rear] = value
    this.length++
    if(this.front == -1){
        this.front = this.rear
    }
    return true
};


MyCircularQueue.prototype.deQueue = function() {
    if(!this.isEmpty()){
        let element  = this.data[this.front]
        this.data[this.front] = null
        this.front = (this.front+1) % this.maxSize
        this.length--
        return true
    }else{
        return false
    }
};


MyCircularQueue.prototype.Front = function() {
   if(this.isEmpty()){
       return -1
   }
   return this.data[this.front]
};


MyCircularQueue.prototype.Rear = function() {
      if(this.isEmpty()){
       return -1
   }
    return this.data[this.rear]
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.length === 0
};


MyCircularQueue.prototype.isFull = function() {
    return this.length === this.maxSize
};