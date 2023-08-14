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
                    linktest: "https://docs.google.com/forms/d/1qA6jqib8WQwXyTAj68McN4agWB4xoeZ3WrK5sOQG9AY/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 02. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN2.mp4`,
                    linktest: "https://docs.google.com/forms/d/1E9DJ0N64ZrPVQgn35xZWdXvlnqqJL4JJ39V3Jp8LIJk/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 03. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN3.mp4`,
                    linktest: "https://docs.google.com/forms/d/1HHQ7-Fg7nn0CHQBjmAOzqN4mH8kQDNXC8FDr7IVDAa0/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 04. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN4.mp4`,
                    linktest: "https://docs.google.com/forms/d/1a2nVFS1uYAgD28UP6LOeagIu6vwKokU1qhTxSg4vg4I/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 05. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN5.mp4`,
                    linktest: "https://docs.google.com/forms/d/1Hnu0fI8KE0OtSiQ6AUWuuFd2ADf9y9Bp307ME6YKmI4/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 06. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN6.mp4`,
                    linktest: "https://docs.google.com/forms/d/1J4QVLKCaUXn8u34feUz6bY3O8cN97w2C8aWeGftDW1I/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 07. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN7.mp4`,
                    linktest: "https://docs.google.com/forms/d/1tFu2jvpCFLP50T_EvXdxcP0_79Eqqs9j_e9ug_B6XhY/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 08. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN8.mp4`,
                    linktest: "https://docs.google.com/forms/d/1hHUxgQv35kqErsg8nlDu-dAZRZ8YU0NeOUVt6ysx3-o/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 09. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN9.mp4`,
                    linktest: "https://docs.google.com/forms/d/1_I_PKuWLWbhtwsErDJYOhMvtYtq8s_uVL5_r7WlBkaE/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 10. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN10.mp4`,
                    linktest: "https://docs.google.com/forms/d/1Kw42uCbbIX9wOUtRTPEcl550DLmiKLTtd8S0N8lXjmU/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 11. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN11.mp4`,
                    linktest: "https://docs.google.com/forms/d/1bh0jAvOTSHLT6rrkcjKj70rm1lQAkYV29gZ43iSdYkM/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 12. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN12.mp4`,
                    linktest: "https://docs.google.com/forms/d/1uTtbKvwQ_qwKaf9MkDtxACTXHNYxyljY-Fi8OCGlNdE/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 13. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN13.mp4`,
                    linktest: "https://docs.google.com/forms/d/1OHjnBUxWmf94FYNDuGltHsjYkSWhhjNTC-3qNg9HvFc/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 14. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN14.mp4`,
                    linktest: "https://docs.google.com/forms/d/1LN2JuxXm9IrQWgN6Mkia03yUrrA99rdql-Rn2tzSRLU/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 15. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN15.mp4`,
                    linktest: "https://docs.google.com/forms/d/1rXrbehfnAnNG2lOPhAAutuenuaOnf0fXwfbuwjXftNs/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 16. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN16.mp4`,
                    linktest: "https://docs.google.com/forms/d/1RO-2-CVekZZ1CEr_N5zP3iU_ueD6aX7HVHLBc8J8yO8/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 17. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN17.mp4`,
                    linktest: "https://docs.google.com/forms/d/15Lt8uluNjjRpBfvE7qcfpwBPHg8ORE9F9sJ9w37tIdc/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 18. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN18.mp4`,
                    linktest: "https://docs.google.com/forms/d/1XKJz_mOE_wVAvCx2BXpu47jIXRV9nrNXXuy-Pwhtyos/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 19. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN19.mp4`,
                    linktest: "https://docs.google.com/forms/d/1eH0GHrt_NKw12NMWrnDi3ZAQ3h3NmL7zZn8HCaD_clw/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 20. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN20.mp4`,
                    linktest: "https://docs.google.com/forms/d/1AVmrY5Y-pPVmUW1aup4JODR0W6T8Tgdn4qvYFLApmcc/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 21. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN21.mp4`,
                    linktest: "https://docs.google.com/forms/d/1IvudbKBGli0RJhBVjQ8aEmjuKkUNzxeCtKlkgxXmlOs/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 22. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN22.mp4`,
                    linktest: "https://docs.google.com/forms/d/1L-JN48c1d5y7ctqAjgar4subEC6pn2ZFKZZy8ZcbxnY/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 23. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN23.mp4`,
                    linktest: "https://docs.google.com/forms/d/1cLzFXzBP3rJu3MNCLJY19EVkkNtE56RlCqBr5PyKcyQ/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 24. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN24.mp4`,
                    linktest: "https://docs.google.com/forms/d/1RjIYYykRXfuqIAKVdaxvDCKRXPzRr3k9OTfbLW_nb_Y/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 25. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN25.mp4`,
                    linktest: "https://docs.google.com/forms/d/1NAYvyJqfb_dnY30-aCMb-YrZFJisgWg5PkZ77370Rmw/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 26. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN26.mp4`,
                    linktest: "https://docs.google.com/forms/d/1rKMgzRtk_-ZaDygDBYXI8S8aWNuIQRHB3RQ9rGYAalY/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 27. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN27.mp4`,
                    linktest: "https://docs.google.com/forms/d/1osTFlnCZLaQeb1wwzc6UqXMjZArfdA1zKpm-KWtdXfs/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 28. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN28.mp4`,
                    linktest: "https://docs.google.com/forms/d/17l-4g82Iu4u2TJUlLy1WbqiiJgDg_c5RGbEJUBnQ7KM/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 29. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN29.mp4`,
                    linktest: "https://docs.google.com/forms/d/1SeiyfezQ5X6XpLswxy0CZDFeHxWe9dphB9IkoPZxcOc/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 30. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN30.mp4`,
                    linktest: "https://docs.google.com/forms/d/1DKFtXQ3c8SUNkDotu5XeEX8PeuxPxdPfzjdUjlUR6HE/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 31. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN31.mp4`,
                    linktest: "https://docs.google.com/forms/d/1EmOmiH6qlJ5_5FqytUuY6qeaYKLAzHD4Vrbtuc6mfjU/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 32. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN32.mp4`,
                    linktest: "https://docs.google.com/forms/d/1Q4Dx0LjD52EGjJnDPBcFoMADzeJmYss0ww9JRLdkSsw/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 33. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN33.mp4`,
                    linktest: "https://docs.google.com/forms/d/1cNSGgz0lKzpqfHMcRGXsbvtHlgBeiLhb6nnbrSHhyvY/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 34. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN34.mp4`,
                    linktest: "https://docs.google.com/forms/d/1cNSGgz0lKzpqfHMcRGXsbvtHlgBeiLhb6nnbrSHhyvY/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 35. Kiến thức cần nhớ",
                    linkmp4: `https://st.thnhonnghia1.xyz/toan/TOANTUAN35.mp4`,
                    linktest: "https://docs.google.com/forms/d/1cNSGgz0lKzpqfHMcRGXsbvtHlgBeiLhb6nnbrSHhyvY/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                }
            ]
        }
    }
}
</script>