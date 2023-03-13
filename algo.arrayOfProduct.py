# array of product efficient solution

def arrayOfProduct(array):
    products = [1 for _ in range(len(array))]
    leftRunningProduct = 1
    for i in range(len(array)):
        products[i] = leftRunningProduct
        leftRunningProduct *= array[i]
    rightRunningProduct = 1
    for i in reversed(range(len(array))):
        products[i] *= rightRunningProduct
        rightRunningProduct *= array[i]
    return products

print(arrayOfProduct([5, 1, 4, 2]))