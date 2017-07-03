/**
 * @author caowencheng <845982120@qq.com>
 * created on 21.05.2017
 */
<template>
    <div class="loading">
        <div class="outBox">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
                <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
                <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
                <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
                </path>
                </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loading'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loading {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 50%;
        margin-left: -50%;
        top: 0;
    }
    
    .outBox {
        position: absolute;
        width: 100px;
        height: 100px;
        left: 50%;
        margin-left: -50px;
        top: 50%;
        margin-top: -50px;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 1.08;
    }
    
    svg {
        height: 32px;
        width: 32px;
        position: absolute;
        top: 50%;
        margin-top: -16px;
        left: 50%;
        margin-left: -16px;
    }
</style>
