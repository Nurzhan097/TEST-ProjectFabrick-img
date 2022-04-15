<template>
<div>
    <h1>Favorits</h1>

    favorits = {{$store.state.favorits}}
    <br>
    last = {{$store.getters.Favorits()}}
    <br>

    <template v-if="$store.state.favorits.length > 0">
        <!-- image view -->
        <b-container fluid="md">
            <ImageTable :images="favorits" />
        </b-container>
        <!-- image view -->
    </template>

    <template v-else>
        <h3>Пока нет избранных</h3>
    </template>

</div>
    
</template>


<script>
import Splash from '@/services/splash.js'
import ImageTable from '@/components/ImageTable.vue'

export default ({
    components: {
        ImageTable,
    },
    data(){return{
        favorits: [],
    }},

    mounted(){
        this.getAllFavorits();
    },

    methods: {
        getAllFavorits(){
            if(this.$store.state.favorits.length > 0) {
                this.$store.state.favorits.forEach(img_id => {
                    Splash.getImage(img_id).then(img => {
                        this.favorits.push(img.data);
                    }).catch(e=> {
                        console.error(">>> on created", e);
                    })
                });
            }
        }
    }
})
</script>
