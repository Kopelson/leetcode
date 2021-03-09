/* You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself. */

function addTwoNumbers(l1,l2){
    //Initialize current node to dummy head of the returning list.
    let dummyHead;
    let currentNode = dummyHead;
    //Initialize carry to 0.
    let carry = 0;
    //Initialize p and q to head of l1 and l2 respectively.
    let p = l1;
    let q = l2;
    //Loop through lists l1 and l2 until you reach both ends.
    while(p || q){
        //Set x to node p's value. If p has reached the end of l1, set to 0.
        let x = 0;
        if(p.val){
            x = p.val;
        }
        //Set y to node q's value. If q has reached the end of l2, set to 0.
        let y = 0;
        if(q.val){
            y = q.val;
        }
        //Set sum = x + y + carry
        let sum = x + y + carry;
        //Update carry = sum / 10
        carry = Math.floor(sum / 10);
        //Create a new node with the digit value of (sum mod 10) and set it to current node's next, then advance current node to next.
        let next = sum % 10;
        let tempNode = new ListNode(next);
        if(dummyHead == null){
            dummyHead = new ListNode(next);
            currentNode = dummyHead;
        }else{
            currentNode.next = tempNode;
            currentNode = currentNode.next;
        }
        // Advance both p and q.
        if(p.next != null){
            p = p.next;
        } else {
            p = false
        }
        if(q.next != null){
            q = q.next;
        } else {
            q = false;
        }
    }
        //Check if carry > 0, if so append a new node with the carry to the returning list.
        if (carry > 0){
            let tempNode = new ListNode(carry);
            currentNode.next = tempNode;
        }
        // Return dummy head's next node.
        return dummyHead;
}

// Personal notes

/*

What is a Linked List?
"A linked list is an ordered collection of data elements. A data element can be represented as a node in a linked list. Each node consists of two parts: data & pointer to the next node.
Unlike arrays, data elements are not stored at contiguous locations. The data elements or nodes are linked using pointers, hence called a linked list." -https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

Time Complexity:
O(n+m)


*/

