<template>
    <div>
       <topbar />
       <Content />
       <navMenu />
    </div>
</template>

<script>
import topbar from './topbar';
import navMenu from './menu';
import Content from './content';
export default {
    components:{
        topbar,
        navMenu,
        Content
    }
}
</script>