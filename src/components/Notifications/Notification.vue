<template>
    <div v-if="alertNotif" style="z-index: 999999999999; position: absolute; top: 20px; left:25px">
        <b-alert show :variant="variantTitle"><a href="#" class="alert-link">
                <slot></slot>
            </a></b-alert>
    </div>
</template>


<script>
export default {
    props: ['alertNotif', 'variantTitle']
}
</script>
  
