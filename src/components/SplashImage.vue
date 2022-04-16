<template>
<div>
    <template v-if="img">

        <template v-if="detailed == true">
            <!-- img header -->
            <div >
                <b-row align-h="between">
                    <b-col>
                        <UserInfo :user_info="img.user"/>

                    </b-col>
                    <b-col cols="4" class="text-right">

                        <a :href="img.links.download" class="btn btn-success" download ><b-icon icon="download"/>  </a>
                        <b-button @click="$store.commit('likeImage', img.id)" variant="danger">
                            <b-icon icon="heart-fill" v-if="$store.state.favorits.includes(img.id)"/>
                            <b-icon icon="heart" v-else />
                        </b-button>
                    </b-col>

                </b-row>

            </div>

            <CustomImg :img="img"/>

        </template>
        

        <template v-else>
            <a :href="'/#/about/'+ img.id">
                <CustomImg :img="img"/>
            </a>
        </template>
        
        <!-- {{img.user}} || -->

    </template>
    <template v-else> <h3>loading...</h3> </template>

</div>
    
</template>

<script>
import UserInfo from '@/components/UserInfo.vue'
import CustomImg from '@/components/CustomImg.vue'

export default {
    components:{
        UserInfo,
        CustomImg,
    },

    props: {
        img: {
            type: Object, 
            default: null
        }, 
        detailed: {
            type: Boolean,
            default: true,
        }
    },
}
</script>

