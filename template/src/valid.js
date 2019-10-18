export const PhoneValid = (rule, value, callback)=>{
  if(value!='' && !(/^1[0-9]{10}$/.test(value))){
    return callback(new Error("请正确格式的手机号码")) 
  }
  callback()
};