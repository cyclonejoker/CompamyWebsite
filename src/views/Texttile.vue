<template>
    <div>
        <v-breadcrumbs :items='routerDashboards'>

        </v-breadcrumbs>
        <v-row>
        <!-- 一行视作12份 cols=4 等于一行放3个 -->
        <v-col
            v-for='(item,i) in items'
            :key='i'
            cols='4'
        >
        <v-card height="400" shaped>
        <v-container>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">商品橱窗</div>
                    <v-list-item-title>
                    <div class="headline mb-1">{{item.title}}</div>
                    </v-list-item-title>
                    <v-list-item-subtitle class="mb-2">型号:{{item.number}}</v-list-item-subtitle>
                    <v-list-item-subtitle class="mb-2">成分：{{item.composition}}</v-list-item-subtitle>
                    <v-list-item-subtitle class="mb-4">价格：{{item.price}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size='150' >
                    <v-img :src='item.src'></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <div>如果您感兴趣，请发邮件到chenchaoyi@nb-herun.com获得详细信息以及相应报价。</div>
        </v-container>
        <v-row ></v-row>
        </v-card>
        </v-col>
    </v-row>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      circle
    ></v-pagination>
    </div>
    </div>
</template>

<script>
export default{
    data:()=>({
        items:[
            {
                src:require('../../static/LL-12.jpg'),
                title:'男士卫衣',
                number:'LL-01',
                composition:'聚酯纤维&&棉',
                price:'$7.5',
                describe:'SSSS'
            },
            {
                src:require('../../static/短袖贴袋.jpg'),
                title:'时髦羊毛短袖',
                price:'$10',
                number:'LL-14',
                composition:'聚酯纤维',
                describe:''
            },{
                src:require('../../static/LL-02.jpg'),
                title:'深灰大衣',
                number:'LL-02',
                composition:'聚酯纤维',
                price:'$11',
                describe:''
            },{
                src:require('../../static//LL-03.jpg'),
                title:'圈圈绒外套',
                number:'LL-03',
                composition:'聚酯纤维',
                price:'$10',
                describe:''
            },{
                src:require('../../static/LL-07.jpg'),
                title:'格子女士大衣',
                number:'LL-07',
                composition:'聚酯纤维',
                price:'$12',
                describe:''
            },{
                src:require('../../static/LL-10.jpg'),
                title:'麂皮拉链外套',
                number:'LL-10',
                composition:'麂皮PU复合',
                price:'$9.5',
                describe:''
            }
        ],
        routerDashboards:[
            {
                text:'首页',
                disabled:false,
                href:''
            },
            {
                text:'大衣',
                disabled:false,
                href:'/Texttile/overcoat'
            },
            {
                text:'裙子',
                disabled:false,
                href:'/Texttile/skirt'
            }
        ],
        page:1,

    })
}
</script>