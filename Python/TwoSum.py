def twoSum(nums, target):
    prevMap = {}
    for i, n in enumerate(nums):
        if (target - n) in prevMap:
            return [prevMap[target - n], i]
        prevMap[n] = i
print(twoSum([2, 7, 11, 15], 9))  # Quick test case

