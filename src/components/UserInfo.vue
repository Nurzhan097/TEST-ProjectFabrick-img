<template>
    <span>
        <b-avatar square rounded variant="info" :src="user_info.profile_image.small" class="mr-3"></b-avatar>
        <span class="mr-auto"> 
            {{user_info.name}}
            @{{user_info.username}}
        </span>
    </span>
</template>

<script>
export default({
    props: {
        user_info: {type: Object}
    }    
    
})
</script>
