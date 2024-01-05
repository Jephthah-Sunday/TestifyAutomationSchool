# Create a class called Human
# instantiate the class

class Human:

    name = "Jephthah"
    group = "Blue"

    def get_name_group(self):
        return self.name + ":" + self.group


# object
boy = Human()
print(boy.name, boy.group, boy.get_name_group())