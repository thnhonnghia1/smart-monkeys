<template>
    <section class="section section__videointro" data-video="">
        <div class="video-background">
            <video class="video-fullscreen" data-video-slider="" autoplay playsinline webkit-playsinline loop muted
                preload="metadata">
                <source type="video/mp4" :src="clipslider">
            </video>
        </div>
    </section>
    <div class="box_about ">
        <div class="box_ab d-flex justify-content-between">
            <div class="right_about" data-wow-delay="1000ms">
                <div class="name-about"> Lớp Học thông minh </div>
                <div class="desc-about">
                    <p>Nơi các em mạnh dạn viết lên những ước mơ và suy nghĩ của mình. </p>
                    <p>Nơi giáo viên lắng nghe chia sẻ, mong muốn của học sinh, đồng thời là nơi gắn kết yêu thương
                        giữa học sinh với học sinh, giữa thầy cô với học sinh, giữa gia đình và nhà trường.Góp phần
                        hướng tới xây dựng một trường học thân thiện - tích cực.</p>
                </div>
            </div>
            <div class="left_about" data-wow-delay="1000ms">
                <a href="" target="_blank"><img :src="ImgAbout" alt=""></a>
            </div>
        </div>
    </div>
    <div class="wrap-subject">
        <div class="wap_1200 w-clear">
            <div class="wap-subject">
                <div class="subject" v-for="(subject, index) in subject" :key="index">
                    <router-link :key="index" :to="subject.path">
                        <p class="pic-subject"><img :src="subject.image" alt=""></p>
                        <div class="item-top"></div>
                        <div class="item-right"></div>
                        <div class="item-bot"></div>
                        <div class="item-left"></div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="box_hoatdong" data-wow-delay="1000ms">
        <div class="wap_1200 w-clear">
            <div class="tdtc">Khoảnh Khắc Yêu thương</div>
            <div id="lightgallery" class="box_albumhd">
                <a v-for="(album, index) in album" :key="index" class="album" :href="album.image">
                    <p class="pic-album"><img :src="album.image" /></p>
                    <div class="info-album">
                        <i class="fas fa-search"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="wrap-team">
        <div class="wap_1200 w-clear">
            <div class="tdtc">Đội ngũ giáo viên</div>
            <Splide class="run-team" :options="{ rewind: true, perPage: 4, arrows: false }" aria-label="Đội ngũ giáo viên">
                <SplideSlide class="team" v-for="(team, index) in team" :key="index">
                    <p class="pic-team"><img :src="team.image" alt=""></p>
                    <h3 class="name-team">{{ team.name }}</h3>
                </SplideSlide>
            </Splide>
        </div>
    </div>
    <div class="box_video" id="sroll-video" data-wow-delay="1000ms">
        <div class="wap_1200 w-clear">
            <div class="tdtc">Video</div>
            <Splide :options="{ rewind: true, perPage: 3, autoplay: true, type: 'loop', direction: 'rtl', interval: 7000, pauseOnHover: true }"
                aria-label="Video">
                <SplideSlide v-for="(video, index) in video" :key="index">
                    <a class="video text-decoration-none" data-fancybox="video" :key="index" :data-src="video.youtubeLink"
                        title="">
                        <p class="pic-video scale-img"><img onerror="this.src='<?=$thumb?>assets/images/noimage.png';"
                                :src="video.vimeoLink" alt="" /></p>
                    </a>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<style>
.splide__pagination {
    display: none !important;
}
</style>

<script>
import ImgAbout from '../../../images/3aa00a951264da3a837526.jpg';
import clipslider from '../../../images/clipslider.mp4';
import albumIndex from '../../../images/f3bd83c7a23e6a60332f63.jpg';
import albumIndex2 from '../../../images/0f1dcb05eafc22a27bed66.jpg';
import albumIndex3 from '../../../images/959c0e892f70e72ebe6164.jpg';
import albumIndex4 from '../../../images/7047263907c0cf9e96d162.jpg';
import albumIndex5 from '../../../images/b2dfc8ade954210a784561.jpg';
import albumIndex6 from '../../../images/677abd3b9cc2549c0dd359.jpg';
import teamIndex from '../../../images/doingu/CoNuong.jpg';
import teamIndex2 from '../../../images/doingu/coTin.jpg';
import teamIndex3 from '../../../images/doingu/CoLoc.jpg';
import subjectIndex from '../../../images/biaSach/BiaTiengViet.png';
import subjectIndex2 from '../../../images/biaSach/BiaToan.jpg';
import subjectIndex3 from '../../../images/biaSach/BiaTin.png';
import subjectIndex4 from '../../../images/biaSach/BiaTiengAnh.png';


export default {
    data() {
        return {
            subject: [
                {
                    name: 'Tiếng Việt',
                    path: '/smart-monkeys/tieng-viet',
                    image: subjectIndex
                },
                {
                    name: 'Toán Học',
                    path: '/smart-monkeys/toan-hoc',
                    image: subjectIndex2
                },
                {
                    name: 'Tiếng Anh',
                    path: '/smart-monkeys/tieng-anh',
                    image: subjectIndex4
                },
                {
                    name: 'Tin học',
                    path: '/smart-monkeys/tin-hoc',
                    image: subjectIndex3
                }
            ],
            album: [
                {
                    image: albumIndex
                },
                {
                    image: albumIndex2
                },
                {
                    image: albumIndex3
                },
                {
                    image: albumIndex4
                },
                {
                    image: albumIndex5
                },
                {
                    image: albumIndex6
                }
            ],
            team: [
                {
                    name: 'Cô giáo nương',
                    image: teamIndex
                },
                {
                    name: 'Cô giáo Hạnh',
                    image: teamIndex2
                },
                {
                    name: 'Cô giáo Lộc',
                    image: teamIndex3
                },
                {
                    name: 'Cô giáo nương 4',
                    image: teamIndex
                }
            ],
            video: [
                {
                    youtubeLink: "https://www.youtube.com/watch?v=OLGHPLxeBxg",
                    vimeoLink: "https://img.youtube.com/vi/OLGHPLxeBxg/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=_ObJsM_VeVw",
                    vimeoLink: "https://img.youtube.com/vi/_ObJsM_VeVw/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=jHs5TqBjw2o",
                    vimeoLink: "https://img.youtube.com/vi/jHs5TqBjw2o/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=GWTtrNDzBc0",
                    vimeoLink: "https://img.youtube.com/vi/GWTtrNDzBc0/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=W5DAlCswHNU",
                    vimeoLink: "https://img.youtube.com/vi/W5DAlCswHNU/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=ovb0cJO7eM4",
                    vimeoLink: "https://img.youtube.com/vi/ovb0cJO7eM4/0.jpg",
                }
            ],
            clipslider, ImgAbout
        }
    },
};
</script>