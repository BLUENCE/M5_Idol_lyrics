## PUSH시 파일 저장법
###### 제목(내용)_작성자(혹은 수정자)_몇 번째 수정
```
Code -> melon_urlid_crawling_SoHyun_ver01.ipynb
Data -> song_data_yewon_ver01.csv
```

## 변수 지정
| **아이돌 정보**  |  **곡 정보**  |
|---|---|
| 아이돌명 'artist' <br> 아이돌영문명 및 원표기 'artist_eng' <br> 멤버이름 'artist_m' <br> 데뷔년도/곡명 'debut_y'/'debut_t' <br> 소속사 'agency' <br> 활동장르 'genre' <br> 성별여부 'gender <br> 멤버수 'member_num' <br> 리더이름 'leader_name' <br> 멜론표기명 'melon_artist' | 타이틀여부 'is_title' <br> 노래제목 'title' <br> 앨범명 'album' <br> 발매년도 'release_date' <br> 장르 'song_genre' <br> 노래가사 'lyrics' <br> 작곡가 'composer' <br> 작사가 'lyricist' <br> 하트수 'like' |

## Code 설명
### [melon_urlid_crawling_SoHyun_ver01.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/Crawling/url_crawling/melon_urlid_crawling_SoHyun_ver01.ipynb)
```
멜론 가수별 url id를 추출하기 위한 크롤링 코드입니다. 
```
### [melon_song_data_crawling_SoHyun_ver01.ipynb](https://github.com/BLUENCE/M5_Idol_lyrics/blob/master/Crawling/url_crawling/melon_song_data_crawling_SoHyun_ver01.ipynb)
```
추출한 url을 이용하여 가사 및 곡 정보를 추출한 크롤링 코드입니다. 
```

## Data 설명
### [드라이브 링크](https://drive.google.com/drive/folders/1XB4ubjht4tOPPZwKXrMugbOSefWe0xdD)
### song_data_fixed.csv
```
가수 이름이 한 줄 씩 밀려있던 것을 수정한 전처리 되지 않은 곡 정보 csv파일입니다. 
melon_song_data_crawling_SoHyun_ver01.ipynb 의 크롤링 코드로 추출된 내용입니다. 
수정일: 0910
```
### song_data_fixed_0911_ver1.csv
```
누락된 가수를 추가하고 중복 가수를 제거했음. 가사가 없는 행은 모두 drop한 상태의 raw한 가사 데이터. 
수정일
```
### song_data_yewon_ver1.csv
```
- 제거
가사/가수가 없는 행
제목에 리믹스,라이브,inst,영일중,ver 인 행
앨범에 나가수, 불명, 복면인 행
타이틀, 가사, 앨범에 히라가나/가타카나가 들어간 행
- 변경
is_title이 nan인 행을 '수록곡'으로 변경
```



