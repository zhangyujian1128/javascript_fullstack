# 删除有序数组中的重复项

读题：
    sortedArr [1,1,2]   3
    return length   2

- 一次遍历, ？
    res []      空间复杂度   O(n)
    for 
    排好序 后面的项一定会大于或者等于前面的项
    等于要原地删除的
    res length
    抽象，数理逻辑
- 动图
    两个指针    pre cur 
    cur 一直在往前跑    一次循环的每一次遍历
    pre 后面追
    pre cur arr 前一个，后一个
    不等于时 pre + 1,
    相等时 pre 不走, 会慢下来,
    如果cur pre 不一样, 那么 pre + 1 值等于 cur
    牛，从头到尾都是排好序的不重复数据
    每个位置放什么数？
    pre 指针 没有跟上 cur 的速度, 表示有重复
    pre cur n 个空位
    pre + 1 删除, 把当前cur 的值交给 pre

    - 快慢指针
        1. 一次循环 cur++ 一直跑
        2. cur 跟pre arr[] 不等的话，
            pre++
            相等的话 pre 不动
        3. cur 再走的时候, 继续比较
            新的cur 跟旧的 pre 
            不等时, pre++   并且把 cur值给  新的pre
            把因为之前重复空出来的位置  给填上。
        4. cur > length 