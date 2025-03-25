from typing import List

def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
    # for reference
    rows = len(matrix)
    cols = len(matrix[0])
    
    # two pointers (these are rows) 
    top = 0
    bot = rows - 1
    
    while top <= bot:
        row = (top + bot) // 2
        if target > matrix[row][-1]:
            top = row + 1
        elif target < matrix[row][0]:
            bot = row -1
        else: 
            break
        
    # top and bot pointers crossed
    if not (top <= bot):
        return False
    row = (top + bot) // 2
    left = 0
    right = cols - 1
    while left <= right:
        middle = (left + right) // 2
        if target > matrix[matrix][middle]:
            left = middle + 1
        elif target < matrix[matrix][middle]:
            right = middle - 1
        else:
            return True
    return False
        
             
        
        
print(searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 15))