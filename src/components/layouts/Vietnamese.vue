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
                    linktest: "https://docs.google.com/forms/d/1epZstFqYcEHEZkKD-3gvxYpVqRwaPLzS7ECUbCrttOE/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 8. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN8.mp4",
                    linktest: "https://docs.google.com/forms/d/1L5Ug5MkQMBA5mmabo2J2DQ-BwR9c9kpJlGPjYiU2AGI/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 9. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN9.mp4",
                    linktest: "https://docs.google.com/forms/d/1f_jQW9ua84XHx9_13B8tLW75hyTozNJG-07SpUumwhE/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 10. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN10.mp4",
                    linktest: "https://docs.google.com/forms/d/1Hb41KGc_cyhnd-gKLO-5GH0Q9BlBqByp_PNCvffY3C8/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 11. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN11.mp4",
                    linktest: "https://docs.google.com/forms/d/1Lj7gQtnYzR1HBBxW2yIWIbh8ZDQSYGhgRIyLPl_g59M/edit#settings",
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
                    linktest: "https://docs.google.com/forms/d/1xIcinKNZ692AEkGGZ61UH5MKuC0f4TB2U_ZKdXlPjfY/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 14. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN14.mp4",
                    linktest: "https://docs.google.com/forms/d/1KEPWpyr5ySXztc0tnWIi2QLwf3AE2MDzZJrjOIMl7L8/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 15. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN15.mp4",
                    linktest: "https://docs.google.com/forms/d/e/1FAIpQLSeJEn1FztQmspzc12maqlYvKnO4HefW2Ns__c1J7lzS9abcRg/viewform?usp=sf_link",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 16. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN16.mp4",
                    linktest: "https://docs.google.com/forms/d/19FoXCqP5BUS9DcFDrpAzLRS_Lqtq-zmM6uZtQ_DrqB8/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 17. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN17.mp4",
                    linktest: "https://docs.google.com/forms/d/1WzJlDsUqw4J8gKxMpkSQgapraB4Jte9NIodCLNlDKa8/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 18. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN18.mp4",
                    linktest: "https://docs.google.com/forms/d/1FASHN92cCo_R6827FF-HzFHnSfKPA_wFXiX79B_AOTw/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 19. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN19.mp4",
                    linktest: "https://docs.google.com/forms/d/1pXr0nYyqqxw87IXcoIJqH2ODAmsKikTxWfohU1rzQwo/edit",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 20. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN20.mp4",
                    linktest: "https://docs.google.com/forms/d/1TMGJJ9lvzbeRB2MkSpkcA4D0Vtlty7aZM3L2hNPRFa4/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 21. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN21.mp4",
                    linktest: "https://docs.google.com/forms/d/18ydd73tmT5qMc3WU2G4ZjnErRWZLv5m0o7rbgMSxT1o/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 22. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN22.mp4",
                    linktest: "https://docs.google.com/forms/d/1ZwM-2V8FxbzOBQYxjm1Rm4kuE9jG-XSqZhWbl-c5Lr8/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 23. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN23.mp4",
                    linktest: "https://docs.google.com/forms/d/1vdrGAaJS5larEL-6c2DE3x-nmXdWvx263835rm17sQ8/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 24. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN24.mp4",
                    linktest: "https://docs.google.com/forms/d/1UX41y9JNEi-WfBmVLtTy89wUtnLOXj4VMy1rX6P-oXs/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 25. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN25.mp4",
                    linktest: "https://docs.google.com/forms/d/1xQwYVJjrEJ_Na2VXd5FnAA2VoWPdBB2hj9Zu382elkg/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 26. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN26.mp4",
                    linktest: "https://docs.google.com/forms/d/1ZPtl6Oc4ZE823HBzPt1N1_CwOukSjwspGaIrUiGFUA0/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 27. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN27.mp4",
                    linktest: "https://docs.google.com/forms/d/134mbmrUzOanIKH_Dcx0LkDV-gFvvwBTXil7_sOy5k5s/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 28. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN28.mp4",
                    linktest: "https://docs.google.com/forms/d/1qXwghCICG25JDsXebdlCHL0ruIwaao1UB9-E0M6QKq0/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 29. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN29.mp4",
                    linktest: "https://docs.google.com/forms/d/1v69reycfotHlutJNY4SCMGYbX-A71sg0KDwOkpe0MHc/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 30. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN30.mp4",
                    linktest: "https://docs.google.com/forms/d/1MoyJyt8zv8M94Wy1W7KlhPq-bFxhgcVDGar3vdjfrVA/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 31. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN31.mp4",
                    linktest: "https://docs.google.com/forms/d/1k1O7tQ30seW7E8cYWi7zQObbGZsCXSEc7xViJdh0Jfs/edit#settings",
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
                    linktest: "https://docs.google.com/forms/d/1GgNWrlRezEKT6LDX-dLDVbb23xJdeOdcxrECn4FQXfQ/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 34. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN34.mp4",
                    linktest: "https://docs.google.com/forms/d/1JxrzDVfPN-BvxJP9ZNbQH_N9ZdpICp9_Ri-uDQLpOWw/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tuần 35. Kiến thức cần nhớ",
                    linkmp4: "https://st.thnhonnghia1.xyz/tieng-viet/TIENGVIETTUAN35.mp4",
                    linktest: "https://docs.google.com/forms/d/1G9Rd-L45GzXrlZ4emzUw1vQKxSy-_EkN3wq2ad9rJNI/edit#settings",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                }
            ]
         }
    }
}
</script>