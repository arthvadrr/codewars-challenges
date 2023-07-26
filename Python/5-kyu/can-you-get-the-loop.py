'''
You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:
'''

def loop_size(node):
    links = {node: 1}
    index = 1

    while True:
        node = node.next

        if node in links:
            if index == 1: return 1
            return len(links) - links[node]

        links[node] = index

        index += 1