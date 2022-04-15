<template>
    <div>
        <!-- images -->
        <b-row v-if="images.length > 0">
            <template v-for="(photo, ind) in images">
                <b-col :key="photo.id + ind" md="4" sm="12" class="mb-4">
                <!-- {{ind+1}} -->
                
                    <SplashImage :img="photo" :detailed="false"/>
                
                </b-col>
            </template>
        </b-row>
        <!-- /images -->

        <!-- not found -->
        <template v-else>
            <p>Нет фотографий</p>
        </template>
        <!-- /not found -->
    </div>
</template>

<script>
import SplashImage from '@/components/SplashImage.vue'

export default ({
    components: {
        SplashImage,
    },

    props: {
        images: {
            type: Array, 
        }
    }
})
</script>
