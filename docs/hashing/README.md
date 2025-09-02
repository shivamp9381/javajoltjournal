**Topic landing page** example (`docs/hashing/README.md`):
<!-- ```md
---
sidebar_position: 1
--- -->


# Hashing
Quick access to foundational hashing techniques, patterns, and classic questions.

Hashing is a powerful technique in Data Structures and Algorithms (DSA) that involves mapping data to a fixed-size value using a hash function. The key advantage of hashing is its ability to provide fast lookups, often achieving constant time complexity, O(1), for operations like searching and inserting elements. However, a good hash function is essential to minimize collisions, where multiple inputs produce the same hash value.

### HashMap v/s HashSet v/s HashTable
HashMap, HashSet, and Hashtable are all data structures in Java that use hashing for efficient data storage and retrieval, but they serve different purposes and have distinct characteristics.

HashMap is a hash table-based implementation of the Map interface, storing data as key-value pairs where keys must be unique.
 It allows one null key and multiple null values, and it is not synchronized, making it faster than Hashtable for single-threaded applications.
 The put() method is used to insert elements.

HashSet is a hash table-based implementation of the Set interface, designed to store unique elements without any associated values.
 It does not allow duplicate values and can contain a single null value.
 Internally, it uses a HashMap to store its elements, treating the objects as keys and using a dummy value for the associated value.
 The add() method is used to insert elements.

Hashtable is a legacy class that implements a hash table, also storing data as key-value pairs where keys must be unique.
 It is synchronized, meaning it is thread-safe, but it does not allow null keys or null values.
 This synchronization makes it slower than HashMap for single-threaded use, and it is generally recommended to use HashMap with external synchronization or ConcurrentHashMap for thread safety instead.
 The put() method is used to insert elements.


### Internal working of Hashing and collision
Hashing is a technique used in data structures to map keys to specific indices in a hash table, enabling efficient data storage and retrieval. The process begins with a hash function, which takes a key as input and generates a hash value, typically an integer that serves as an index for the hash table.
 The goal is to distribute keys uniformly across the table to minimize collisions, where two or more distinct keys produce the same hash value and thus map to the same index.
 Collisions are inevitable in practice because the number of possible keys is often much larger than the number of available slots in the hash table, making it impossible to guarantee unique indices for all keys.

When a collision occurs, collision resolution techniques are employed to find an alternative location for the colliding item. There are two primary categories of these techniques: separate chaining and open addressing.

In separate chaining, each slot in the hash table contains a linked list (or another data structure like an array) that can hold multiple items. When a collision happens, the new item is simply appended to the list at that slot's index.
 This method preserves the original hash function's meaning and allows for dynamic growth of the list as needed.
 Insertion is efficient, typically O(1), as the new element is added to the front of the list. However, search and deletion operations depend on the length of the list; in the worst case, where all keys hash to the same slot, the time complexity degrades to O(n), where n is the number of elements in the list.
 The load factor, defined as the ratio of the number of elements to the number of slots (N/M), is a key metric for performance; a higher load factor increases the average length of the chains and thus the search time.

In open addressing, all items are stored directly within the hash table itself, and no external data structures like linked lists are used.
 When a collision occurs, the algorithm probes the table to find the next available slot. The probing sequence is determined by a rehash function, and the process continues until an empty slot is found. This method requires less memory than chaining since it avoids the overhead of pointers, but it can be more complex to implement and manage.
 There are several common probing strategies:

Linear Probing: The simplest form, where the algorithm checks the next slot sequentially (i.e., (hash(key) + i) mod M, where i is the probe number) until an empty slot is found.
 However, this method suffers from primary clustering, where consecutive collisions create long runs of occupied slots, which can significantly degrade performance.
Quadratic Probing: This method uses a quadratic function to determine the probe sequence (e.g., (hash(key) + c1i + c2i²) mod M) to reduce primary clustering by spreading out the probes more evenly.
 While it improves upon linear probing, it can still suffer from secondary clustering, where keys with the same initial hash value follow the same probe sequence.
Double Hashing: This technique uses a second hash function to calculate the step size for each probe (e.g., (hash1(key) + i * hash2(key)) mod M).
 The second hash function should never evaluate to zero to ensure all slots are eventually probed. Double hashing generally provides the most uniform distribution of probes and minimizes clustering, leading to better performance under high load factors.
The choice between chaining and open addressing depends on the specific use case. Chaining is simpler to implement and handles high load factors well, while open addressing is more memory-efficient and can offer better cache performance, especially when the table size is carefully chosen (e.g., a prime number) to maximize probe coverage.
 Both methods aim to maintain an average-case time complexity of O(1) for insert, search, and delete operations, though the actual performance is highly dependent on the quality of the hash function and the load factor.


### Bucketing in Hashing
Bucketing in hashing refers to the process of organizing data within a hash table by grouping records that hash to the same index into a single unit called a bucket.
 This technique is used to manage collisions, which occur when different keys produce the same hash value and thus map to the same bucket.
 The primary goal of bucketing is to improve the efficiency of data retrieval by reducing the number of elements that need to be searched within a specific location.

A hash function computes an index, often called a bucket number, which determines the location in an array where a key-value pair should be stored.
 Each bucket can be implemented as a data structure such as a linked list, a tree, or a fixed-size array. For instance, in a hash table using separate chaining, each bucket contains a linked list of entries that hash to the same index.
 In more advanced implementations, like Java's HashMap from version 8 onwards, a bucket may contain either a linked list or a tree structure, with the tree being used when a bucket becomes too large to maintain efficient performance.

The effectiveness of bucketing depends heavily on the quality of the hash function. A good hash function distributes keys uniformly across the available buckets, minimizing the number of collisions and ensuring that each bucket contains a manageable number of entries.
 This uniform distribution allows for faster lookups, insertions, and deletions, as the search space within each bucket is significantly smaller than the entire dataset.
 If a bucket becomes full, overflow handling strategies, such as using an overflow bucket, may be employed to store additional records.

Bucketing is also used in database systems like Apache Hive, where data is partitioned and further subdivided into buckets using a hash function applied to a specific column, with the result modulo the number of buckets determining the final bucket assignment.
 This approach helps in optimizing query performance and managing large datasets efficiently.