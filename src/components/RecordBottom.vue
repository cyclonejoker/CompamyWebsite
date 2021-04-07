<template>
    <v-row class="grey " align-content="center">
    <v-col cols="12" md="4"></v-col>
    <v-col cols="12" md="8">
        <v-row>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copyright &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@1999-2020 镇海和润服装有限公司 版权所有
        </v-row>
        <v-row>
            <!-- 如何解决 备案图标大小 -->
            <v-avatar size="20px 20px"><img src="../assets/备案图标.png" ></v-avatar>
            <div style="color: white">京公网安备33021102000786号</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://beian.miit.gov.cn/" target="_blank" style="color: white">浙ICP备2021009902号</a>
        </v-row>    
    <!-- <a href="https://beian.miit.gov.cn/" target="_blank" style="color: grey">您的备案号</a> -->
    </v-col>
    <v-col cols="12" md="2"></v-col>

    </v-row>
</template>
<script>
export default {
    name:'RecordBottom',
    data(){
        return{

        }
    }
}


</script>