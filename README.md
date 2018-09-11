## 코드 제목 지정

코드를 올릴 때는 다음의 룰을 지킬 것

- 영어로 표기
- 코드내용 _ 만든사람 _ ver



## 변수 지정

아이돌 정보

- 아이돌명 'artist'
- 아이돌 영문명 및 원표기 'artist_eng'
- 멤버 이름 'artist_m'
- 데뷔년도/곡명 'debut_y'/'debut_t'
- 소속사 'agency'
- 활동장르 'genre'
- 성별 여부 'gender
- 멤버 수 'member_num'
- 리더 이름 'leader_name'
- 멜론 표기명 'melon_artist'



곡 정보

- 타이틀여부 'is_title'
- 노래제목 'title'
- 앨범명 'album'
- 발매년도 'release_date'
- 장르 'song_genre'
- 노래가사 'lyrics'
- 작곡가 'composer'
- 작사가 'lyricist'
- 하트수 'like'



## 파일 설명


- melon_urlid_crawling_SoHyun_ver01.ipynb
[링크](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/Crawling/url_crawling/melon_urlid_crawling_SoHyun_ver01.ipynb)

멜론 가수별 url id를 추출하기 위한 크롤링 코드입니다. 


- melon_song_data_crawling_SoHyun_ver01.ipynb
[링크](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/Crawling/url_crawling/melon_song_data_crawling_SoHyun_ver01.ipynb)

추출한 url을 이용하여 가사 및 곡 정보를 추출한 크롤링 코드입니다. 


## 데이터 설명

[드라이브 링크](https://drive.google.com/drive/folders/1XB4ubjht4tOPPZwKXrMugbOSefWe0xdD)

- song_data_fixed.csv

가수 이름이 한 줄 씩 밀려있던 것을 수정한 전처리 되지 않은 곡 정보 csv파일입니다. 

melon_song_data_crawling_SoHyun_ver01.ipynb 의 크롤링 코드로 추출된 내용입니다. 

수정일: 0910


- song_data_fixed_0911_ver1

누락된 가수를 추가하고 중복 가수를 제거했음. 가사가 없는 행은 모두 drop한 상태의 raw한 가사 데이터. 

수정일



