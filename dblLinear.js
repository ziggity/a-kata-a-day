Instructions
Output
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

#Task: Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.

#Example: dbl_linear(10) should return 22

#Note: Focus attention on efficiency
............................................................................................
function dblLinear(n) {
  let num = 2, ind = 1, s = new Set();
  s.add(1);
  while (true)
  {
    let temp = num, check = 0;
    if ((temp - 1) % 3 == 0)
    {
      temp = Math.floor((temp - 1) / 3);
      if (s.has(temp))
        check = 1;
    }
    temp = num;
    if ((temp - 1) % 2 == 0)
    {
      temp = Math.floor((temp - 1) / 2);
      if (s.has(temp))
        check = 1;
    }
    if (check == 1)
    {
      s.add(num);
      ind ++;
    }
    if (ind == n+1)
      return num;
    num += 1;
  }
  }

..................................................................................................
