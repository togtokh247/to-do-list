function uliral(a) {
    if(a === 12) {
        return "winter";
    }else {
        if(a <= 2) {
            return "winter";
        }else {
            if(a <= 5) {
                return "spring"
            }else {
                if(a <= 8) {
                    return "summer";
                }else {
                  return "autumn"
                }
            }
        }
    }
}    
const result = uliral(10)
console.log(result)