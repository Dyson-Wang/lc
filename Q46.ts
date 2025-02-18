function permute(nums: number[]): number[][] {
    let res: number[][] = [];
    let output = Array.from(nums);
    let len = nums.length;

    backtrack(len, output, res, 0);
    return res;
};

function backtrack(len: number, output: number[], res:number[][], first: number){
    if(first === len) {
        res.push(Array.from(output));
        return;
    };
    for(let i = first;i<len;i++){
        [output[first], output[i]] = [output[i], output[first]]
        backtrack(len, output, res, first+1)
        [output[first], output[i]] = [output[i], output[first]]
    }
}