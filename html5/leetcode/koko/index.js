/**
 * 
 * @param {array} piles
 * @param {int} H
 * @return {int} lo
 * @func 求最慢的吃法
 */
const canEatAllBananas=(piles,H,mid)=>{
    let h=0;
    for(let pile of piles){
        h +=Math.ceil(pile/mid);
    }
    return h<=H;
 }
const minEatingSpeed =(piles,H)=>{
    let lo=1;
    let hi=Math.max(...piles);
    //console.log(1..hi);
    while(lo<=hi){
        mid=lo+((hi-lo)>>1);
        if(canEatAllBananas(piles,H,mid)){
            hi=mid-1;
        }    else{
            lo=mid+1;
        }
        console.log(lo,mid,hi,'------');
    return lo;
}
console.log(minEatingSpeed([3,6,7,11],8));
