---
id: two-sum
title: Two Sum (LeetCode 1)
sidebar_label: Two Sum
description: Hash map approach with time O(n) and space O(n).
keywords: [array, hashmap, easy]
---


## Problem
Given an array `nums` and integer `target`, return indices of the two numbers such that they add up to `target`.


## Intuition
Use a map from value → index and check complement on the fly.


## Approach
```cpp title="C++"
vector<int> twoSum(vector<int>& a, int t){
unordered_map<int,int> pos; // value -> index
for(int i=0;i<a.size();++i){
int need = t - a[i];
if(pos.count(need)) return {pos[need], i};
pos[a[i]] = i;
}
return {};
}