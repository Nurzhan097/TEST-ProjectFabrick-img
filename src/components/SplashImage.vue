<template>
<div>
    <template v-if="img">

        <template v-if="detailed == true">
            <!-- img header -->
            <div >
                <UserInfo :user_info="img.user"/>
                <a :href="img.links.download" class="btn btn-success" download ><b-icon icon="download"/>  Download</a>

                <b-button @click="$store.commit('likeImage', img.id)" variant="danger">
                    <b-icon icon="heart-fill" v-if="$store.state.favorits.includes(img.id)"/>
                    <b-icon icon="heart" v-else />
                </b-button>
            </div>
            <b-img-lazy 
                :src="img.urls.small_s3" 
                fluid-grow  
                :alt="img.alt_description"
                thumbnail 
            />
        </template>
        

        <template v-else>
            <a :href="'/about/'+ img.id">
                <b-img-lazy 
                    :src="img.urls.small_s3" 
                    fluid-grow  
                    :alt="img.alt_description"
                    thumbnail 
                />
            </a>
        </template>
        
        <!-- {{img.user}} || -->

    </template>
    <template v-else> <h1>loading...</h1> </template>
    <!-- <b-card  -->
    <!-- img-bottom  -->
    <!-- :img-src="img.urls.small" -->
    <!-- :img-alt="img.alt_description" -->
    <!-- no-body -->
    <!-- > -->
        <!-- <template #header> -->
            <!-- <img :src="img.user.profile_image.small" width="24px" alt=""> -->
            <!-- {{img.user.name}} || -->
            <!-- @{{img.user.username}} || -->
        <!-- </template> -->
    <!-- </b-card> -->
</div>
    
</template>

<script>
import UserInfo from '@/components/UserInfo.vue'

export default {
    components:{
        UserInfo,
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
