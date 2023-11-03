//数据库对象结构/架构
import { Schema } from 'mongoose'
import * as mongoose from "mongoose";
export const PictureSchema = new Schema({
    image: String,
    name: String,
    description: String,
    tags: String,
})
//模型确定如何操作数据
export const Picture=mongoose.model('Picture',PictureSchema,'pictures')
export  class Mongo{
    constructor(private url:string='mongodb://127.0.0.1:27017/album') {
    }
    public Connect()
    {
        mongoose.connect(this.url,{}).then(()=>{
        })
    }
}