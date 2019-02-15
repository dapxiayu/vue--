<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="subtitile">
            <span>发表时间:{{newsInfo.add_time | dataFormat}}</span>
            <span>点击: {{newsInfo.click}}次</span>
        </p>

        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsInfo.content"></div>

        <!-- 评论子组件 -->
        <comment :id="id"></comment>
    </div>
</template>

<script>
// 导入评论子组件
// import comment from '../../components/comment'
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsInfo: {} // 新闻对象
        };
    },
   created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      this.$http.get("getnew/" + this.id).then(result => {
        this.newsInfo = result.body.message[0];
      });
    }
  },
}
</script>

<style lang="less">
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
    img {
      width: 100%;
    }
  }
}
</style>

