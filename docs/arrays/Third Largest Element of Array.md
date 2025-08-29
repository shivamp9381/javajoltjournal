---
id: third-largest-element
title: Third Largest Number in Array
sidebar_label: Third Largest Number in Array
description: Method 1: Without Sorting (O(n) time, O(1) space).
             Method 2: With Sorting (O(n log n))
keywords: [array, sorting, easy]
---

## Problem
Given an integer array `arr`, return the third largest number in the array.

## Approach (Without sorting O(n) time, O(1) space)
```java title="Java"
public class ThirdLargestFinder(int[] arr){
    if(arr.length < 3){
        return null;
    }
    int first = null;
    int second = null;
    int third = null;

    for(int num : nums){
        if(first == null || num > first){
            third = second;
            second = first;
            first = num;
        }
        else if(second == null || num > second){
            third = second;
            second = num;
        }
        else if(third == null || num > third){
            third = num;
        }
    }
    return third;
}


