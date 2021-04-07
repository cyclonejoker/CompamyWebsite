<template>
    <v-card>
        <v-card-title class="">
            <span class="headline white">联系方式</span>
            <v-spacer></v-spacer>
            <!-- <v-btn></v-btn> -->
            <!-- 还没想好要不要加btn -->
        </v-card-title>
        <!-- 主体 -->
        <v-list>
            <v-list-item>
                <v-list-item-action><v-icon>mdi-phone</v-icon></v-list-item-action>
                <v-list-item-content>(0574)86368788</v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
                <v-list-item-action><v-icon>mdi-email</v-icon></v-list-item-action>
                <v-list-item-content>chenchaoyi@nb-herun.com</v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
                <v-list-item-action><v-icon>mdi-map-marker</v-icon></v-list-item-action>
                <v-list-item-content>宁波市镇海区临俞工业区和润服装</v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
                <v-list-item-action><v-icon>mdi-wechat</v-icon></v-list-item-action>
                <v-list-item-content>Jack_ChenCY</v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script>
export default{
    name:'HomeList',
    data(){
        return{

        }
    }
}
</script>