<template>
    <div class="buttonList">
        <span class="buttonItem" @click="$parent.doVote($store.getters.getData[0])"></span>
        <span class="buttonItem" @click="toPage($store.getters.getData[0])"></span>
        <span class="buttonItem"></span>
    </div>
</template>
<script>
    export default{
        name:"buttonList",
        data () {
            return {

            }
        },
        methods:{
            toPage(val){
                
                var name = this.$parent.$options.name;
                if (name == 'comdetail'){
                    this.$router.push({path:'/detail/comListdetail',query:{type:val.type}});
                }
                if (name == 'peodetail'){
                    this.$router.push({path:'/detail/peoListdetail',query:{type:val.type}});
                }
            }
        }
    }
</script>
<style scoped>
.buttonList{
    width:4.61rem;
    height: 0.45rem;
    display:flex;
    justify-content: space-between;
}
.buttonItem{
    width:1.4rem;
}
</style>

