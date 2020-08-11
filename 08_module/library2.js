export function o0o(obj){
    obj.callRoomService();
}

export class room{
    constructor(num,type,price){
        this.num = num;
        this.type = type;
        this.price = price;
    }
    callRoomService() {
        alert("稍等．．．")
    }
}
export class poorRoom extends room{
    callRoomService(){
        alert("不提供客房服務ㄛ")
    }
}