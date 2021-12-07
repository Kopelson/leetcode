
let maxSubArray = function(nums) {
   let c = nums[0];
   let g = nums[0];
   for(let i=1; i < nums.length; i++){
      c = Math.max(nums[i], c + nums[i]);
      if (c > g) {
         g = c;
      }
   }
   console.log(g);
   return g;
}

const test1 = [-2,1,-3,4,-1,2,1,-5,4];


maxSubArray(test1);