/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
*/

function searchInsert(nums, target){
    //first check edge case that target is 0
    if(target == 0){
        return 0;
    }
    //check the indexOf target on nums to see if target is the array if it is return that index
    if(nums.indexOf(target) !== -1){
        return nums.indexOf(target);
    } else {
        //Then loop through the array and look for each case to return the correct index
        for(let i = 0; i < nums.length; i++){
            //this checks if current index is greater than or equal to the target if so return i
            if(nums[i] >= target){
                return i;
            }
            //this checks if the current index is less than or equal to target and the next index is greater than or equal to target if so return i + 1
            if(nums[i] <= target && nums[i+1] >= target){
                return i + 1;
            }
            //this checks if the current index is less than or equal to target and if the next index is undefined if so return index + 1
            if(nums[i] <= target && nums[i+1] === undefined){
                return i + 1;
            }
        }
    }
}


//time complexity is O(n)