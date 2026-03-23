class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def introduce(self):
        print(f"My name is {self.name} and i'm {self.age} years old")

s = Student("Akku", 18)
s.introduce()