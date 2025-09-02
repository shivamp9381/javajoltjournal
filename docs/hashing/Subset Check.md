---
id: subset-check
title: Check if an array is subset of another array
sidebar_label: Check if an array is subset of another array
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, hashing, easy]
---


## Problem
Given two arrays a[] and b[] of size m and n respectively, the task is to determine whether b[] is a subset of a[]. Both arrays are not sorted, and elements are distinct.




## Approach (O(m + n) Time and O(m) Space)
```java title="Java"
boolean isSubset(int a[], int b[]){
    Set<Integer> hashset = new HashSet<>();
    for(int num : a){
        hashset.add(num);
    }
    for(int num : b){
        if(!hashset.contains(num)){
            rerturn false;
        }
    }
    return true;
}