<template>
    <div class="todoInput">
        <van-cell-group>
            <van-field v-model="value" placeholder="input your todo">
                <template #button>
                    <van-button size="small" type="primary" @click="addTodo">添加</van-button>
                </template>
            </van-field>
        </van-cell-group>
      <todoList></todoList>
    </div>
</template>

<script>
import todoList from './todoList'
export default {
    name:'todoInput',
    data(){
        return{
            value:'',
            todos:[],
            index:0
        }
    },
    methods:{
        addTodo(){
            this.todos.push({
                index:this.index,
                todo:this.value,
                done:false
            })
            this.index++
            this.$store.commit('updateTodo',this.todos)
            this.value = ""
        }
    },
    components:{
        todoList
    }
}
</script>