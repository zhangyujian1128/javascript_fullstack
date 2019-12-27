// 接口
const getUsername = (user: User) => {
    user.say = function(words: string){
        return 'hello'
    }
}

interface User{
    name: string,
    age?: number,               //？可能存在
    readonly isMale: boolean,    //只读
    say: (words: string) => string
}

interface Say{
    (word: string): string
}

interface Config{
    width?: number
}

function CalculateAreas(config: Config):{area: number}{
    let square =100
    if(config.width){
        square = config.width * config.width
    }return{
        area: square
    }
}

// let mySq = CalculateAreas({width: 5})

//类型断言

let options = {widdth: 5}
// let mySq = CalculateAreas(options) 

