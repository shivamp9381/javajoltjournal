---
id: max-subarray-of-size-k-2
title: Maximum of all subarrays of size k (approach 2)
sidebar_label: Maximum of all subarrays of size k (approach 2)
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, easy]
---


## Problem
Given an integer array `arr`, find the maximum of all subarrays of size `k`.


## Efficient approach



### Approach 2 (O(n*k) time, O(1) space)
```java title="Java"
void maxOfSubarray(int arr[], int n, int k) {
    if (n == 0 || k == 0) return;

    // Find max of first window
    int max = arr[0];
    for (int i = 1; i < k; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    System.out.println(max);

    // Process rest of the windows
    for (int i = k; i < n; i++) {
        // Case 1: previous max is still in the window
        if (arr[i] >= max) {
            max = arr[i]; // incoming element is new max
        } 
        else if (arr[i - k] == max) {
            // outgoing element was the max → recompute max
            max = arr[i - k + 1];
            for (int j = i - k + 2; j <= i; j++) {
                if (arr[j] > max) {
                    max = arr[j];
                }
            }
        }
        System.out.println(max);
    }
}




