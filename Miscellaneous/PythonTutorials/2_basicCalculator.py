#
# https://www.hackerrank.com/challenges/basic-calculator
#

import fileinput
import decimal

n = fileinput.input()
first = float(n[0].strip())
second = float(n[1].strip())

print format(first +  second, '.2f')
print format(first -  second, '.2f')
print format(first *  second, '.2f')
print format(first /  second, '.2f')
print format(first // second, '.2f')
