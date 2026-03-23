num = list(map(int, input().split()))
for n in num:
    if n % 2 == 0:
        print(n, end=" ")
print('\n')
for n in num:
    if n % 2 == 1:
        print(n, end=" ")