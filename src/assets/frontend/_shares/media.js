export default {
    data : function() {
        return {
            is1025 : false,
             is801 : false,
             is641 : false,
             is481 : false,
        }
    },

    methods : {
        checkMobile() {
            this.is481 = (window.innerWidth >= 481) ? true : false;
            this.is641 = (window.innerWidth >= 641) ? true : false;
            this.is801 = (window.innerWidth >= 801) ? true : false;
            this.is1025 = (window.innerWidth >= 1025) ? true : false;
        }
    },

    created() {
        document.addEventListener('DOMContentLoaded', this.checkMobile)
        window.addEventListener('resize', this.checkMobile)
    },

    beforeDestroy(){
        document.removeEventListener('DOMContentLoaded', this.checkMobile)
        window.removeEventListener('resize', this.checkMobile)
    },
}
