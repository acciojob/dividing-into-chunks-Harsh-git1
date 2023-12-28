const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let j=0;
	let ans = [];

	while(j < arr.length) {
		let sum = 0;
		let tempar = [];
		while(j < arr.length && sum + arr[j] <= n) {
			sum += arr[j];
			tempar.push(arr[j]);
			j++;
		}
		ans.push(tempar);		
	}
	
	return ans;
};
 
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
