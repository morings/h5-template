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
  <div class="imgs" v-else v-viewer>
    <img :src="item.url" alt="" v-for="(item,index) in fileList" :key="index" style="width:148px;height:148px">
  </div>
</template>
<script>
export default {
  props:['limit',"disabled","multiple",'value'],
  data(){
    return{
      files:[],
      fileList:[],
      oldImgs:[],
      removeId:[]
    }
  },
  methods:{
    exceed(){
      this.$msgerror("最多上传"+this.limit+'张图片')
    },
    setOld(arr){
      this.oldImgs = arr.map(item=>item.Id);
      this.fileList = arr;
    },
    //上传图片
    change(file){    
      this.files.push(file.raw);
      this.$emit("input",this.files) 
    },
    //移除图片
    remove(file){
      if(file.Id){
        this.oldImgs = this.oldImgs.filter(item=>item!=file.Id);
        this.removeId.push(file.Id);
        this.$emit('deleteOld',this.removeId);
      }else{
        var index = this.files.findIndex(item => item.uid == file.raw.uid);
        this.files.splice(index,1);
        this.$emit("input",this.files); 
      }
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
}
</style>

