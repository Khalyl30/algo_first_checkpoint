set length to 0
set wordCount to 1
set vowelCount to 0

read sentence
for each character in sentence:
    if character is a vowel:
        increment vowelCount by 1

    if character is a space:
        increment wordCount by 1

    increment length by 1

output length
output wordCount
output vowelCount