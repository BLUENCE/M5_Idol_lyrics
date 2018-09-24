## PUSH시 파일 저장법
###### 제목(내용)_작성자(혹은 수정자)_몇 번째 수정
```
<예시>
Code -> melon_urlid_crawling_SoHyun_ver01.ipynb
Data -> song_data_yewon_ver01.csv
```

## 변수 지정
| **아이돌 정보**  |  **곡 정보**  |
|---|---|
| 아이돌명 'artist' <br> 아이돌영문명 및 원표기 'artist_eng' <br> 멤버이름 'artist_m' <br> 데뷔년도/곡명 'debut_y'/'debut_t' <br> 옛날 소속사 'agency_old' <br> 현재 소속사 'agency_' <br> 활동장르 'genre' <br> 성별여부 'gender <br> 멤버수 'member_num' <br> 리더이름 'leader_name' <br> 멜론표기명 'melon_artist' | 타이틀여부 'is_title' <br> 노래제목 'title' <br> 앨범명 'album' <br> 발매년도 'release_date' <br> 장르 'song_genre' <br> 노래가사 'lyrics' <br> 작곡가 'composer' <br> 작사가 'lyricist' <br> 편곡가 'arranger' <br> 하트수 'like' |


## 테마 칼라

민트 #20C2AA

군청 #7A37F5


## Code 설명
### [melon_urlid_crawling_SoHyun_ver01.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/Crawling/url_crawling/melon_urlid_crawling_SoHyun_ver01.ipynb)
```
멜론 가수별 url id를 추출하기 위한 크롤링 코드입니다. 
```
### [melon_song_data_crawling_SoHyun_ver01.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/Crawling/url_crawling/melon_song_data_crawling_SoHyun_ver01.ipynb)
```
추출한 url을 이용하여 가사 및 곡 정보를 추출한 크롤링 코드입니다. 
```
### [NLP_sample_Jieun_ver02.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/NLP/NLP_sample_Jieun_ver02.ipynb)
```
간단하게 NLP EDA 해본 것 입니다. 
```
### [NLP_sample_Jieun_ver03.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/NLP/NLP_sample_Jieun_ver03.ipynb)
```
주석추가
```
### [NLP_sample_Jieun_ver04.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/NLP/NLP_sample_Jieun_ver04.ipynb)
```
word2vec 최종 코드 
```
### [LSTM_Train_jieun_ver1.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/NLP/LSTM_Train_jieun_ver1.ipynb)
```
LSTM train model
```
### [LSTM_Test_jieun_ver1.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/NLP/LSTM_Test_jieun_ver1.ipynb)
```
LSTM test model
```
### [EDA_3_major_agencies_cha_ver01.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/EDA/EDA_3_major_agencies_cha_ver01.ipynb)
```
3대 기획사(SM, YG, JYP)소속 여자아이돌 가사분석 예시 코드입니다.
```
### [EDA_3_major_agencies_cha_ver02.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/EDA/EDA_3_major_agencies_cha_ver02.ipynb)
```
3대 기획사(SM, YG, JYP)소속 남/녀 아이돌 가사분석 코드입니다.
```



## Data 설명
### [드라이브 링크](https://drive.google.com/drive/folders/1XB4ubjht4tOPPZwKXrMugbOSefWe0xdD)
### [전처리 총정리 노트북](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/SongTidy/FinalTidy/final_tidy_yewon_ver01.ipynb)

## [Song Data]

### :pushpin: Data20180921/song_data_raw_20180921_ver02.csv.csv

_**가사 전처리시** 이 데이터을 사용해주세요_

```
1. 가사가 null, 공백인 행은 모두 없앴습니다. 

2. 타이틀곡 여부 수정했습니다.

3. 필요없는 가수는 드랍하고 크롤링 단계 자체에서 제외했습니다. 

4. 누락되었던 빅스, 엔시티 추가했습니다. 

** 전처리 이전의 가장 최신 상태의 가사 크롤링 파일입니다. 가수 정보와는 merge되지 않은 raw한 상태입니다**
```

### :pushpin: SongTidy/FinalTidy/tidydata/song_tidy03.csv
  _**가사 분석시** 이 데이터를 사용해주세요_
  
### :pushpin: Data/Data20180921/artist_info_combined_ver04.csv
  _**데뷔 날짜 업데이트 된 가수 정보입니다.**

## [Lyricist/Composer Data]

### :pushpin: SongTidy/FinalTidy/tidydata/lyricist_tidy03.csv
  _**작사 및 작곡가 분석시** 이 데이터를 사용해주세요_

### 작사가_전체랭킹_kavin_ver01.csv
```
song_data_yoon_ver06.csv + idol_generation_1_kavin_ver01.csv
사용하여 작사가/작곡가 전체 랭킹 데이터 생성
```

