 #
 # https://www.hackerrank.com/challenges/tutorial-intro
 #

number = gets.to_i
length = gets.to_i
array = gets.split(" ").map { |s| s.to_i}

array.each_with_index  do |elem, index|
  if elem == number
    puts index
  end
end
