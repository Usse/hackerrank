#
# https://www.hackerrank.com/challenges/whats-your-name
#

import fileinput

n = fileinput.input()
name = n[0].strip()
surname = n[1].strip()

print "Hello %s %s! You just delved into python." % (name,surname)
