
""" Question 7
Create a program that prints out the odd numbers in anarray. Sample array: a. [1, 2, 3, 4, 5, 6] b. [ 34, 2, 9, 91, 19,401, 0]
"""

def num_array1(numbers):
    for number in numbers:
        if number % 2 != 0:
            print(number)

def num_array2(numbers):
    for number in numbers:
        if number % 2 != 0:
            print(number)

num_array1([1, 2, 3, 4, 5, 6])
num_array2([ 34, 2, 9, 91, 19, 401, 0 ])