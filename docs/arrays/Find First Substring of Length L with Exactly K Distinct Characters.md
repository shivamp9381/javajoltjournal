---
id: first-substring-of-length-l-with-exactly-k-distinct-characters
title: Find First Substring of Length L with Exactly K Distinct Charactersr
sidebar_label: Find First Substring of Length L with Exactly K Distinct Characters
keywords: [array, easy]
---

## Problem
A technology company maintains a chronological log of system events during daily operations. Each event is recorded as a lowercase letter in a string s . The operations are to quickly identify a segment of the log where a specific pattern occurs. Specifically, given an integer L represanting the exact length of a segment and an integer K represanting required number of distinct event types. Determine the starting index (0-indexed) of the first contigous segment of length L in s that contains exactly k distinct events.If no segment exixts retuen -1.

### Question Restated

You are given:

1) A string s, where each character represents a system event (like a log entry).

2) An integer L, which is the required length of a segment (substring).

3) An integer K, which is the required number of distinct event types (different characters).

### Task

Find the starting index (0-based) of the first substring of length L in s that has exactly K distinct characters.

    (i) If such a substring exists → return its starting index.

    (ii) If not → return -1.

```text title="Example1"
s = "abcba", L = 3, K = 2
```
Substrings of length 3:

"abc" → `{a,b,c}` = 3 distinct ❌

"bcb" → `{b,c}` = 2 distinct ✅ (match found at index 1)

"cba" → `{c,b,a}` = 3 distinct ❌

Answer: 1

```text title="Example2"
s = "aaaaa", L = 2, K = 1
```
Substrings of length 2:

"aa" → `{a}` = 1 distinct ✅ (index 0)

Answer: 0

### Approach (Sliding Window)
We need to check substrings of fixed length L for having exactly K distinct characters.

1) Use a frequency map (HashMap/array) to count characters in the current window of size L.

2) Initialize the first window (characters from index 0 to L-1).

    (i) If distinct count == K → return 0.

Slide the window:

Add the new character entering the window.

Remove the old character leaving the window.

Update the distinct count accordingly.

If distinct count == K → return the starting index.

If no window satisfies → return -1.

⏱️ Time Complexity: O(n) (since each character is added/removed once).
📦 Space Complexity: O(26) (or O(n) for general characters).

### Java Code
```java title="Java"
import java.util.*;
public class FirstSegment{
    public static int findSegment(String s, int L, int K) {
        int n = s.length();
        if (L > n) {
            return -1;
        }
        Map<Character, Integer> freq = new HashMap<>();
        
        //build the first window
        for (int i = 0; i < L; i++) {
            freq.put(s.charAt(i), freq.getOrDefault(s.charAt(i), 0) + 1);
        }
        if (freq.size() == K) {
            return 0;
        }

        //slide the window
        for (int i = L; i < n; i++) {
            char add = s.charAt(i);
            char remove = s.charAt(i - L);

            // add new char
            freq.put(add, freq.getOrDefault(add, 0) + 1);

            // remove old char
            freq.put(remove, freq.get(remove) - 1);
            if (freq.get(remove) == 0) {
                freq.remove(remove);
            }

            // check distinct count
            if (freq.size() == K) {
                return i - L + 1;
            }
        }
        return -1; // Not found
    }
}
```
