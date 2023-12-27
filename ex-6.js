let height = undefined;
function NullishCoalescing(height){
    if (height == undefined){
        return "Height is not defined"
    }
}
let result = NullishCoalescing(height)

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
console.log(height ?? undefined)