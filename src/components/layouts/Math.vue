<template>
    <div class="wrap-mainIndex">
        <h3 class="title-main">Toán học</h3>
        <div class="main-Content">
            <div class="videoVn videoToan " v-for="(videoToan, index) in videoToan" :key="index">
                <video class="imagevideoVn" data-video-slider="" controls playsinline webkit-playsinline preload="metadata">
                    <source type="video/mp4" :src="videoToan.linkmp4">
                </video>
                <div class="name-videoVn">{{ videoToan.name }}</div>
                <p class="link-videoVn">
                    <a class="" :href="videoToan.linktest" target="_blank"><span> Trắc nghiệm</span></a>
                    <a class="" :href="videoToan.linkhopthu" target="_blank"><span> Hộp thư</span></a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            videoToan: [
                {
                    name: "Tuần 01. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN1.mp4`,
                    linktest: "https://docs.google.com/forms/d/10fCh8YbfMcI4gFGqL10kpaVFIhGHHEGo2XDYzCivyyE/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 02. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN2.mp4`,
                    linktest: "https://docs.google.com/forms/d/10fCh8YbfMcI4gFGqL10kpaVFIhGHHEGo2XDYzCivyyE/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 03. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN3.mp4`,
                    linktest: "https://docs.google.com/forms/d/1czbE4mq0XpqHtCsIoPh8h0hDfW_6xPf1ti4gvx5FQf0/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 04. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN4.mp4`,
                    linktest: "https://docs.google.com/forms/d/1czbE4mq0XpqHtCsIoPh8h0hDfW_6xPf1ti4gvx5FQf0/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 05. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN5.mp4`,
                    linktest: "https://docs.google.com/forms/d/1czbE4mq0XpqHtCsIoPh8h0hDfW_6xPf1ti4gvx5FQf0/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 06. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN6.mp4`,
                    linktest: "https://docs.google.com/forms/d/1uGwxkVm_8Cun44N206WElmZQknR2Ebk_3HQqqFdWJLE/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 07. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN7.mp4`,
                    linktest: "https://docs.google.com/forms/d/1e4DsPwYJDKeS67ARJfLNQ4-7akdCnwuLZFPRaZMU1fA/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 08. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN8.mp4`,
                    linktest: "https://docs.google.com/forms/d/1lcTvyzOWi68__lHddty7By3ml9GUN0OOwAyTB73Lj7o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 09. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN9.mp4`,
                    linktest: "https://docs.google.com/forms/d/1lcTvyzOWi68__lHddty7By3ml9GUN0OOwAyTB73Lj7o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 10. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN10.mp4`,
                    linktest: "https://docs.google.com/forms/d/1lcTvyzOWi68__lHddty7By3ml9GUN0OOwAyTB73Lj7o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 11. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN11.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 12. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN12.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 13. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN13.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 14. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN14.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 15. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN15.mp4`,
                    linktest: "https://docs.google.com/forms/d/1lcTvyzOWi68__lHddty7By3ml9GUN0OOwAyTB73Lj7o/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 16. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN16.mp4`,
                    linktest: "https://docs.google.com/forms/d/1rSX41xsFZCg4_KtsWv49XrloxxFhiN9W2DDihtdNa-8/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 17. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN17.mp4`,
                    linktest: "https://docs.google.com/forms/d/1rSX41xsFZCg4_KtsWv49XrloxxFhiN9W2DDihtdNa-8/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 18. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN18.mp4`,
                    linktest: "https://docs.google.com/forms/d/1cgEHl3gZ0WhwHD01sIU7vTagsyzu36gfhzxl8EujkqE/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 19. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN19.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 20. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN20.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 21. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN21.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 22. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN22.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 23. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN23.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 24. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN24.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 25. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN25.mp4`,
                    linktest: "https://docs.google.com/forms/d/1cgEHl3gZ0WhwHD01sIU7vTagsyzu36gfhzxl8EujkqE/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 26. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN26.mp4`,
                    linktest: "https://docs.google.com/forms/d/1NshFOTWYYO7Mf4oeRh6FUkX9UDcKf0v98CGyKq2WS74/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 27. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN27.mp4`,
                    linktest: "https://docs.google.com/forms/d/1NshFOTWYYO7Mf4oeRh6FUkX9UDcKf0v98CGyKq2WS74/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 28. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN28.mp4`,
                    linktest: "https://docs.google.com/forms/d/1NshFOTWYYO7Mf4oeRh6FUkX9UDcKf0v98CGyKq2WS74/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 29. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN29.mp4`,
                    linktest: "https://docs.google.com/forms/d/1NshFOTWYYO7Mf4oeRh6FUkX9UDcKf0v98CGyKq2WS74/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 30. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN30.mp4`,
                    linktest: "https://docs.google.com/forms/d/1NshFOTWYYO7Mf4oeRh6FUkX9UDcKf0v98CGyKq2WS74/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 31. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN31.mp4`,
                    linktest: "https://docs.google.com/forms/d/1NshFOTWYYO7Mf4oeRh6FUkX9UDcKf0v98CGyKq2WS74/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 32. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN32.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 33. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN33.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 34. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN34.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 35. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN35.mp4`,
                    linktest: "https://forms.gle/gucLCGA8Vpi1SkwH6",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                }
            ]
        }
    }
}
</script>