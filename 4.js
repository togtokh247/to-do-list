function dvngvvd(a) {
    if(a >= 90) {
        return "A";
    }else  {
        if(a >= 70) {
            return "B";
        }else {
            if(a >= 60) {
                return "C";
            }else {
                if(a >= 50) {
                    return "D"
                }else {
                    return "F"
                }
            }
        }
    }
}
const result = dvngvvd(88)
console.log(result) 