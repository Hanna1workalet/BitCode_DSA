if __name__ == '__main__':
    N = int(input())
    arr = []
    for i in range(N):
        Enter = input()
        if Enter.startswith("insert"):
            enter = Enter.split()
            index = int(enter[1])
            val = int(enter[2])
            arr.insert(index, val)
        elif Enter.startswith("print"):
            print(arr)
        elif Enter.startswith("append"):
            enter = Enter.split()
            e = int(enter[1])
            arr.append(e)
        elif Enter.startswith("remove"):
            enter = Enter.split()
            e = int(enter[1])
            arr.remove(e)
        elif Enter == "pop":
            arr.pop()
        elif Enter == "sort":
            arr.sort()
        elif Enter == "reverse":
            arr.reverse()
