/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

n=1

1 step

output=1


n=2
1 step + 1 step
2 step

output=2

n=3
1 step + 1 step + 1 step
2 step + 1 step
1 step + 2 Step
output=3


n=4
1111
211
121
112
22
output=5

n=5
11111
2111
1211
1121
1112
221
122
212
output=8

n=6
111111      000000
21111       10000
12111       01000
11211       00100
11121       00010
11112       00001
2211        1100
1221        0110
1122        0011
2112        1001
2121        1010
1212        0101
222         111
output=13

        n steps
    n-1         n-2    
*/

function climbStairs(n){
    let countingFunction = function(stairsRemaining, savedResults) {
        if (stairsRemaining < 0) {
            return 0;
        } 
        if (stairsRemaining === 0) {
            return 1;
        }
        if (savedResults[stairsRemaining]){
            return savedResults[stairsRemaining];
        }

        savedResults[stairsRemaining] = countingFunction(stairsRemaining -1, savedResults) + countingFunction(stairsRemaining - 2, savedResults);

        return savedResults[stairsRemaining];
    }
    return countingFunction(n, {});
};

climbStairs(7);