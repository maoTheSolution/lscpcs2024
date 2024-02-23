from os import listdir
from os.path import isfile, join
import os
path = '/Users/minhyukoh/Downloads/img2024/'
files = [file for file in listdir(path) if isfile(join(path, file))]

# os.rename(path+'환민몬.png',path+'포켓몬.png')
cnt = 1
for oldFileName in files:
    os.rename(path+oldFileName, 'img'+str(cnt)+'.png')
    cnt = cnt + 1

# print(len(files))
