/*
We are storing numbers in the nodes of a binary tree. The tree starts at the root node. The root has two child nodes, its leftchild and rightchild. Each of those nodes also has two child nodes, and so on, until we reach the leaf nodes, nodes that have no children. Each node stores one nonnegative integer. The value at every non-leaf node is supposed to be the sum of its two children. But the value at one node is incorrect. Find this node.
k
Example: Consider the tree below. Note that 13 is the sum of 6 and 7, but the value 15 is incorrect, because 15 != 5 + 9 and 27 != 13 + 15. Clearly the 15 should be changed to 14.
*/

const createTreeFromArray = array => {
    const result = []
    let rootSize = 0

    while (array.length > 0) {
        rootSize *= 2
        const tierObj = {}

        try {
            
          } catch (e) {
            console.log('Array does not contain a valid tree structure')
            return false
          }
    }
}

const findIncorrectValue = tree => {
    const result = []


}

console.log(findIncorrectValue([28, 13, 14, 6, 7, 5, 9]), [0,27], "Root should be 27");
console.log(findIncorrectValue([27, 14, 14, 6, 7, 5, 9]), [1,13], "Root's leftchild should be 13");
console.log(findIncorrectValue([27, 13, 15, 6, 7, 5, 9]), [2,14], "Root's rightchild should be 14");
console.log(findIncorrectValue([29, 13, 16, 5, 8, 9, 1]), [6, 7], "The last leaf should be 7");
console.log(findIncorrectValue([21, 9, 10, 4, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4]), [0,19], "Root should be 19");
console.log(findIncorrectValue([19, 9, 10, 5, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4]), [3, 4], "First node on level 2 should be 4");
console.log(findIncorrectValue([19, 9, 10, 4, 5, 4, 6, 3, 2, 1, 4, 1, 3, 2, 4]), [8, 1], "Second node on leaf level should be 1");
