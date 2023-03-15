<template>
    <div class="wrap-mainIndex">
        <h3 class="title-main">Tin học</h3>
        <div class="main-Content">
            <div class="videoVn videoTin " v-for="(videoTin, index) in videoTin" :key="index">
                <video class="imagevideoVn" data-video-slider="" controls playsinline webkit-playsinline preload="metadata">
                    <source type="video/mp4" :src="videoTin.linkmp4">
                </video>
                <div class="name-videoVn">{{videoTin.name}}</div>
                <p class="link-videoVn">
                    <a class="" :href="videoTin.linktest" target="_blank"><span> Trắc nghiệm</span></a>
                    <a class="" :href="videoTin.linkhopthu" target="_blank"><span> Hộp thư</span></a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                videoTin : [
                    {
                        name: "Tuần 01. Kiến thức cần nhớ",
                        linkmp4: `https://thnhonnghia1.hn.ss.bfcplatform.vn/tin-hoc/chudeA_bai1.mp4`,
                        linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                        linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    }
                ]
            }
        }
    }
</script>