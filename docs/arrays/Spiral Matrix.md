---
id: print-matrix-in-spiral-order
title: Print the matrix in spiral manner
sidebar_label: Print the matrix in spiral manner
keywords: [array, matrix , medium]
---

## Problem
Given an integer matrix `A`, print the matrix in a spiral manner.

### Sample input:
A = [{1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12},
    {13, 14, 15, 16}]

### Sample input:
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10


## Approach (O(r*c) time complexity, O(1) space complexity)
```java title="Java"
void PrintSpiral(int A[r][c]){
    int l, n, k, m, i;
    k = 0;
    l = 0;
    m = r-1;
    n = c-1;
    while(k <= m && l <= n){
        for(i = l; i <= n; i++){
            printf("%d ", A[k][i]);
        }
        k++;
        for(i=k; i <= n; i++){
            printf("%d ", A[i][n]);
        }
        n--;
        if(k <= m){
            for(i =n ; i >= l; i--){
                printf("%d ", A[m][i]);
            }
            m--;
        }
        if(l <= n){
            for(i = m; i >= k; i--){
                printf("%d ", A[i][l]);
            }
            l++;
        }
    }
}

