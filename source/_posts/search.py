import  os
target = input("please input the search word:")
for filename in os.listdir("."):

    if "." in filename:
        with open (filename,'r',encoding='UTF-8') as f:
            if target in f.read():
                print(os.path.basename(filename))
