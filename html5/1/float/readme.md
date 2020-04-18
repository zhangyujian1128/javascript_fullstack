float 浮动
1.让块级元素在水平方向上排列（但是脱离文档流）

解决float带来的影响
1. 给父容器加上等高
2. 父容器加上 overflew: auto 超出部分自适应
3. 不希望受到浮动影响的元素加上 clear :left/right/both; 清除浮动