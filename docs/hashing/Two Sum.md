---
id: two-sum
title: Two Sum
sidebar_label: Two Sum
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, hashing, easy]
---


## Problem
Given an array arr[] of n integers and a target value, check if there exists a pair whose sum equals the target. This is a variation of the 2-Sum problem.

## Example
### Sample Input 1
Input: arr[] = [0, -1, 2, -3, 1], target = -2

### Sample Output 1
true
Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.


### Sample Input 2
arr[] = [1, -2, 1, 0, 5], target = 0

### Sample Output 2
false
Explanation: There is no pair with sum equals to given target.


## Approach (O(n) time and O(n) space)
```java title="Java"
boolean twoSum(int arr[], int target){
    // Create a hashset to store elements
    Set<Integer> hashset = new HashSet<>();
    for(int i = 0; i < arr.length; i++){
        // Calculate the complement that added to
        // arr[i], equals the target

        int complement = target - arr[i];
        if(hashset.contains(complement)){
            return true;
        }
        set.add(arr[i]);
    }
    return false;

}