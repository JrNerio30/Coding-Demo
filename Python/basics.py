# Triangle from Javascript translated to this python code
triangle = "#"
while len(triangle) <= 10:
  print(triangle)
  triangle += "#"

# if and else statement
Mike = 'Mike'
Ram = 'Ram'
Josh = 'Josh'

if len(Mike) > len(Ram) and len(Ram) == len(Josh):
  print("True")
else:
  print("False")

# Greetings Hello Worold
greetings = "Hello World"
print(greetings)

# Check Board
size = 8
board = ""

# Chess Board
for y in range(size):
  for x in range(size):
    if (x + y) %2 == 0:
      board += " "
    else:
      board += "#"
  board += "\n"

print(board)

# Fizz Buzz
for fizzbuzz in range(0, 100):
  output = ""
  if fizzbuzz %3 == 0:
    output += "Fizz"
  if fizzbuzz %5 == 0:
    output += "Buzz"
  print(output or fizzbuzz)
  
