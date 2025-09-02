---
id: longest-subarray-with-0-sum
title: Longest Subarray with 0 Sum
sidebar_label: Longest Subarray with 0 Sum
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, hashing, easy]
---


## Problem
#### Longest Subarray with 0 Sum
Given an array arr[] consisting of both positive and negative integers, find the length of the longest subarray whose elements sum is zero.
A subarray is a contiguous part of an array, formed by selecting one or more consecutive elements while maintaining their original order.
## Example
### Sample Input 1
Input: arr[] = [15, -2, 2, -8, 1, 7, 10]

### Sample Output 1
5
Explanation: The longest subarray with sum equals to 0 is [-2, 2, -8, 1, 7].


### Sample Input 2
Input: arr[] = [1, 2, 3]

### Sample Output 2
0
Explanation: There is no subarray with 0 sum.


## Step-by-step approach:

Initialize a variable prefixSum = 0 and a hashmap firstSeen = {}

Insert 0 into the hashmap with index -1: This handles the case where a subarray starting from index 0 itself has a sum of zero.

Traverse the array element by element:

=> Update the running prefix sum.

=> If this prefix sum has not been seen before, store its index in the hashmap.

=> If this prefix sum has been seen before, it means the elements between the previous index (where this sum was first seen) and the current index sum to zero.

=> Update the maximum length accordingly.

## Approach (O(n) Time and O(n) Space)
```java title="Java"
public static int maxLength(int[] arr) {
    int n = arr.length;

        // prefixSum -> first index
    Map<Integer, Integer> firstSeen = new HashMap<>();
    int prefixSum = 0;
    int maxLen = 0;

        // insert prefix sum 0 at index -1
        // to handle sum from start
    firstSeen.put(0, -1);

    for (int i = 0; i < n; i++) {
        prefixSum += arr[i];

            // prefix sum has been seen before
        if (firstSeen.containsKey(prefixSum)) {
            int prevIndex = firstSeen.get(prefixSum);
            int length = i - prevIndex;
            maxLen = Math.max(maxLen, length);
        } 
        else {
                
             // Store first occurrence of this prefix sum
            firstSeen.put(prefixSum, i);
        }
    }

    return maxLen;
}