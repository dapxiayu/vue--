<template>
    <div class="newsinfo-container">
        <h3 class="title">新闻标题</h3>
        <p class="subtitile">
            <span>发表时间:</span>
            <span>点击: 0次</span>
        </p>

        <hr>

        <div class="content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id
        }
    }
}
</script>

<style lang="less" scoped>
.newsinfo-container{
    padding:0 4px;
  .title{
      font-size: 16px;
      text-align: center;
      color: red;
      margin: 15px 0;
  } 
  .subtitile{
      font-size: 13px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
  } 
  .content{
      
  }
}
</style>

