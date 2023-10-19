function permutationSort(a) {
    function bruteForce(a, start)
    { 
        for(i = 0; i < array.length; i++)
        {
            swapIndices(i, i+1, a)
            console.log(a)
            if(testForSort(a))
            {
                return true
            }
            if(window > 1)
            {
                return bruteForce(a, i)
            }
        }
    }
    return bruteForce(a, 0)
}

function swapIndices(x,y,arr)
{
    if(x < arr.length && y < arr.length)
    {
        temp = arr[x]
        arr[x] = arr[y]
        arr[y] = temp
    }
}

function testForSort(a)
{
    test = true
    for(i=0; i < a.length; i++)
        {
            for(j = i; j < a.length; j++)
            {
                if(a[i] > a[j])
                {
                    test = false
                }
            }
        }
        return test
}

console.log(permutationSort([1,2,4,3]))