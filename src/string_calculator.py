import re

regex = re.compile(r'\d+')

def have_negatives(string):
    empty_string = ''

    for x in range(len(string)):
        if string[x] == '-' and string[x+1].isdecimal():
            empty_string += '-' + string[x+1] + ','

    return empty_string

def add(string):
    sum = 0
    numbers = regex.findall(string)
    negatives = have_negatives(string)
    
    try:
        string[:-1]
    except:
        raise "NOT ok!"
    if negatives:
        raise Exception("Negatives not allowed: " + negatives)

    if string == '':
        return 0
    else:
        for x in numbers:

            if int(x) > 1000:
                pass
            else:
                num = int(x)
                sum += num

        return sum

