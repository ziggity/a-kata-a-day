'''
BST Successor Search
In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node with the smallest key greater than the key of the input node (see examples below). Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, return null.

Explain your solution and analyze its time and space complexities.

alt In this diagram, the inorder successor of 9 is 11 and the inorder successor of 14 is 20.
'''

#########################################################
# CODE INSTRUCTIONS:                                    #
# 1) The method findInOrderSuccessor you're asked      #
#    to implement is located at line 30.                #
# 2) Use the helper code below to implement it.         #
# 3) In a nutshell, the helper code allows you to       #
#    to build a Binary Search Tree.                     #
# 4) Jump to line 88 to see an example for how the      #
#    helper code is used to test findInOrderSuccessor.  #
#########################################################


# A node 
class Node:

  # Constructor to create a new node
  def __init__(self, key):
    self.key = key 
    self.left = None
    self.right = None
    self.parent = None

# A binary search tree 
class BinarySearchTree:

  # Constructor to create a new BST
  def __init__(self):
    self.root = None 

  def find_in_order_successor(self, inputNode):
    successor = None
    if inputNode.parent:
      if inputNode.key < inputNode.parent.key:
        successor = inputNode.parent
    node = inputNode.right
    while node != None:
      if successor:
        if node.key > inputNode.key and node.key < successor:
          successor = node
          node = node.left
        else:
          node = node.right
      else:
        if node.key > inputNode.key:
          successor = node
          node = node.left
        else:
          node = node.right
    return successor

  # Given a binary search tree and a number, inserts a
  # new node with the given number in the correct place
  # in the tree. Returns the new root pointer which the
  # caller should then use(the standard trick to avoid 
  # using reference parameters)
  def insert(self, key):
    
    # 1) If tree is empty, create the root
    if (self.root is None):
      self.root = Node(key)
      return
        
    # 2) Otherwise, create a node with the key
    #    and traverse down the tree to find where to
    #    to insert the new node
    currentNode = self.root
    newNode = Node(key)
    while(currentNode is not None):
      
      if(key < currentNode.key):
        if(currentNode.left is None):
          currentNode.left = newNode;
          newNode.parent = currentNode;
          break
        else:
          currentNode = currentNode.left;
      else:
        if(currentNode.right is None):
          currentNode.right = newNode;
          newNode.parent = currentNode;
          break
        else:
          currentNode = currentNode.right;

  # Return a reference to a node in the BST by its key.
  # Use this method when you need a node to test your
  # findInOrderSuccessor function on
  def getNodeByKey(self, key):
    
    currentNode = self.root
    while(currentNode is not None):
      if(key == currentNode.key):
        return currentNode
        
      if(key < currentNode.key):
        currentNode = currentNode.left
      else:
        currentNode = currentNode.right
        
    return None
        
######################################### 
# Driver program to test above function #
#########################################

# Create a Binary Search Tree
bst  = BinarySearchTree()
bst.insert(20)
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);  
bst.insert(14);    

# Get a reference to the node whose key is 9
test = bst.getNodeByKey(5)

# Find the in order successor of test
succ = bst.find_in_order_successor(test)

# Print the key of the successor node
if succ is not None:
    print ("\nInorder Successor of %d is %d " \
            %(test.key , succ.key))
else:
    print ("\nInorder Successor doesn't exist")
    
 '''
  BST Successor Search
Let’s denote the Inorder Successor of inputNode as successorNode. To arrive to the solution, we distinguish between two cases:

inputNode has a right child. In this case successorNode would be the node with the minimum key in inputNode's right subtree.

inputNode doesn’t have a right child. In this case successorNode would be one of inputNode's ancestors. More specifically, within inputNode's ancestor chain (starting from inputNode all the way up to the root), successorNode is the first parent that has a left child in that chain.

If inputNode doesn’t have a right child and all of its ancestors are right children to their parents, inputNode doesn’t have a successor (successorNode would be null).

So why is this always true? Well, if inputNode was inserted to the tree prior to successorNode, then since successorNode.key is greater than inputNode.key, but also smaller than all other keys greater than successorNode.key, successorNode has to be in inputNode's right subtree.

Now, if inputNode was inserted to the tree after successorNode was, then since inputNode.key is smaller than successorNode.key, but also larger than all other keys smaller than successorNode.key, inputNode has to be in successorNode's left subtree.

Pseudocode:

function findInOrderSuccessor(inputNode):
    if (inputNode.right != null):
        # return the node with minimum key in the right subtree
        return findMinKeyWithinTree(inputNode.right)

    ancestor = inputNode.parent
    child = inputNode

    # travel up using the parent pointer until you see
    # a node which is the left child of its parent. The parent
    # of such a node is successorNode.
    while (ancestor != null AND child == ancestor.right):
        child = ancestor
        ancestor = child.parent

    return ancestor

function findMinKeyWithinTree(inputNode):
    while (inputNode.left != null):
        inputNode = inputNode.left

    return inputNode
Time Complexity: in both cases where either inputNode has a right child or doesn’t have one, we are visiting only O(H) number of nodes, where H is the height of the BST. For a balanced BST, since H = log(N), where N is the number of nodes in the BST, the time complexity is O(log(N)). For an unbalanced BST, the time complexity is O(N).

Space Complexity: throughout the entire algorithm we used only a constant amount of space, hence the space complexity is O(1).

'''
