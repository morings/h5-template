<template>
  <el-upload
    class="list-upload"
    v-if="!disabled"
    action=""
    ref='upload'
    :accept="'image/*'" 
    :limit='limit'
    :auto-upload="false"
    list-type="picture-card"
    :show-file-list="true"
    :file-list="fileList"
    :on-change="change"
    :on-remove="remove"
    :on-exceed="exceed"
    :multiple="multiple?true:false">
    <i class="el-icon-plus"></i>
  </el-upload>
  <div class="imgs" v-else >
    <img :src="item.url" alt="" v-for="item in fileList" :key="item.url"  v-gallery:imgs><!--img-vuer搭配v-for使用时key必须是图片的完整路径，不然不能预览-->
  </div>
</template>
<script>
export default {
  props:['limit',"disabled","multiple",'value'],
  data(){
    return{
      files:[],
      fileList:[],
    }
  },
  methods:{
    exceed(){
      this.$msgerror("最多上传"+this.limit+'张图片')
    },
    setOld(arr){
      if(Array.isArray(arr)){
        this.fileList = arr.map(url=>{
          return{
            url:this.imgURL+url,
            id:url
          }
          
        })
      }else{
        let m = arr?arr.split(','):[];
        this.fileList = m.map(url=>{
          return{
            url:this.imgURL+url,
            id:url
          }
        })
      } 
    },
    //上传图片
    change(file){    
      this.files.push(file.raw);
    },
    close(){
      this.files = [];
      this.fileList = [];

    },
    //移除图片
    remove(file){  
      if(file.id){
        this.fileList = this.fileList.filter(item=>item.id!=file.id)
      }else{
        var index = this.files.findIndex(item => item.uid == file.raw.uid);
        this.files.splice(index,1);   
      }   
        
    },
    upload(){
      return new Promise(async (resolve,reject)=>{
        if(this.files.length){
          let form = new FormData();
          for(let i of this.files){
            if(i instanceof File){
              form.append('files',i)
            }
          }    
          let res = await this.$http.upload(form);
          let imgs = res.data;
          let arr = this.fileList.map(item=>item.id);
          resolve(arr.concat(imgs))
        }else{
          let arr = this.fileList.map(item=>item.id);
          resolve(arr);
        }
        
      })
    }
  }
  
}
</script>
<style lang="less">
.list-upload{
  .el-upload--picture-card{
    width:148px;
    height:148px;
    line-height: 148px;
  }
  .el-upload-list--picture-card .el-upload-list__item{
    width:148px;
    height:148px;
  }
  .imgs{
    img{
      width: 148px;
      height: 148px;;
    }
  }
}
</style>

