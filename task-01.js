person = {
    get salary() {
       let date = new Date();
       let result;
       let trig = (32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate() - date.getDate()) > 20;
       if (trig) {
        result = `good salary`;
       } else {
        result = `bad salary`;
       }
       return result;
    }
}