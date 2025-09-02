---
id: union-and-intersection
title: Union and Intersection of two LinkedLists
sidebar_label: Union and Intersection of two LinkedLists
# description: Hash map approach with time O(n) and space O(n).
keywords: [array, hashing, linked list easy]
---


## Problem
Given two singly Linked Lists, create union and intersection lists that contain the union and intersection of the elements present in the given lists. Each of the two linked lists contains distinct node values.
Note: The order of elements in output lists doesn’t matter. 

## Example
### Sample Input
Input: 
head1: 10 -> 15 -> 4 -> 20
head2:  8 -> 4 -> 2 -> 10

### Sample Output
Union: 10 -> 15 -> 4 -> 20 -> 8 -> 2
Intersection: 10 -> 4
Explanation: In these two lists 4 and 10 nodes are common. The union lists contain all the unique nodes of both lists.


## Approach (O(m + n) Time and O(m) Space)
```java title="Java"
Node getIntersection(Node head1, Node head2){
    Set<Integer> hashset = new HashSet<>();
    Node result = null;

    // Traverse the first list and add in the set
    p = head1;
    while(p != null){
        set.add(p.data);
        p = p.next;
    }

    // Traverse the second list and check for common elements
    p = head2;
    while(p != null){
        if(hashset.contains(p.data)){
            // Insert at the beginning of the result list
            Node newNode = p.data;
            newNode.next = result;
            result = newNode;
        }
        p = p.next;
    }
    return result;
}

    
// Function to get the union of two lists
static Node getUnion(Node head1, Node head2) {
    Set<Integer> unionSet = new HashSet<>();
    Node p = head1;
    while (p != null) {
        unionSet.add(p.data);
        p = p.next;
    }

    p = head2;
    while (p != null) {
        unionSet.add(p.data);
        p = p.next;
    }

    Node result = null;
    Node tail = null;

    // Insert all unique values into the result list
    for (int i : unionSet) {
        Node newNode = new Node(i);
        if (result == null) {
            result = newNode;
            tail = newNode;
        }
        else {
            tail.next = newNode;
            tail = tail.next;
        }
    }

    return result;
}