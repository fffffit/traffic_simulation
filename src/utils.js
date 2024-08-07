import axios from "axios";

//demo
function getUserData(){
    return axios({
        method: "GET",
        url: "https://f1d58b3a-cd9a-4c17-ac22-395e66ecfae7.mock.pstmn.io/address",
    });
}

//生成指定数量的车辆
function generateTraffic(){
    return axios({
        method: "POST",
        url: "http://localhost:18080/carla/generate_traffic",
        params:{
            "VehicleNumber": "100"  
        }
    });
}

//获取行驶车辆的左右视角
function camera(){
    return axios({
        method: "POST",
        url: "http://localhost:18080/carla/camera",
    });
}

//车辆从起点运动到目标位置
function automatic(){
    return axios({
        method: "POST",
        url: "http://localhost:18080/carla/automatic",
    });
}
export default {
    getUserData,
    generateTraffic,
    camera,
    automatic
}
