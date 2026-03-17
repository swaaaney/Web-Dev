from models import Dog, Cat

def main():
    dog = Dog("Rex", 3, "Brown", "Shepherd")
    cat = Cat("Milo", 2, "Black", 9)

    animals = [dog, cat]

    for animal in animals:
        print(animal)    
        print(animal.info()) 
        print(animal.speak())  
        print()

if __name__ == "__main__":
    main()