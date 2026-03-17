if __name__ == '__main__':
    N = int(input())
    lst = []

    for _ in range(N):
        command_line = input().split()
        command = command_line[0]

        if command == "insert":
            index = int(command_line[1])
            value = int(command_line[2])
            lst.insert(index, value)
        elif command == "print":
            print(lst)
        elif command == "remove":
            value = int(command_line[1])
            lst.remove(value)
        elif command == "append":
            value = int(command_line[1])
            lst.append(value)
        elif command == "sort":
            lst.sort()
        elif command == "pop":
            lst.pop()
        elif command == "reverse":
            lst.reverse()