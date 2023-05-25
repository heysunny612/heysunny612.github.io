import React from 'react';
import '../styles/pages/Home.css';

export default function Home() {
  return (
    <main className='main'>
      <section className='main-video'>
        <video
          className='video'
          src='/assets/videos/pexels-cottonbro.mp4'
          autoPlay
          loop
          muted
        />
      </section>
      <section className='main-projects'>
        <h3>My Projects</h3>
        <p>그동안 배워온 코딩</p>
      </section>
      <section className='main-mystory'>
        <div className='common-inner'>
          <h3>Code My Dream</h3>
          <p>그동안 배워온 코딩</p>
          <div className='grid'></div>
          <ul className='story-list'>
            <li>
              <div className='text-area'>
                <h4>WEB PUBLISIOR</h4>
                <p>웹조은 컴퓨터학원</p>
                <p>
                  바쁜 일과 중에도 글로벌 이슈를 알고 싶다면 라인 뉴스를
                  추천합니다. 정치, 경제부터 연예계 소식까지 모든 장르의 뉴스를
                  전하는 라인 뉴스에는 ‘알고 싶은 정보’가 가득합니다.
                </p>
              </div>
              <div className='img-area'>
                <img src='/assets/images/test.png' alt='' />
              </div>
            </li>
            <li className='left'>
              <div className='img-area'>
                <img src='/assets/images/test.png' alt='' />
              </div>
              <div className='text-area'>
                <h4>WEB PUBLISIOR</h4>
                <p>웹조은 컴퓨터학원</p>
                <p>
                  바쁜 일과 중에도 글로벌 이슈를 알고 싶다면 라인 뉴스를
                  추천합니다. 정치, 경제부터 연예계 소식까지 모든 장르의 뉴스를
                  전하는 라인 뉴스에는 ‘알고 싶은 정보’가 가득합니다.
                </p>
              </div>
            </li>
            <li>
              <div className='text-area'>
                <h4>WEB PUBLISIOR</h4>
                <p>웹조은 컴퓨터학원</p>
                <p>
                  바쁜 일과 중에도 글로벌 이슈를 알고 싶다면 라인 뉴스를
                  추천합니다. 정치, 경제부터 연예계 소식까지 모든 장르의 뉴스를
                  전하는 라인 뉴스에는 ‘알고 싶은 정보’가 가득합니다.
                </p>
              </div>
              <div className='img-area'>
                <img src='/assets/images/test.png' alt='' />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='main-myskils'>
        <div className='common-inner'>
          <h3>My skiils</h3>
          <p>그동안 배워온 코딩</p>
          <ul className='myskils-list'>
            <li>
              <img src='/assets/images/test2.png' alt='' />
              <h4>대화, 음성통화, 영상통화</h4>
              <p>
                라인 유저라면 1:1은 물론 그룹을 만들어서 대화, 음성통화,
                영상통화를 이용할 수 있습니다.
              </p>
            </li>
            <li>
              <img src='/assets/images/test2.png' alt='' />
              <h4>대화, 음성통화, 영상통화</h4>
              <p>
                라인 유저라면 1:1은 물론 그룹을 만들어서 대화, 음성통화,
                영상통화를 이용할 수 있습니다.
              </p>
            </li>
            <li>
              <img src='/assets/images/test2.png' alt='' />
              <h4>대화, 음성통화, 영상통화</h4>
              <p>
                라인 유저라면 1:1은 물론 그룹을 만들어서 대화, 음성통화,
                영상통화를 이용할 수 있습니다.
              </p>
            </li>
            <li>
              <img src='/assets/images/test2.png' alt='' />
              <h4>대화, 음성통화, 영상통화</h4>
              <p>
                라인 유저라면 1:1은 물론 그룹을 만들어서 대화, 음성통화,
                영상통화를 이용할 수 있습니다.
              </p>
            </li>
            <li>
              <img src='/assets/images/test2.png' alt='' />
              <h4>대화, 음성통화, 영상통화</h4>
              <p>
                라인 유저라면 1:1은 물론 그룹을 만들어서 대화, 음성통화,
                영상통화를 이용할 수 있습니다.
              </p>
            </li>
            <li>
              <img src='/assets/images/test2.png' alt='' />
              <h4>대화, 음성통화, 영상통화</h4>
              <p>
                라인 유저라면 1:1은 물론 그룹을 만들어서 대화, 음성통화,
                영상통화를 이용할 수 있습니다.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className='main-banner'></section>
    </main>
  );
}
