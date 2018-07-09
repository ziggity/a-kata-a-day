/*
You are given an array of integers a. A range sum query is defined by a pair of non-negative integers l and r (l <= r). The output to a range sum query on the given array a is the sum of all the elements of a that have indices from l to r, inclusive.

You have the array a and a list of range sum queries q. Find an algorithm that can rearrange the array a in such a way that the total sum of all of the query outputs is maximized, and return this total sum.

Example

For a = [9, 7, 2, 4, 4] and q = [[1, 3], [1, 4], [0, 2]], the output should be
maximumSum(a, q) = 62.

You can get this sum if the array a is rearranged to be [2, 9, 7, 4, 4]. In that case, the first range sum query [1, 3] returns the sum 9 + 7 + 4 = 20, the second query [1, 4] returns the sum 9 + 7 + 4 + 4 = 24, and the third query [0, 2] returns the sum 2 + 9 + 7 = 18. The total sum will be 20 + 24 + 18 = 62.


*/

// java method: 

int maximumSum(int[] A, int[][] Q) {
    int[] sumCount = new int[A.length];
    for (int i = 0; i < Q.length; i++) {
        for (int j = Q[i][0]; j <= Q[i][1]; j++) {
            sumCount[j]++;
        }
    }
    Arrays.sort(A);
    Arrays.sort(sumCount);
    int answer = 0;
    for (int i = 0; i < A.length; i++) {
        answer += A[i] * sumCount[i];
    }
 
    return answer;
}

// js method

function maximumSum(a, q) {
    var len = a.length;
    var arr = new Array(len);
    arr.fill(0);
    
    var qLen = q.length;
    for (var i = 0; i < qLen; ++i)
    {
        var left = q[i][0];
        var right = q[i][1];
        for (var j = left; j <= right; ++j)
        {
            ++arr[j];
        }
    }
    
    arr.sort(compareByNumValue);
    a.sort(compareByNumValue);
    
    var sum = 0;
    for (var i = 0; i < len; ++i)
    {
        var localSum = a[i] * arr[i];
        sum += localSum;
    }
    return sum;
}

function compareByNumValue(a, b)
{
    return a - b;
}
