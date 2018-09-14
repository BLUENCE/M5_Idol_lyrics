## PUSH시 파일 저장법
###### 제목(내용)_작성자(혹은 수정자)_몇 번째 수정
```
Code -> melon_urlid_crawling_SoHyun_ver01.ipynb
Data -> song_data_yewon_ver01.csv
```

## 변수 지정
| **아이돌 정보**  |  **곡 정보**  |
|---|---|
| 아이돌명 'artist' <br> 아이돌영문명 및 원표기 'artist_eng' <br> 멤버이름 'artist_m' <br> 데뷔년도/곡명 'debut_y'/'debut_t' <br> 옛날 소속사 'agency_old' <br> 현재 소속사 'agency_' <br> 활동장르 'genre' <br> 성별여부 'gender <br> 멤버수 'member_num' <br> 리더이름 'leader_name' <br> 멜론표기명 'melon_artist' | 타이틀여부 'is_title' <br> 노래제목 'title' <br> 앨범명 'album' <br> 발매년도 'release_date' <br> 장르 'song_genre' <br> 노래가사 'lyrics' <br> 작곡가 'composer' <br> 작사가 'lyricist' <br> 편곡가 'arranger' <br> 하트수 'like' |

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
1. 주석추가

2. 텐서플로우 + LSTM 코드가 추가되었습니다.(미완성)
```


## Data 설명
### [드라이브 링크](https://drive.google.com/drive/folders/1XB4ubjht4tOPPZwKXrMugbOSefWe0xdD)

### :pushpin: song_data_SoHyun_raw.csv

<u>***가사 전처리시 이 파일을 활용하시기 바랍니다!**</u>*

```
1. 가사가 null, 공백인 행은 모두 없앴습니다. 

2. 아이오아이, 워너원이 중복이었기 때문에 drop 시켰습니다. 

** 전처리 이전의 가장 최신 상태의 가사 크롤링 파일입니다. 가수 정보와는 merge되지 않은 raw한 상태입니다**
```


### song_data_yewon_ver01.csv
```
(song_tidy_yewon_ver01.ipynb)
1. 제거 : 가사/가수가 없는 행
         제목에 리믹스,라이브,inst,영일중,ver 인 행
         앨범에 나가수, 불명, 복면인 행
         타이틀, 가사, 앨범에 히라가나/가타카나가 들어간 행
2. 변경 : is_title이 nan인 행을 '수록곡'으로 변경
```
### song_data_yewon_ver02.csv  
```
(song_tidy_yewon_ver02.ipynb)
1. 히라가나/가타카나를 제거한 후에도 일본어 가사가 한글로 포함되어 있는 경우 전처리 
  --> contains로 확인한뒤 행제거 반복
2. 가사가 모두 영어, 중국어인 경우 전처리 
  --> 가사에 한글이 하나도 들어가지 않은 행 제거
```
### song_data_kavin_ver03.csv
```
(creator_tidy_kavin_ver02.ipynb)
creator칼럼을 lyricist, composer, arranger로 나눈 데이터
```
### song_data_yewon_ver04.csv
```
(song_tidy_yewon_ver03.ipynb)
song_data_kavin_ver03.csv파일 아티스트의 중복노래를 제거한 데이터
```

### :pushpin: song_data_yewon_ver05.csv
```
song_data_yewon_ver04.csv에서 가수 '키스'의 노래를 모두 제거한 데이터
```
