<template>
  <div>
    <v-container
    >
          <!-- style="height: 300px;" -->
      <v-row
        align='center'
        no-gutters
        style="height:45vh"

      >
      <v-col sm='1'></v-col>
        <v-col
          align-self="center"
          sm='10'
        >
        <v-card color="white " >
          <!-- 背景 海浪 -->
          <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg">
          <v-row>
            <v-col class="text-right" cols="12">
              <!-- 项目右上角 -->
            </v-col>
            <v-row class="pa-4" align="center" justify="center">
              <v-col class="text-center">
                <h3 class="headline white--text">联系我们</h3>
                <span class="grey--text text--lighten-1">宁波市镇海和润服装</span>
              </v-col>
            </v-row>
          </v-row>
          </v-img>

          <v-container>
            <v-form v-model="valid">
              <v-row>
                <v-col cols='12' md='6'>
                    <v-text-field v-model='name' color="blue-grey " label="联系人" :rules="nameRules" :counter="10" required></v-text-field>
                </v-col>
                <v-col cols="12" md='6'>
                    <v-text-field v-model="companyName" color="blue-grey" label="公司名称"></v-text-field>
                </v-col>
              <!-- </v-row> -->
              <!-- <v-row align-md="2"> -->
                <v-col cols="12" md="6">
                    <v-text-field v-model="telephone" color="blue-grey" label="联系电话"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="email" color="blue-grey" label="联系邮箱" :rules="emailRules"></v-text-field>
                </v-col>
                
              </v-row>
              <v-textarea v-model="text" auto-grow outlined  value="有事联系我 ┐（´ー）┌"  ></v-textarea>
              <v-btn color="success" class="mr-4" @click="commit" >commit</v-btn>
              <v-row class="mb-4">
                  
              </v-row>
            </v-form>
          </v-container>
        </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
  export default {
    data: () => ({
      alignments: [
        'center'
      ],
      name:'',
      companyName:'',
      email:'',
      text:'',
      valid:false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>