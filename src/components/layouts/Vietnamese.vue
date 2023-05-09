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
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/tieng-viet-tuan-1.mp4",
                    linktest: "https://docs.google.com/forms/d/1ALPYzNvYPiLN-SRV1ZfLaXLH2eyzTDx0Iv-pgL2Puhg/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 2. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/tieng-viet-tuan-2.mp4",
                    linktest: "https://docs.google.com/forms/d/1SPCtqc1gOnwPnD-a6QjAm9gQVrpBVn9hfZpuioiYbH8/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 3. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/tieng-viet-tuan-3.mp4",
                    linktest: "https://docs.google.com/forms/d/1vVHJsOjwTCPQW5VH73JcrMOw4kOH2lhAk1rClAZJCyg/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 4. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN4.mp4",
                    linktest: "https://docs.google.com/forms/d/1S6hvAmHFDkJ7w3y1_HtPodYk7bU86fRA0x4rVYkL9Ls/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 5. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN5.mp4",
                    linktest: "https://docs.google.com/forms/d/1NstJDZfpr8qNfiP34RH_yo1eZJCTDNkGktbvWg7pty8/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 6. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN6.mp4",
                    linktest: "https://docs.google.com/forms/d/1rFw-pfnEJnqLw3XU9OYTj1ACdjmHfC4r0qx-1m_0Igk/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 7. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN7.mp4",
                    linktest: "https://docs.google.com/forms/d/1pIdI_KormyNJGezd4ycbAJVIiLTAgr7k2PsLcRzROV8/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 8. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN8.mp4",
                    linktest: "https://docs.google.com/forms/d/1pIdI_KormyNJGezd4ycbAJVIiLTAgr7k2PsLcRzROV8/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 9. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN9.mp4",
                    linktest: "https://docs.google.com/forms/d/1gSb8UjrfBnv4ivSG_2UnMtEdVp6P1VzGwJUVz7o_Y0o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 10. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN10.mp4",
                    linktest: "https://docs.google.com/forms/d/1gSb8UjrfBnv4ivSG_2UnMtEdVp6P1VzGwJUVz7o_Y0o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 11. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN11.mp4",
                    linktest: "https://docs.google.com/forms/d/1gSb8UjrfBnv4ivSG_2UnMtEdVp6P1VzGwJUVz7o_Y0o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 12. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN12.mp4",
                    linktest: "https://docs.google.com/forms/d/1DFrvKLyCaYbsW9LY7JCTNTeDmPhDkTpJ7hWOMEX8pjg/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 13. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN13.mp4",
                    linktest: "https://docs.google.com/forms/d/1PP8NGznh-cmmDGza1jpLf6ALdc4-OnITRAozlrk9VlA/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 14. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN14.mp4",
                    linktest: " https://docs.google.com/forms/d/1-w2MJQVpbuowaBqTk9N7P8-k6El79uDZW0Dx37ksM_4/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 15. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN15.mp4",
                    linktest: " https://docs.google.com/forms/d/1-w2MJQVpbuowaBqTk9N7P8-k6El79uDZW0Dx37ksM_4/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 16. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN16.mp4",
                    linktest: " https://docs.google.com/forms/d/1-w2MJQVpbuowaBqTk9N7P8-k6El79uDZW0Dx37ksM_4/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 17. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN17.mp4",
                    linktest: "https://docs.google.com/forms/d/19JOAoOCHbwDN86SHUe0snPYzFc4qlWPiggoyMCdR89s/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 18. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN18.mp4",
                    linktest: "https://docs.google.com/forms/d/19JOAoOCHbwDN86SHUe0snPYzFc4qlWPiggoyMCdR89s/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 19. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN19.mp4",
                    linktest: "https://docs.google.com/forms/d/185KjkCLv-fOH5wBrMfRNqntjOmB26O8SIqBLozbe_ws/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 20. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN20.mp4",
                    linktest: "https://docs.google.com/forms/d/1kDF_ORtjD82sbBPAjBprFgLGYpQ6t0LF6CFlVYmcPi0/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 21. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN21.mp4",
                    linktest: "https://docs.google.com/forms/d/1qVuAHCuYrEPhsSearo7mw2c5iM9SnClpu8DFCTo_r7o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 22. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN22.mp4",
                    linktest: "https://docs.google.com/forms/d/1qVuAHCuYrEPhsSearo7mw2c5iM9SnClpu8DFCTo_r7o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 23. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN23.mp4",
                    linktest: "https://docs.google.com/forms/d/1qVuAHCuYrEPhsSearo7mw2c5iM9SnClpu8DFCTo_r7o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 24. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN24.mp4",
                    linktest: "https://forms.gle/S4be9bWQCkuvnV9h9",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 25. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN25.mp4",
                    linktest: "https://docs.google.com/forms/d/1qVuAHCuYrEPhsSearo7mw2c5iM9SnClpu8DFCTo_r7o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 26. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN26.mp4",
                    linktest: "https://docs.google.com/forms/d/1qVuAHCuYrEPhsSearo7mw2c5iM9SnClpu8DFCTo_r7o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 27. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN27.mp4",
                    linktest: "https://docs.google.com/forms/d/1qVuAHCuYrEPhsSearo7mw2c5iM9SnClpu8DFCTo_r7o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 28. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN28.mp4",
                    linktest: "https://docs.google.com/forms/d/1xB-6SspEZL_jTxNQD-cen5cOEYaXJOlCug1va8NFkIA/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 29. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN29.mp4",
                    linktest: "https://docs.google.com/forms/d/1xB-6SspEZL_jTxNQD-cen5cOEYaXJOlCug1va8NFkIA/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 30. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN30.mp4",
                    linktest: "https://docs.google.com/forms/d/1xB-6SspEZL_jTxNQD-cen5cOEYaXJOlCug1va8NFkIA/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 31. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN31.mp4",
                    linktest: "https://docs.google.com/forms/d/1xB-6SspEZL_jTxNQD-cen5cOEYaXJOlCug1va8NFkIA/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 32. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN32.mp4",
                    linktest: "https://docs.google.com/forms/d/1GgNWrlRezEKT6LDX-dLDVbb23xJdeOdcxrECn4FQXfQ/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 33. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN33.mp4",
                    linktest: "https://docs.google.com/forms/d/1GgNWrlRezEKT6LDX-dLDVbb23xJdeOdcxrECn4FQXfQ/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 34. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN34.mp4",
                    linktest: "https://forms.gle/S4be9bWQCkuvnV9h9",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 35. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN35.mp4",
                    linktest: "https://forms.gle/S4be9bWQCkuvnV9h9",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                }
            ]
         }
    }
}
</script>