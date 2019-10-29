export const PhoneValid = (rule, value, callback)=>{
  if(!(/^1[0-9]{10}$/.test(value))){
    return callback(new Error("请正确格式的手机号码")) 
  }
  callback()
};
export const PasswordValid = (rule, value, callback)=>{
  if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(value))){
    return callback(new Error("请输入8-16位数字加字母组成的密码")) 
  }
  callback()
};