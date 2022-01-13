<template>
    <div class="app">
        <div class="app__header">
            <div class="app__header-inner">
                <div class="app__count">Question # {{number+1}}</div>
                <div class="app__text">{{questions[number][0]}}</div>
            </div>
        </div>
        <div class="app__body">
            <button 
            v-for="(answer,index) in questions[number][1]" :key="answer.id"
            class="app__btn"
            @click="nextQuestions(questions[number][2][index])">
                <div class="app__btn-text">{{answer}}</div>
            </button>
        </div>
    </div>

    <div class="app result" data-sort="NAME_SORT">
        <div class="app_body">
            <div class="app__results-inner">
                <div class="results__title">Name of sort</div>
                <div class="results__text-box">
                    <p class="results__text"> Some text</p>
                    <p class="results__quote">Quote</p>
                </div>
                <div>
                    <button class="app__btn btn__back BTN_NAME">
                        <i class="fa fa-reply" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {

      answers: [

      ],

      questions: [
        [
          'Do you prefer stronger or milder tea?',
          ['Stronger', 'Midle', 'Something in between', 'For me it is not important in tea'],
          [
            'this.score.puer++; this.score.green++',
            'this.score.oolong++; this.score.gaba++; this.score.white++',
            'this.score.red++',
            'this.score.herbal++'
          ]
        ],
        [
          'How important is the fragrance to you?',
          ['If there was some unusual fragrance, it would be great', 'The smell of tea is the last thing that worries me', 'I like pleasant, not pronounced flavors'],
          [
            'this.score.puer++; this.score.herbal++',
            'this.score.oolong++; this.score.white++',
            'this.score.gaba++; this.score.red++'
          ]
        ],
        [
          'What effect do you expect from tea?',
          ['cheer up', 'relax', 'I would not like tea to affect my condition'],
          [
            'this.score.puer++; this.score.green++; this.score.gaba--',
            'this.score.gaba++; this.score.puer--; this.score.green--',
            'this.score.oolong++; this.score.herbal++; this.score.red++; this.score.white++'
          ]
        ]
      ],
      number:0,
      score:{
        'puer':0,
        'gaba':0,
        'herbal':0,
        'oolong':0,
        'green':0,
        'red':0,
        'white':0
      },
      

    }
  },
  methods: {
    nextQuestions(answer: string) {
      if(this.number === 2) {
        this.number=0
        // this.endQuestions()
      } else {
        this.number+=1
      }
      // eslint-disable-next-line no-eval
      eval(answer)
    }
  },
})

</script>

<style lang="scss">
    *{
        box-sizing: border-box
    }
    .app{
        height: 100vh;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        overflow:hidden ;
    }
    .app__header{
        background: rgba(0,0,0,0.5);
        border-bottom: 7px solid #fdb54d;
        min-height: 247px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 10px;
    }
    .app__header-inner{
        color: #fff;
        text-align: center;
    }
    .app__body{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        overflow: auto;
    }
    .app__btn{
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-height: 50px;
        width: 240px;
        background: #bdc013;
        box-shadow: 0px 7px 0px 0px #c9a816;
        margin: 0 auto;
        border-radius: 30px;
        text-decoration: none;
        font-size:16px;
        line-height:20px;
        color: #fff;
        text-transform:uppercase;
    }
    .app__btn:focus{
        outline: none;
    }
    .app__count{
        font-size: 24px;
        margin-bottom: 10px;
    }
    .app__text{
        font-size: 18px;
    }
    .app__results-inner{
        color: #fff;
        padding: 20px;
    }
    .result__title{
        text-transform: uppercase;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
        padding-top: 20px;
    }
    .results__text-box{
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 20px;
    }
    .results__text{
        margin-bottom: 20px;
    }
    .app.results{
        background-size: cover;
        background-position: center center;
    }
    .app.results[data-race=""]{
        background-image: url(); //задать фон для каждого возможного варинта результата
    }
    .app.results[data-race=""]{
        background-image: url(); //
    }
    .app.results[data-race=""]{
        background-image: url(); //
    }
    .app.results[data-race=""]{
        background-image: url(); //
    }


</style>