//35. Search Insert Position
var searchInsert = function(nums, target) {
    if (nums.indexOf(target)!==-1){
        return nums.indexOf(target);
    }
    if(nums[0]>target){
        return 0;
    }
    if(nums[nums.length-1]<target){
        return nums.length;
    }
    
    for(var i =0; i<nums.length; i++){
        if(nums[i]<target && nums[i+1]>target){
            return i+1;
        }
    }
};