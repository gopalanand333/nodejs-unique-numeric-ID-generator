/**
 * 
 * @param {ISODateString} date 
 */
const generateId= (date)=>{
        const numericArray = new Array();
        var temp = 0;
        date.split("T")[0].split("-").forEach(ele=>numericArray.push(parseInt(ele)));// split the dateTime string into parts and sum them
        date.split("T")[1].split(":").forEach(ele=>numericArray.push(parseFloat(ele)));
        var id =  numericArray.reduce(reducer);
       // log the new generated id, substr can be used to change the length of numberic ID
        return id.toString().replace(".","").substr(1,6);
   
    
};

/**
 * 
 * @param {number} accumulator - each element of the array
 * @param {number} currentValue - any additional vallue to be added
 */
const reducer = (accumulator, currentValue) => accumulator + currentValue;

module.exports={
        generate : generateId
};
