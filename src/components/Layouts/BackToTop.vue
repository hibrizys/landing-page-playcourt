<template>
    <div 
        @click="scrollToTop()" 
        :class="['back-to-top-btn', {'go-top': isTop}]"
    >
        <i class="bi bi-arrow-up-short"></i>
    </div>
</template>

<script>

export default {
    name: 'AppBackToTop',
    data (){
        return {
            isTop: false
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    }
}
</script>
