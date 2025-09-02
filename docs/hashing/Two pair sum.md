---
id: two-pair-sum
title: Two Pair Sum
sidebar_label: Two Pair Sum
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, hashing, easy]
---


## Problem
#### Find four elements a, b, c and d in an array such that a+b = c+d
Given an array arr[] of distinct integers. The task is to determine if there exist two pairs (a, b) and (c, d) such that a + b = c + d, where a, b, c, and d are distinct elements. 
Note: If multiple solutions exist, return any one valid pair.

## Example
### Sample Input 1
Input: arr[] = [3, 4, 7, 1, 2, 9, 8]

### Sample Output 1
(3, 7) and (4, 6)
Explanation: 3 + 7 = 10 and 4 + 6 = 10, satisfying the condition.


### Sample Input 2
arr[] = [1, 2, 3, 4, 5]

### Sample Output 2
(1, 4) and (2, 3)
Explanation: 1 + 4 = 5 and 2 + 3 = 5, meeting the required condition.


## Approach (O(n^2) Time and O(n^2) Space)
```java title="Java"
int[] findPairs(int[] arr) {

    int n = arr.length;
        
    // Hash table to store sum of pairs
    HashMap<Integer, int[]> sumMap = new HashMap<>();
        
    // Checking all possible pairs (a, b)
    for (int i = 0; i < n; i++) {

        for (int j = i + 1; j < n; j++) {
            int sum = arr[i] + arr[j];

            // If sum already exists, return both pairs
            if (sumMap.containsKey(sum)) {

                int[] p = sumMap.get(sum);

                // Ensuring all elements are distinct
                if (p[0] != i && p[0] != j && 
                   p[1] != i && p[1] != j) {

                    return new int[]{arr[p[0]], arr[p[1]], arr[i], arr[j]};
                }
            }

            // Store the pair for this sum
            sumMap.put(sum, new int[]{i, j});
        }
    }

    // Returning empty array if no valid pairs found
    return new int[]{};
}