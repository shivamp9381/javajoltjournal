---
id: max-subarray-of-size-k
title: Maximum of all subarrays of size k
sidebar_label: Maximum of all subarrays of size k
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, easy]
---


## Problem
Given an integer array `arr`, find the maximum of all subarrays of size `k`.


## Inefficient approach



### Approach 1 (O(n*k) time, O(1) space)
```java title="Java"
void maxOfSubarray(int arr[], int n, int k){
    for(int i = 0; i < n-k; i++){
        int max = arr[i];
        for(int j = i; j < k; j++){
            if(arr[i+j] > max){
                arr[i+j] = max;
            }
        }
        System.out.println(max);
    }
}




