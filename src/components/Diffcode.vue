<template>
  <div>
      <div>
          <h2>展示方式：</h2>
          <button @click="change">{{this.showStyle}}</button>
      </div>
    <code-diff :old-string="oldStr" :new-string="newStr" :context="5" :outputFormat="style"/>
  </div>
</template>
<script>
import CodeDiff from 'vue-code-diff'
export default {
  components: {CodeDiff},
  data(){
    return {
        showStyle:"一页展示",
        style:'side-by-side',
        fotmat: false,
        oldStr: "Q:唉我问一下我们用的这个400电话外呼的时候对方会显示几个号码呀\n\
                A:您这边是那个上海欣荣汽车科技有限公司是吗？唉。\n\
                Q:11300571对吧？\n\
                A:对就是您那个件号码\n\
                Q:哪个？你说客户是哪个方向的吗？客户是江苏的\n\
                A:是您稍等我这边查一下我，您是外省，号码是11300571呀\n\
                Q:你稍等一下，我马上去看一下我外呼的是哪个号码。\n\
                A:是江苏无锡的吗？\n\
                Q:那11300001这个是什么号码呢？\n\
                A:上当，\n\
                Q:其他没有了，谢谢嗯好再见。\n\
                A:唉好。",
        newStr: "Q:唉我问一下我们用的这个400电话外呼的时候对方会显示几个号码呀\n\
                    A:您这边是那个上海欣荣汽车科技有限公司是吗？\n\
                    Q:11300571对吧？\n\
                    A:对就是您那个号码\n\
                    Q:哪个？你说客户是哪个方向的吗？客户是江苏的\n\
                    A:是您稍等我这边查一下我，您是外省，号码是11300571\n\
                    Q:你稍等一下，我马上去看一下我外省的是哪个号码。\n\
                    A:是江苏无锡的吗？\n\
                    Q:其他没有了，谢谢嗯好再见。\n\
                    A:唉好。"
    }
  },
  methods:{
      change:function() {
          this.style=this.fotmat ? "line-by-line":"side-by-side";
          this.showStyle=this.fotmat ? "分页展示" : "一页展示";
            this.fotmat=!this.fotmat;
      }
  }
}
</script>
