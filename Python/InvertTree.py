# Definition for a binary tree node.
from typing import Optional

class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# hacker rank or leetcode converts the list into a binary tree automagically
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # if the root is null
        if not root:
            return None
        
        # swap the children (need a tmp var)
        tmp = root.left
        root.left = root.right
        root.right = tmp
        
        # recrusive calls
        self.invertTree(root.left)
        self.invertTree(root.right)
        return root
                
# Input: root = [1,2,3,4,5,6,7]

# Output: [1,3,2,7,6,5,4]