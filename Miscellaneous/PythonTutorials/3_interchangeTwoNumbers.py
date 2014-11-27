#
# https://www.hackerrank.com/challenges/interchange-two-numbers
#

import fileinput

n = fileinput.input()
first = n[0].strip()
second = n[1].strip()

first, second = second, first
print first
print second
