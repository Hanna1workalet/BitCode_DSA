from collections import Counter
k = int(input( ))
rooms = Counter(input())
for room, frequency in rooms.items():
    if frequency == 1:
        print(room)
        break
