import csv
import pandas as pd
file1 = ("C:/Users/Krithi/Desktop/Python/bright_star.csv")
file2 = ("C:/Users/Krithi/Desktop/Python/convertedStars.csv")
d1 = []
d2 = []
with open(file1, "r", encoding = "utf8") as f:
    csvreader = csv.reader(f)
    for i in csvreader:
        d1.append(i)
with open(file2, "r", encoding = "utf8") as f:
    csvreader = csv.reader(f)
    for i in csvreader:
        d2.append(i)
h1 = d1[0]
h2 = d2[0]
pd1 = d1[1:]
pd2 = d2[1:]
h = h1 + h2
pd = []
for i in pd1:
    pd.append(i)
for j in pd2:
    pd.append(j)
with open("totalStars.csv", "w", encoding = 'utf8') as f:
    csvwriter = csv.writer(f)
    csvwriter.writerow(h)
    csvwriter.writerows(pd)
#df = pd.read_csv("totalStars.csv")
#df.tail(8)