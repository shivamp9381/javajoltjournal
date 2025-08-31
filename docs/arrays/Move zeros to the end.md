---
id: move-zeros-to-end
title: Move zeros to the end in an array
sidebar_label: Move zeros to the end in an array
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, easy]
---

## Problem
Given an integer array `arr`, Move all the zeros at the end.


## Approach (O(n) time, O(1) space)
```java title="Java"
void pushZerostoEnd(int arr[], int size){
    int nonZeroIndex = 0;
    for(int i = 0; i < size; i++){
        if(arr[i] != 0){
            arr[nonZeroIndex++] = arr[i];
        }
    }
    while(nonZeroIndex < size){
        arr[nonZeroIndex] = 0;
        nonZeroIndex++;
    }
}