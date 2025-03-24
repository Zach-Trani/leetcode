
def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    
    sMap = {}
    tMap = {}
    
    for c in s:
        if c in sMap:
            sMap[c] += 1
        else:
            sMap[c] = 1
    
    for c in t:
        if c in tMap:
            tMap[c] += 1
        else:
            tMap[c] = 1
    
    for c in s:
        if sMap[c] != tMap[c]:
            return False
    return True
    
    
    # nlogn time complexity
    # if list(sorted(t)) == list(sorted(s)):
    #     return True
    # return False
        
print(isAnagram('anagram', 'nagaram'))
print(isAnagram('rat', 'car'))