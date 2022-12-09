import os
import requests as req

parent_dir = "E:/adventofcode2022/"
prefix = "day"
directory = "day"
SESSION = os.environ["SESSION"]
print(SESSION)

folders = [name for name in os.listdir(".") if name.startswith("day")][::-1]
nb = folders[0][3:]
next_nb = str(int(nb) + 1)
namedir = prefix + next_nb.rjust(2, '0')

path = os.path.join(parent_dir, namedir)

url = "https://adventofcode.com/2022/day/"
day_input = req.get(url + next_nb + "/input",
                    cookies={"session": SESSION}).content.decode("utf-8")

try:
    os.mkdir(path)
    print("Created dir:", namedir)
    open(os.path.join(path, 'README.md'), 'x')
    with open(os.path.join(path, 'input.txt'), 'w') as intxt:
        intxt.write(day_input)

except OSError as error:
    print(error)
