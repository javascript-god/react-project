export default function Timer(time) {
    return new Promise(function(resolve){
        setTimeout(resolve, time);
    });
    
}