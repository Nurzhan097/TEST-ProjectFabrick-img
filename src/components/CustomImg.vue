<template>
    
    <b-img-lazy 
        :src="img.urls.small_s3" 
        :alt="img.alt_description"

        fluid-grow
        rounded 
        blank-color="rgba(128, 255, 255, 0.5)"
    />

    <!-- <b-avatar square :src="img.urls.small_s3"/> -->
</template>

<script>
export default ({

    props:{
        img: {type: Object}
    }
})
</script>
