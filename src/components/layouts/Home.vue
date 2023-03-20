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
                    <p>Chào mừng các em đến với lớp học thông minh nơi các em có thể tìm kiếm kiến thức nội dung học tập một cách dễ dàng nhanh chóng và thuận tiện nhất. Đồng thời các em cũng có thể tự đánh giá bản thân và học hỏi từ bạn bè. </p>
                    <p>Từ đó Thầy - Cô mong muốn các em phát huy được sự tham gia tích cực vào quá trình học tập, kích thích tư duy và sự sáng tạo các em.</p>
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
    <div class="wrap-Vietnamses">
        <div class="wap_1200 w-clear">
            <div class="tdtc">Rèn đọc</div>
            <Splide class="run-readVn" :options="{ rewind: true, perPage: 2, autoplay: true, type: 'loop', direction: 'rtl', interval: 3000, pauseOnHover: true }" aria-label="Rèn đọc">
                <SplideSlide class="readVn" v-for="(readVn, index) in readVn" :key="index">
                    <div class="box-readVn"> 
                        <video class="imagevideoVn" data-video-slider="" controls playsinline webkit-playsinline preload="metadata">
                        <source type="video/mp4" :src="readVn.linkread">
                        </video>
                        <h3 class="name-readVn">{{ readVn.name }}</h3>
                    </div>
                </SplideSlide>
            </Splide>
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
            <Splide class="run-team" :options="{ rewind: true, perPage: 3, arrows: false }" aria-label="Đội ngũ giáo viên">
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
            <Splide :options="{ rewind: true, perPage: 3, autoplay: true, type: 'loop', direction: 'rtl', interval: 3000, pauseOnHover: true }"
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
                }
            ],
            video: [
                {
                    youtubeLink: "https://www.youtube.com/watch?v=qcdOqAI93js",
                    vimeoLink: "https://img.youtube.com/vi/qcdOqAI93js/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=NMcky_CfBsg",
                    vimeoLink: "https://img.youtube.com/vi/NMcky_CfBsg/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=phEZY1qKRXo",
                    vimeoLink: "https://img.youtube.com/vi/phEZY1qKRXo/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=NpyM-PGhn5E",
                    vimeoLink: "https://img.youtube.com/vi/NpyM-PGhn5E/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=YXJ-RkVEtW4",
                    vimeoLink: "https://img.youtube.com/vi/YXJ-RkVEtW4/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=ByCBqlZK_-o",
                    vimeoLink: "https://img.youtube.com/vi/ByCBqlZK_-o/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=saz5JriZGdk",
                    vimeoLink: "https://img.youtube.com/vi/saz5JriZGdk/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=7Fh6Vm0fhJc",
                    vimeoLink: "https://img.youtube.com/vi/7Fh6Vm0fhJc/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=WwoMmayXjAA",
                    vimeoLink: "https://img.youtube.com/vi/WwoMmayXjAA/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=KJPi4IcEXcQ",
                    vimeoLink: "https://img.youtube.com/vi/KJPi4IcEXcQ/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=Yp-CvdJDclE",
                    vimeoLink: "https://img.youtube.com/vi/Yp-CvdJDclE/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=-1A5YdenmR4",
                    vimeoLink: "https://img.youtube.com/vi/-1A5YdenmR4/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=DTHxxyDkrcs",
                    vimeoLink: "https://img.youtube.com/vi/DTHxxyDkrcs/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=gLoAd4EU66A",
                    vimeoLink: "https://img.youtube.com/vi/gLoAd4EU66A/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=4Vij7gooinU",
                    vimeoLink: "https://img.youtube.com/vi/4Vij7gooinU/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=iZg48pi336c",
                    vimeoLink: "https://img.youtube.com/vi/iZg48pi336c/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=uj2s13Z1D00",
                    vimeoLink: "https://img.youtube.com/vi/uj2s13Z1D00/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=3w5NJwbd_C8",
                    vimeoLink: "https://img.youtube.com/vi/3w5NJwbd_C8/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=Z9nw0th4EpY",
                    vimeoLink: "https://img.youtube.com/vi/Z9nw0th4EpY/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=Yy5RMWYGWqM",
                    vimeoLink: "https://img.youtube.com/vi/Yy5RMWYGWqM/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=kE-osJB2ee8",
                    vimeoLink: "https://img.youtube.com/vi/kE-osJB2ee8/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=eixrkc9YI28",
                    vimeoLink: "https://img.youtube.com/vi/eixrkc9YI28/0.jpg",
                },
                {
                    youtubeLink: "https://www.youtube.com/watch?v=EvmFoh26dio",
                    vimeoLink: "https://img.youtube.com/vi/EvmFoh26dio/0.jpg",
                }
            ],
            readVn: [
                {
                    name: 'Ngày em vào đội',
                    linkread: 'https://thnhonnghia1.hn.ss.bfcplatform.vn/ren-doc/NgayEmVaoDoi.mp4'
                },
                {
                    name: 'Cuốn sách em yêu',
                    linkread: 'https://thnhonnghia1.hn.ss.bfcplatform.vn/ren-doc/CuonSachEmYeu.mp4'
                },
                {
                    name: 'Nghệ nhan bát tràng',
                    linkread: 'https://thnhonnghia1.hn.ss.bfcplatform.vn/ren-doc/NgheNhanBatTrang.mp4'
                },
                {
                    name: 'Ông Ngoại',
                    linkread: 'https://thnhonnghia1.hn.ss.bfcplatform.vn/ren-doc/OngNgoai.mp4'
                },
                {
                    name: 'Tiếng đàn',
                    linkread: 'https://thnhonnghia1.hn.ss.bfcplatform.vn/ren-doc/TiengDan.mp4'
                },
                {
                    name: 'Chơi bóng rổ với bố',
                    linkread: 'https://thnhonnghia1.hn.ss.bfcplatform.vn/ren-doc/ChoiBongRoVoiBo.mp4'
                },
                {
                    name: 'Độc đáo lễ hội đèn trung thu',
                    linkread: 'https://thnhonnghia1.hn.ss.bfcplatform.vn/ren-doc/DocDaoLeHoiDenTrungThu.mp4'
                }
            ],
            clipslider: `https://thnhonnghia1.hn.ss.bfcplatform.vn/clipslider.mp4`, ImgAbout
        }
    },
};
</script>