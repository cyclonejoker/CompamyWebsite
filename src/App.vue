<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
    <v-tabs
      centered
      class="m1-n9"
      color="grey darken-1"
    >
    <v-tab
      v-for="link in links"
      :key="link.id"
      :to="link.route"
      grow
    >
    {{link.name}}
    </v-tab>
    </v-tabs>

    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md='2'
          >
            <v-sheet
              rounded="lg"
            >
            <HomeList></HomeList>
              <!--  -->
              <!-- <div>公司邮箱:chenchaoyi@nb-herun.com</div> -->
              <!-- <div>电话:0574-86368788</div> -->
              <!-- <div>公司地址：宁波市镇海区前程路临俞工业区90号</div> -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="90vh"
              rounded="lg"
            >
            <!-- 主视图 -->
            <router-view></router-view>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
            >
              <!--  -->
              <HomeList></HomeList>
              <!-- <div>公司邮箱:chenchaoyi@nb-herun.com</div>
              <div>电话:0574-86368788</div>
              <div>公司地址：宁波市镇海区前程路临俞工业区90号</div> -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer>
      <RecordBottom>

      </RecordBottom>
    
    </v-footer>
  </v-app>

</template>

<script>
import HomeList from '@/components/HomeList'
import RecordBottom from '@/components/RecordBottom'
export default {
  name: 'App',
  data:()=>(
    {
      links:[
      {id:'Homepage',name:'首页',route:'/'},
      {id:'Texttile',name:'业务领域',route:'/Texttile'},
      {id:'Contact',name:'关于我们',route:'/Contact'},
    ],
    }
  ),
  components:{
    HomeList,
    RecordBottom
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
