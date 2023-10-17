function permutationSort(a, length, tests) {

    /*if(a.length == length)
    {
        tests++
        test = true
        // Compare each value to each other value to ensure the array is sorted
        for(i=0; i < a.length && test == true; i++)
        {
            for(j = i; j < a.length && test == true; j++)
            {
                if(a[i] > a[j])
                {
                    test = false
                }
            }
        }
        if(test = true)
        {
            return tests
        }
    }

    else
    {
        permutationSort
    }*/
    
    /*for(b = a.length-1; b >= 0; b--)
    {
        for(c = a.length-1; c >= b; c--)
        {
            for(d = a.length-1; d >= c; d--)
        }
    }*/
    tests = 0
    test = true
    //for(k = array.length-1; k )
    //{
        // Compare each value to each other value to ensure the array is sorted
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
    //}
    return test
}

function swapIndices(x,y,arr)
{
    temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}

console.log(permutationSort([2,3,5,6,5,2,3]))