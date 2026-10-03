package com.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SecondLargestTest {

    @Test
    void shouldReturnSecondLargestNumber() {
        int[] arr = {10, 5, 20, 8, 15};

        int result = SecondLargest.findSecondLargest(arr);

        assertEquals(15, result);
    }

    @Test
    void shouldWorkWithNegativeNumbers() {
        int[] arr = {-10, -5, -20, -8, -15};

        int result = SecondLargest.findSecondLargest(arr);

        assertEquals(-8, result);
    }

    @Test
    void shouldWorkWithUnsortedArray() {
        int[] arr = {30, 10, 50, 20, 40};

        int result = SecondLargest.findSecondLargest(arr);

        assertEquals(40, result);
    }

    @Test
    void shouldIgnoreDuplicateLargestValues() {
        int[] arr = {10, 20, 20, 5, 15};

        int result = SecondLargest.findSecondLargest(arr);

        assertEquals(15, result);
    }
}