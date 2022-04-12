<template>
<div>
    <template v-if="img">
        <b-img 
            :src="img.urls.small_s3" 
            fluid  
            :alt="img.alt_description"
            thumbnail 
        ></b-img>
        {{img.id}}
    </template>
    <template v-else>empty</template>
</div>
    
</template>

<script>
export default {
    props: {
        img: {
            type: Object, 

        }
    }
}
</script>
