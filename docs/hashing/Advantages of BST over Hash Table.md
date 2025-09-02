---
id: advantages-of-BST-over-hash-table
title: Advantages of BST over Hash Table
sidebar_label: Advantages of BST over Hash Table
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, hashing, easy]
---


## Hash Table vs. Binary Search Tree (BST)

[Hash Table](#) supports following operations in O(1) time:  
1. Search  
2. Insert  
3. Delete  
The time complexity of above operations in a self-balancing [Binary Search Tree (BST)](#) (like [Red-Black Tree](#), [AVL Tree](#), [Splay Tree](#), etc.) is O(Log n).

So Hash Table seems to beat BST in all common operations. When should we prefer BST over Hash Tables, what are advantages?  
Following are some important points in favor of BSTs.

1. **We can get all keys in sorted order by just doing Inorder Traversal of BST.**  
   This is not a natural operation in Hash Tables and requires extra efforts.
2. **Doing [order statistics](#), [finding closest lower and greater elements](#), [doing range queries](#)** are easy to do with BSTs. Like sorting, these operations are not a natural operation with Hash Tables.
3. **BSTs are easy to implement compared to hashing.**  
   We can easily implement our own customized BST. To implement Hashing, we generally rely on libraries provided by programming languages.
4. **With Self-Balancing BSTs, all operations are guaranteed to work in O(Log n) time.**  
   But with Hashing, O(1) is average time and some particular operations may be costly i.e., O(n), especially when table resizing happens.
5. **Range searches can be done efficiently with BSTs,** but hash tables can also support efficient range searches if implemented properly with techniques such as linear probing or chaining.
6. **BST might turn out to be memory efficient compared to Hash tables** as in BST we have exactly _n_ nodes for _n_ keys. But the size of hash table can be larger for efficient operations.
7. **BST performs well on small data sets with a small number of elements,** whereas Hash tables are not highly suitable for small data sets with a few elements.
8. **BST has recursive structure**, which can be used to solve problems more elegantly and efficiently. Hash tables do not allow for recursion.

---

## Comparison table between Hash Tables and Binary Search Trees (BSTs):

| Comparison Criteria                                | Hash Table                         | BST                           |
|----------------------------------------------------|-------------------------------------|-------------------------------|
| Search Time Complexity                             | O(1)                                | O(log n)                      |
| Insertion Time Complexity                          | O(1)                                | O(log n)                      |
| Deletion Time Complexity                           | O(1)                                | O(log n)                      |
| Memory Overhead                                   | High                                | Low                           |
| Range Searches                                    | Requires special implementation     | Efficient                     |
| Rebalancing                                       | Not necessary                       | Required for self-balancing BSTs |
| Ordering                                          | Not inherently ordered              | Inherently ordered with sorted traversal |
| Recursion                                         | Not Inherently Recursive Structure  | Recursive Structure           |
| Handling Collisions                               | Hash function and collision resolution strategies | Not applicable                |
| Implementation                                    | Mostly relies on libraries provided by programming languages | Can be easily implemented and customized |
| Suitability for Small Data Sets with Few Elements  | Less suitable due to memory overhead| More suitable                 |

