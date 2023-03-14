<template>
    <div class="wrap-mainIndex">
        <h3 class="title-main">Tiếng Việt</h3>
        <div class="main-Content">
            <div class="videoVn" v-for="(videoTiengViet, index) in videoTiengViet" :key="index">
                <video class="imagevideoVn" data-video-slider="" controls playsinline webkit-playsinline preload="metadata">
                    <source type="video/mp4" :src="videoTiengViet.linkmp4">
                </video>
                <div class="name-videoVn">{{videoTiengViet.name}}</div>
                <p class="link-videoVn">
                    <a class="" :href="videoTiengViet.linktest" target="_blank"><span> Trắc nghiệm</span></a>
                    <a class="" :href="videoTiengViet.linkhopthu" target="_blank"><span> Hộp thư </span></a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return { 
            videoTiengViet : [
                {
                    name: "Tuần 1. Kiến thức cần nhớ",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TIẾNG VIỆT TUẦN 1.mp4",
                    linktest: "https://forms.gle/S4be9bWQCkuvnV9h9",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 2. Kiến thức cần nhớ",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TIẾNG VIỆT TUẦN 2.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 3. Kiến thức cần nhớ",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TIẾNG VIỆT TUẦN 3.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 4. Kiến thức cần nhớ",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TIENGVIETTUAN4.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 5. Kiến thức cần nhớ",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TIENGVIETTUAN5.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 6. Kiến thức cần nhớ",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TIENGVIETTUAN6.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 7. Kiến thức cần nhớ",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TIENGVIETTUAN7.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 8. Kiến thức cần nhớ",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TIENGVIETTUAN8.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 9. Kiến thức cần nhớ",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TIENGVIETTUAN9.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 10. Kiến thức cần nhớ",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TIENGVIETTUAN10.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                }
            ]
         }
    }
}
</script>