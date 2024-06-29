let IPCount = {}; // {"123.34.5": 6, }
let top100list = []; // [9,5,3....]

function request_handled(ip_address){
    if (! ip_address in IPCount ) {
        IPCount[ip_address] = 0 
    }
    IPCount[ip_address] = IPCount[ip_address]+1

    //add to the list
    if(!top100list.includes(ip_address)){
        top100list.push(ip_address);
    }
    //sort the list
    top100list.sort((ip_AddressA, ip_AddressB) => IPCount[ip_AddressA] - IPCount[ip_AddressB]);

    //cut the list at 100
   if(top100list.length > 100){
    top100list.pop();
   }
};
    //return the top100
function top100(){
    return top100list;
};

    //cleat to start again
function clear(){
    IPCount = {};
    top100list = [];
};