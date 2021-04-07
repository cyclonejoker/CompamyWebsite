<template>
  <div class="home d-flex flex-column ">
    <v-carousel class="carousel" >
      <v-carousel-item 
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      > 
    </v-carousel-item>
    </v-carousel>
    <div class="mb-4"></div>
    <div class="d-flex flex-column mb-6" >

      <v-card
        class="pa-4"
        outlined
        flat你吗
      >
      <v-card-title class="mx-auto center" >
        <v-icon>mdi-arrow-right-bold</v-icon>
        公司简介
        <v-icon>mdi-arrow-left-bold</v-icon>
      </v-card-title>
      <v-card-text>
        <div>
          {{profileH1}}
          <br>
          {{profileH2}}
          <br>
          {{profileH3}}
        </div>
      </v-card-text>
      </v-card>

      <v-card class="pa-4"
        outlined
        flat>
        <v-card-title>
         <v-icon>mdi-arrow-right-bold</v-icon>
        企业愿景
        <v-icon>mdi-arrow-left-bold</v-icon>
        </v-card-title>
        <v-card-text>
          {{hope}}
        </v-card-text>
      </v-card>

      <v-card class="pa-4"
        outlined
        flat>
        <v-card-title>
          <v-icon>mdi-arrow-right-bold</v-icon>
          企业文化
           <v-icon>mdi-arrow-left-bold</v-icon>
        </v-card-title>
        <v-card-text>
          {{cultrueH1}}
          <br>
          {{cultrueH2}}
          <br>
          {{cultrueH3}}
          <br>
          {{cultrueH4}}
        </v-card-text>
      </v-card>

      <v-card class="pa-4"
        outlined
        flat>
        <v-card-title>
          <v-icon>mdi-arrow-right-bold</v-icon>
          生产基地
          <v-icon>mdi-arrow-left-bold</v-icon>
        </v-card-title>
              <v-card-text>
        <div>
          {{baseH1}}
          <br>
          {{baseH2}}
        </div>
      </v-card-text>
      </v-card>

    </div>


  </div>
  
</template>

<script>


export default {
  name: 'Home',
  data(){
    return{
      profileH1:"宁波镇海和润服装有限公司是一家从事时尚女装设计及生产的企业，主要面向外贸生产，擅长面料种类为针织面料。",
      profileH2:'公司积极引入新型生产设备和管理软件。月产量10-15万件.公司吸纳并培养了一流的技术人才，积极参与各类国际交流，目前已有员工150余人。',
      profileH3:'公司已顺利通过ZARA和BSCI的验厂认证,依托良好的信誉和优秀的品质，产品销往德国、西班牙等多个国家。',
      hope:'成为国际服装卓越品质的制造者。',
      test:'hello',
      cultrueH1:'客户第一: 认真研究客户，围绕客户需求展开我们所有的业务和运营流程，不断改进我们的产品质量和服务细节，努力提高客户满意度。',
      cultrueH2:'坦诚合作 : 强调平等互助的团队精神，反对带有国家、种族、民族、地区偏见的言论和行动。',
      cultrueH3:'诚实自律 : 忠于职守，自觉严格遵守职业操守和公司的各种规章制度。',
      cultrueH4:'热爱生活 : 快乐地工作，快乐地生活，从生活中积极汲取创新灵感。',
      baseH1:'本公司坐落于宁波市镇海区临俞工业区前程路90号，距离高速口4KM,距深水港舟山港一小时车程。',
      baseH2:'在生产方面，本厂员工一百余人，长期生产快销品牌产品，有较快的生产协调速度。同时，在高邮、河南等地，我们也有相应的的外发加工厂。对于快单，从下订单到完整的货物，我们交期流程大概是45天。',
      items:[
        {
          src:require('../assets/1.jpg')
        },
        {
          src:require('../assets/2.jpg')
        },
        {
          src:require('../assets/3.jpg')
        }
      ]
    }
  }

}
</script>
