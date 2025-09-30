---
id: sort-array-in-zig-zag-order
title: Sort the array in zig-zag order
sidebar_label: Sort the array in zig-zag order
keywords: [array, easy]
---

## Problem
Given an array of numbers, sort them in zig zag order.

### Explanation 
arr[0] < arr[1] > arr[2] < arr[3] > arr[4] ...
Basically, numbers alternate between < and >.

### Approach
1) Traverse the array once.

2) At every index i, enforce the zigzag condition:

       (i) If i is even → arr[i] < arr[i+1]

      (ii) If i is odd → arr[i] > arr[i+1]

3) If the condition is not satisfied, swap them.

This works in O(n) time.

### Saple Input:
[4, 3, 7, 8, 6, 2, 1]

### Steps
```ini title="ini"
i=0 (even): need arr[0]<arr[1] → 4>3, swap → [3,4,7,8,6,2,1]
i=1 (odd): need arr[1]>arr[2] → 4>7 ❌ swap → [3,7,4,8,6,2,1]
i=2 (even): need arr[2]<arr[3] → 4<8 ✅
i=3 (odd): need arr[3]>arr[4] → 8>6 ✅
i=4 (even): need arr[4]<arr[5] → 6>2 ❌ swap → [3,7,4,8,2,6,1]
i=5 (odd): need arr[5]>arr[6] → 6>1 ✅
```

### Sample Output:
[3, 7, 4, 8, 2, 6, 1]   

### Code (Java)
```java title="Java"
import java.util.*;
public class ZigZag{
    public static void zigzag(int[] arr){
        flag = true; // fag = true means this '<' condition and vice versa
        for(int i = 0; i < arr.length-1; i++){
            if(flag){
                if(arr[i] > arr[i+1]){
                    int temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                }
            else{
                if(arr[i] < arr[i+1]){
                    int temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                }
            }
            flag = !flag;
        }
    }
}
```

### Output
[3, 7, 4, 8, 2, 6, 1]
