Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expanded_form(12) # Should return '10 + 2'
expanded_form(42) # Should return '40 + 2'
expanded_form(70304) # Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
--------------------------------------------------------------------------------------------------------------------

Thoughts:

1.Take a # and sum its digits rasied to their poewrs 8^1 = 8 since 8/1 = 8, and 9^2 is 81, so its 89. 
2.

-------------------------------------------------------------------------------------------------------------------
Python solution:

def expanded_form(num):
    i = 10**(len(str(num))-1)
    ans = ''
    while num:
        if (num//i)*i != 0:
            ans += str((num//i)*i) + ' + '
        num = num % i
        i //= 10
    return (ans[0:len(ans)-3])
