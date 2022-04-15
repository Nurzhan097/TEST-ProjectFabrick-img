<template>
    <b-container>
        <b-avatar style='vertical-align:top' square rounded variant="info" :src="user_info.profile_image.small" ></b-avatar>

        <div style="display:inline-block; margin-left: 10px;" class="ml-2">
            <div class="m-0 p-0">
                {{user_info.name}}
            </div>
            
            <small class="text-muted text-small" style="position: relative; top: -5px;">
                @{{user_info.username}}
            </small>
        </div>
    </b-container>
</template>

<script>
export default({
    props: {
        user_info: {type: Object}
    }    
    
})
</script>
