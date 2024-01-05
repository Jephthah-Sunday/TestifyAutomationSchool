#Declare a string variable with any value
sample = 'Jephthah is a Test Automation Engineer and a renown Software Tester'

#Print out the string in the upper case form
upper_value = sample.upper()
print('Upper value:', upper_value)


#Note: you can experiment with the other functions call too in the task

# count
Jephthah_count = sample.count('Jephthah')
print('Jephthah count:', Jephthah_count)

# find ==> count the occurrence of a value in a string
Test_position = sample.find('Test')
print('Test position:', Test_position)

# rstrip
rstripped_sample = sample.rstrip()
print('Right-stripped:', rstripped_sample)

# split
splitted_sample = sample.split('and')
print('Splitted (space):', splitted_sample)