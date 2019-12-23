var arr = [19, 23, 15, 24, 54, 33]
var a = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                [nums[i],nums[j]] = [nums[j],nums[i]]
            }
        }
        
    }
    console.log(nums)
}
a(arr)