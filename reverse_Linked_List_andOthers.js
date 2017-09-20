const reverseList = node => {
    if (!node || !node.next) return node;
    let reversed = reverseList(node.next);
    
    node.next.next = node;
    node.next = null;
    return reversed;
}

Stack and Queue
Question: How will you implement stack and queue with JavaScript?

Answer: stack is already implemented in JavaScritp array. you can simply call push and pop method.


var myStack = [];

//push
myStack.push(1);
myStack.push(2);
myStack.push(3);

//pop
myStack.pop(); //3
myStack.pop(); //2
myStack.pop(); //1

Queue

Queue is pretty much same. other than calling pop you will use shift method to get the element in the front side of your array.


var myQueue = [];

//push
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

//pop
myQueue.shift(); //1
myQueue.shift(); //2
myQueue.shift(); //3

Priority Queue
you have to use a maximizing heap to manage a priority queue. Hence while extracting, you just get the one on the top and while inserting you will do it at the bottom


//for now read the link.

Singly Linked List
Question: How will you create a linked list in JavaScript?

Answer: if you don't have any idea about linked list. read: wiki: linked list

to have linked list, you need a node object that will point to the next. you need one pointers (head) to point the first node of your linked list. Besides, you need methods to add and remove node from your linked list

let's get started. We have an object LinkedList and that has one property head (a pointer)


function LinkedList(){  
  this.head = null;
}
        
to create add elements, will use a push method in the prototype of the object. push method will take value and will create a node object. if there is no head, then node will be the value of head. if there is a head. then we have to walk through the linked list chain to read the tail (tail is where the next node is null). We will simple set the of next at the tail to node.


LinkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;      
    }
    else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
        
Now. create a linked list and push values in it.


var sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);

//check values by traversing LinkedList 
sll.head; //Object {data: 2, next: Object}
sll.head.next; //Object {data: 3, next: Object}
sll.head.next.next; //Object {data: 4, next: null}
        
        
        Doubly Linked List
for doubly linked list there will be a link backward to the previous element. Your node object will look like


var node = {
  value: val,
  next: null,
  previous: null  
}
        

function DoublyLinkedList(){
   this.head = null;
}

DoublyLinkedList.prototype.push = function(val){
   var head = this.head,
       current = head,
       previous = head;
  if(!head){
      this.head = {value: val, previous:null, next:null };
  }
  else{
      while(current && current.next){
         previous = current;
         current = current.next;
      }     
     current.next = {value: val, previous:current, next:null}
  }  
}
        

//test at least once
var dll = new DoublyLinkedList();
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
//trust me it works
        
        
        Remove Node from Singly LL
Question: How could you write an extension to remove a node from a LL


If you want to remove a node from your linked list you have to find the node. There are three conditions here

case -1: your targeted node is in the head. you have to replace the head with the next node
case -2: your targeted node is in the tail. you just have to remove it from the tail. Hence next of the node before the tail will be null.
case-3: your targeted node is in the middle of the LinkedList, you have to make the node after your targeted node to be the next node of the node before your targeted node.
let's do it


LinkedList.prototype.remove = function(val){
    var current = this.head;
    //case-1
    if(current.value == val){
       this.head = current.next;     
    }
    else{
      var previous = current;
      
      while(current.next){
        //case-3
        if(current.value == val){
          previous.next = current.next;          
          break;
        }
        previous = current;
        current = current.next;
      }
      //case -2
      if(current.value == val){
        previous.next == null;
      }
    }
  }  

        
Now if you want to remove you can just pass the value


sll.remove(3); 
sll.remove(1); 
        
        
        Reverse Singly Linked List
Question: How would you reverse a singly LL (no loop)?

Answer: Just walk through the LL and put the nodes in an array. This would be easier other than using remove function (if LL have one), because to remove a single item from the end of the SLL you have to walk all way to the end of the SLL every single time. Here you are just walking once.

Iterative


function reversesll(sll){
  
  if(!sll.head || !sll.head.next) return sll;

  var nodes=[], 
    current = sll.head;
  //storing all the nodes in an array
  while(current){
    nodes.push(current);
    current = current.next;
  }
    
  var reversedLL = new LinkedList();
  
  reversedLL.head = nodes.pop();
  current = reversedLL.head;
  
  var node = nodes.pop();  
  //make sure to make next of the newly inserted node to be null
  //other wise the last node of your SLL will retain its old next.
  while(node){
     node.next = null;
     current.next = node;
     
     current = current.next;
     node = nodes.pop();
  }
  return reversedLL;
}
        
test at least once.


//create the LL
var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

//test it
reversesll(sll);
//{head: {value:5, next:{value: 4, next: {value: 3, next: {value:2, next:{value:1, next: null}}}}}}
        
Recursive


//search it and implement it

Reverse Doubly LL
Question: reverse the doubly linked list without using extra space

Answer:


function reverseDoublyLL(dll){
   var head = dll.head,
       current = dll.head,
       tmp;
   while(current){
      tmp = current.next;
      current.next = current.previous;
      current.previous = tmp;
      if(!tmp){
         //set the last node as header
         dll.head = current;
      }
      current = tmp;
   }
  return dll;
}
        

//test it at least once
//or trust me it works
        
        
        kth node from End
Question: How could you get the Kth node from the end (no loop)

Answer:


function kthFromEnd(sll, k){
   var node = sll.head,
       i = 1,
       kthNode;
   //handle, 0 or negative value of k
   if(k<=0) return;

    while(node){
      if(i == k) kthNode = sll.head;
      else if(i-k>0){
       kthNode = kthNode.next;
      }
      i++;

      node = node.next;
    }
   return kthNode;
}
        

//create the LL
var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

//test at least once
kthFromEnd(sll, 1); //Object {value: 5, next: null}
kthFromEnd(sll, 3); //Object {value: 3, next: Object}
        
Delete kth node from the end
Question: How could you delete kth node from the end of a singly LL (no loop)



function deleteKthFromEnd(sll, k){
   var node = sll.head,
       i = 1,
       kthNode,
       previous;
   if(k<=0) return sll;

    while(node){
      if(i == k) kthNode = sll.head;
      else if(i-k>0){
       previous = kthNode;
       kthNode = kthNode.next;
      }
      i++;

      node = node.next;
    }
    //kth node is the head
    if(!previous)
       sll.head = sll.head.next;
    else{
     previous.next = kthNode.next;
   }
   return sll;
}
        
test at least once


//test at least once
var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

deleteKthFromEnd(sll, 2);
//{head: {value:1, next:{value: 2, next: {value: 3, next: {value:1, next:null}}}}}
        
Delete a node from doubly LL
Question: How could you delete a node from a doubly linked list?

Answer: there could be four cases

delete head: very simple, make the second node as head. and dont forget to set previous of new head to null.

node in the middle: skip break the chain, skip current node. hence next of previous node would be the next of the current node. Besides, previous of the next node would be previous node

delete tail: its also simple, make the next of previous as null.

didn't find: dont do anything


function deleteNodeDLL(val){
   var current = dll.head,
       previous;
   
   //delete head
   if(current.value == val){
      dll.head = current.next;
      //if there is only one node, then dll.head is null
      if(dll.head) dll.head.previous = null;
      return dll;
   }

   while(current.next){
      if(current.value == val){
         previous.next = current.next;
         current.next.previous = previous;
         return dll;
     }
     previous = current;
     current = current.next;
   }
   
   //delete last node
   if(current.value == val){
     previous.next = null;
   }
   return dll;
}
        
Detect a loop in Singly Linked List

function detectLoop(sll){
   var slowPointer = sll.head, 
       fastPointer = sll.head;

   while(slowPointer && fastPointer && fastPointer.next){
     slowPointer = slowPointer.next;
     fastPointer = fastPointer.next.next;

     if(slowPointer == fastPointer){
        return true;
     }
   }
   return false;
}
        

//test at least once
var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

detectLoop(sll); //false

//create a loop manually. point next of 5 to point 3
sll.head.next.next.next.next.next = sll.head.next.next

detectLoop(sll); //true
        
Detect Node where loop started
Question:

Answer: you will have two pointer slow and fast like you had to detect loop and they will meet somewhere. if fast one hit null (if thee is a way to hit null, fast one should hit if before the slower. because fast one moves fast (recally physics theories!)), there is no loop and returns null.

if there is a null and whenever both pointers meet, set slow pointer as head. Move both the pointer move by one step at a time

At the time of meet, fast one moved twice as much as slow one.

think about it and find a way to explain it


function findLoopStart(sll){
    var slow = sll.head,
        fast = sll.head;
    while(slow && fast){
       slow = slow.next;
 
       //if hits null, then there is no loop
       if(!fast.next){
          return null;
       }
 
       fast = fast.next.next;
       if(slow == fast){
           slow = sll.head;
           while(slow != fast){
              slow = slow.next;
              fast = fast.next;
           }
           return slow;
       }
   }
}
        
ref: detect where loop started

Find middle
Question: How could you detect middle of a LL?

Answer: need two pointer one will move two step another one. when two step will hit null. you will get middle for the singly. think about it.


//If you cant figure it out ourself. don't read further, do something else
        
Length of a Singly LL
Question: there could be loop in the singly LL

Answer:


//doesnt work.. somewhere gets stack overflow
//debug and find fix it
function getLength(sll){
   var head = sll.head,
       current = head,
       pointer = head,
       anotherPtr,
       len = 0;
    //use the previously written function
    var loopStartNode = findLoopStart(sll);
    if(!loopStartNode){
       while(current){
          current= current.next;
          len++;
       }
       return len;
    }
    else{       
       anotherPtr = loopStartNode;
       while(pointer != anotherPtr){
          len += 2;
          pointer = pointer.next;
          anotherPtr = anotherPtr.next;          
       }
       return len;
    }
}
        
Loop with duplicate
Question: Write a function that will return true if a circular singly linked list has duplicate values

Answer:


//code it man! dont be lazy
        
Similar question: Find the length of a linked list which contains cycle.


//just start a counter instead of checking duplicate
        
ref: career cup

Rotate by Kth Node
Question: How could you rotate a Linked List by Kth Node?

or

Question:Append the last n nodes of a linked list to the beginning of the list

Answer: if the given linked list is: 1->2->3->4->5 and k is 3,the list should be modified to: 4->5->1->2->3.


//will not work for k less than length-1
function rotateByKthNode(sll, k){
   var prevHead = sll.head,
       previous = sll.head, 
       current = sll.head,
       i = 1;
   while(current.next){
     if(i==k+1){
       sll.head = current;
       previous.next = null;
     }
     previous = current;
     current = current.next;
     i++;
  }
  current.next = prevHead;
  return sll;
}
        

rotateByKthNode(sll,3);
//{head: {value:4, next:{value: 5, next: {value: 1, next: {value:2, next:{value:3, next: null}}}}}}
        
ref: rotate by kth Node

Insert Node to Sorted LL
Question: Insert node in a sorted LL

Answer:


function pushSorted(sll, val){
   var head = sll.head,
       current = head,
       previous;
   //value lower than head value
   if(val < sll.head.value){
      sll.head = {value: val, next: head};
      return sll;
   }

   while(current){
      if(current.value > val){
         previous.next = {value: val, next: current};
         return sll;
      }
      previous = current;
      current = current.next;
   } 
   //value higher than the last node value
   previous.next = {value:val, next: null};
   return sll;
}
        

var sll = new LinkedList();
sll.push(5);
sll.push(7);
sll.push(10);
sll.push(14);

pushSorted(sll, 9);
//{head: {value: 5, next: {value: 7, next: {value: 9, next: {value: 10, next: {value: 14, next: null}}}}}}

circular Linked List
If the next pointer of the last node points to the head node, it becomes circular linked list. On Singly or Doubly Linked List, you will know you hit the tail when you hit null. For circular linked list, you will know you hit the tail when you hit the head (the next of last one pointed to head).



function CircularLinkedList(){  
  this.head = null;
}


CircularLinkedList.prototype.push = function(val){
   var head = this.head,
       current = head,
       node = {value: val, next: null, previous: null};

   if(!head){
      node.next = node;
      node.previous = node;
      this.head = node;
   }
   else{
      while(current.next != head){
         current = current.next;
      }
      
      node.next = head;
      node.previous = current;
   
      head.previous = node;
      current.next = node;
   }   
}
        

var cll = new CircularLinkedList();
cll.push(3);
cll.push(4);
cll.push(5);
//trust me dude, it works
