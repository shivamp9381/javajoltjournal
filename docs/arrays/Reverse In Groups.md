---
id: rev-in-groups
title: Reverse Array in Groups
sidebar_label: Reverse Array in Groups
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, easy]
---


## Problem
Given an integer array `arr`, reverse the array in groups.




## Approach (O(n) time, O(1) space)
```java title="Java"
void reverseSegment(int arr[], int start, int end){
    while(start < end){
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

void reverseInGroups(int arr[], int n, int k){
    for(int i = 0; i < n; i += k){     
        int start = i;
        int end = (i + k - 1) < n ? (i + k - 1) : n - 1;
        reverseSegment(arr, start, end);  
    }
}
