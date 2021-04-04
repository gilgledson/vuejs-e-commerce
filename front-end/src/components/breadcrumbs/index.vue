<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
    </div>
</template>
<script>
export default {
    props:['items']
}
</script>
<style scoped>
ul li a{
    color: #cc0d1f !important;
}
</style>