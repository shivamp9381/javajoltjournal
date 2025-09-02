---
id: count-distinct-elements-in-every-window-of-size-k
title: Count Distinct Elements In Every Window of Size K
sidebar_label: Count Distinct Elements In Every Window of Size K
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, hashing, easy]
---


## Problem
#### Count Distinct Elements In Every Window of Size K
Given an array arr[] and an integer k, return the count of distinct numbers in all windows of size k. 
## Example
### Sample Input 1
Input: arr[] = [1, 2, 1, 3, 4, 2, 3], k = 4

### Sample Output 1
[3, 4, 4, 3]
Explanation: First window is [1, 2, 1, 3], count of distinct numbers is 3.
            Second window is [2, 1, 3, 4] count of distinct numbers is 4.
            Third window is [1, 3, 4, 2] count of distinct numbers is 4.
            Fourth window is [3, 4, 2, 3] count of distinct numbers is 3.

### Sample Input 2
Input: arr[] = [4, 1, 1], k = 2

### Sample Output 2
[2, 1]
Explanation: First window is [4, 1], count of distinct numbers is 2.
            Second window is [1, 1], count of distinct numbers is 1.


## Approach (O(n) Time and O(k) Space)
```java title="Java"
static ArrayList<Integer> countDistinct(int[] arr, int k) {
    int n = arr.length;  
    ArrayList<Integer> res = new ArrayList<>();
    Map<Integer, Integer> freq = new HashMap<>();
      
        // Store the frequency of elements of the first window
    for (int i = 0; i < k; i++) {
        freq.put(arr[i], freq.getOrDefault(arr[i], 0) + 1);
    }
      
        // Store the count of distinct elements of the first window
    res.add(freq.size());
      
    for (int i = k; i < n; i++) {
        freq.put(arr[i], freq.getOrDefault(arr[i], 0) + 1);
        freq.put(arr[i - k], freq.get(arr[i - k]) - 1);
          
            // If the frequency of arr[i - k] becomes 0, remove it
        if (freq.get(arr[i - k]) == 0) {
            freq.remove(arr[i - k]);
        }
          
        res.add(freq.size());
    }
      
    return res;
}