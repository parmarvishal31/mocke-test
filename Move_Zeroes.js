function moveZeroes(nums) {
     let index = 0; // index to track the position of non-zero elements 
     // Move all non-zero elements to the beginning of the array     
	for (let i = 0; i < nums.length; i++) { 
        if (nums[i] !== 0) { 
            nums[index] = nums[i]; 
            index++;       
  }     } 
     // Fill the remaining elements with zeroes    
 for (let i = index; i < nums.length; i++) { 
        nums[i] = 0;    
 } } 
 // Test case 1 
const nums1 = [0, 1, 0, 3, 12];
 moveZeroes(nums1); 
console.log(nums1);
 // Output: [1, 3, 12, 0, 0] 
 // Test case 2 
const nums2 = [0]; 
moveZeroes(nums2); 
console.log(nums2);
 // Output: [0]