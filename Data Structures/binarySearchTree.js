class Tree {
    constructor(){
        this.root =null;
    }
    toObject(){
        return this.root;
    }
    add(value){
        if(this.root==null){
            // if no head then create a new head
            this.root = new Node(value);
            return;
        }
        let current = this.root;
        // loop over as many times as we need
        while(true){
            if(current.value > value){
                //go left
                if(current.left){
                    current = current.left;
                }
                else{
                    current.left = new Node(value);
                    return;
                }
            }
            else{
                //go right
                if(current.right){
                    current = current.right;
                
                }
                else{
                    current.right = new Node(value);
                    return;
                }
            }
        }
    }
}

class Node{
    constructor(value, left=null, right=null){
        this.value = value;
        this.left = left;
        this.right = right;

    }
}

const tree = new Tree();
tree.add(7);
tree.add(5);
tree.add(3);

console.log(tree);