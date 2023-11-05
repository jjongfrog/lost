export const questions = [
  {
    number: '01',
    question: 'RPG게임을 할 때<br>선호하는 캐릭터 성별은?',
    choices: [
      { text: 'RPG는 무조건 여캐지', value: 'b' },
      { text: '몰입을 위해서 남캐가 무난하지', value: 'a' }
    ]
  },
  {
    number: '02',
    question: '부캐로 키운다면 <br>선호하는 공격 스타일?',
    choices: [
      { text: '타격감은 보장되는 근거리 딜러!', value: 'c' },
      { text: '상대적으로 딜넣기 편한 원거리 딜러!', value: 'd' }
    ]
  },
  {
    number: '03',
    question: '대세캐릭?<br>해보고 싶었던 캐릭?',
    choices: [
      { text: '괜히 대세인 이유가 아니지! 인기있는 직업!', value: 'e' },
      { text: '난 남들이 안하는거 해보고싶어! 비주류 직업!', value: 'f' }
    ]
    
  },
  {
    number: '04',
    question: '부캐로 하고싶은 로스트아크<br>가장 대표적인 2가지 특성!',
    choices: [
      { text: '고점을 위한 특화세팅!', value: 'g' },
      { text: '부캐인데 그냥 신속캐릭!', value: 'h' }
    ]
  },
  {
    number: '05',
    question: '이번에 해볼 <br>캐릭터의 난이도는?',
    choices: [
      { text: '어차피 레이드 다 숙제인데 어려워도 상관없음!', value: 'j' },
      { text: '그냥 뇌빼고 하고싶어... 쉬운캐릭!', value: 'i' }
    ]
  },
  {
    number: '06',
    question: '레이드 파티취직이<br>잘되는 직업?',
    choices: [
      { text: '당연히 파티선호도 높은 캐릭이 좋지!', value: '' },
      { text: '어치피 부캐인데 신경안써...<br>내가 하고싶은 캐릭!', value: '' }
    ]
  },
  {
    number: '07',
    question: '게임할때 캐릭터<br> 꾸미기 좋아해?',
    choices: [
      { text: 'RPG 최종 컨텐츠는 룩딸!', value: '' },
      { text: '그냥 모코코아바타 입혀줄래<br>별로 신경안써', value: '' }
    ]
  },
  {
    number: '08',
    question: '신규직업? <br>기존직업?',
    choices: [
      { text: '신규직업들은 다 좋은것같아<br> 나도 신규직업할래', value: '' },
      { text: '난 기존에 있던 직업할래', value: '' }
    ]
  },
  {
    number: '09',
    question: '게임할 때 성능을 많이<br> 따지는 편이야?',
    choices: [
      { text: '부캐라서 그렇게 신경안써', value: '' },
      { text: '기왕 하는거 좋았으면 좋겠어!', value: '' }
    ]
  },
  {
    number: '10',
    question: '마지막으로 부캐가 <br>손가락 바쁜 캐릭은 어떄?',
    choices: [
      { text: '피아노딜러 너무 손가락아파', value: '' },
      { text: '시너지가동률도 좋고 바빠야 재밌지!', value: '' }
    ]
  },
]
export const results = [
  {
    
    title: '도심뜨면 리트',
    character: './images/아르카나.png',
    results: [
      '전압이 이쁨',
      '익숙해진다면 보장된 고점',
      '매번 새로운 플레이를 하는 느낌'
    ],
    jobs: ['아르카나'],
    lectureImg: 'https://img.youtube.com/vi/8CwXC6SozAI/0.jpg',
    lectureUrl: 'https://youtu.be/8CwXC6SozAI',
    backLoa: '/images/아르카나배경.jpg'
  },
  {
    title: '점화on',
    character: './images/점화.png',
    results: [
      '순간 dps 최상위권 딜러!',
      '현시점 레이드 구조에선 어려운 듯!',
      '특화직업이지만 악세가격이 저렴한 편'
    ],
    jobs: ['점화 소서리스'],
    lectureImg: 'https://img.youtube.com/vi/YTYx1vFDrOg/0.jpg',
    lectureUrl: 'https://youtu.be/YTYx1vFDrOg',
    backLoa: '/images/소서배경.jpg'
  },
  {
    title: '현시점 점화 상위호환',
    character: './images/소울이터.gif',
    results: [
      '신직업은 그냥 해라!',
      '특화캐릭임에도 쾌적함!',
      '스킬 모션 역대급!'
    ],
    jobs: ['만월 소울이터'],
    lectureImg: 'https://img.youtube.com/vi/7cx9vLTWKhs/0.jpg',
    lectureUrl: 'https://youtu.be/7cx9vLTWKhs?si=0_TeahHWE7IWeqE1',
    backLoa: '/images/소울이터배경.jpg'
  },
  
  {
    title: '퐁퐁...',
    character: './images/교감.jpg',
    results: [
      '개선 괜찮게 받은듯?',
      '기믹도 좋아짐',
      'pvp도 상당히 괜찮음'
    ],
    jobs: ['상급소환사 서머너'],
    lectureImg: 'https://img.youtube.com/vi/2lBrUwpK7_8/0.jpg',
    lectureUrl: 'https://youtu.be/2lBrUwpK7_8',
    backLoa: '/images/서머너배경.jpg'
  },
  
  {
    title: '드디어 손에서 총을...',
    character: './images/건슬.jpg',
    results: [
      '난이도,세팅비 상당히 낮음',
      '한방딜이 생각보다 쎔',
      '산책딜의 정석'
    ],
    jobs: ['사냥의시간 건슬링어'],
    lectureImg: 'https://img.youtube.com/vi/FJMCgRcqr_Q/0.jpg',
    lectureUrl: 'https://youtu.be/FJMCgRcqr_Q',
    backLoa: '/images/건슬배경.jpg'
  },
  
 
  {
    title: '드디어 손에서 총을...',
    character: './images/건슬.jpg',
    results: [
      '치명이 섞여서 세팅비 저렴함!',
      '총 든 여캐 어케 참음?',
      '그냥 얘는 재밌음'
    ],
    jobs: ['피스메이커 건슬링어'],
    lectureImg: 'https://img.youtube.com/vi/DUlbCZb9dVE/0.jpg',
    lectureUrl: 'https://youtu.be/DUlbCZb9dVE',
    backLoa: '/images/건슬배경.jpg'
  },
  

  {
    title: '그믐 소울이터',
    character: './images/소울이터.gif',
    
    results: [
      '신직업은 그냥 해라',
      '너프도 피해갔음',
      '조작이 신직업치곤 쉬운편'
    ],
    jobs: ['그믐 소울이터'],
    lectureImg: 'https://img.youtube.com/vi/m44toslL6OQ/0.jpg',
    lectureUrl: 'https://youtu.be/m44toslL6OQ?si=cphDeBMVfIuoxV1p',
    backLoa: '/images/소울이터배경.jpg'
  },
  
 
  {
    title: '영수증의 신',
    character: './images/버스트.jpg',
    results: [
      '진짜 한방',
      '성장체감 최상!',
      '스택 쌓는 맛'
    ],
    jobs: ['버스트 블레이드'],
    lectureImg: 'https://img.youtube.com/vi/oZIwb6vSENY/0.jpg',
    lectureUrl: 'https://youtu.be/oZIwb6vSENY?si=alZaNkz9xXXdmRQd',
    backLoa: '/images/블레배경.jpg'
  },
  
 
  {
    title: '리퍼님? 가능합니다!',
    character: './images/리퍼.jpg',
    results: [
      '정통 암살자!',
      '영수증 보는 맛이 있는 직업!',
      '보는 맛이 있는 캐릭!'
    ],
    jobs: ['갈증 리퍼'],
    lectureImg: 'https://img.youtube.com/vi/YRuQbUdu8KM/0.jpg',
    lectureUrl: 'https://youtu.be/YRuQbUdu8KM',
    backLoa: '/images/리퍼배경.jpg'
  },
  
  {
    title: '처단 슬레이어',
    character: './images/슬레.jpg',
    results: [
      '여버서커 어케 참음;',
      '젠더락은 늘 옳다',
      '이 직업하면 손해는 안봄'
    ],
    jobs: ['처단자 슬레이어'],
    lectureImg: 'https://img.youtube.com/vi/50cK4r7Ajj8/0.jpg',
    lectureUrl: 'https://youtu.be/50cK4r7Ajj8?si=_5cCdVh_iZOkCD8C',
    backLoa: '/images/슬레이어배경.jpg'
  },
  
  {
    title: '구닥다리 아덴 탈출',
    character: './images/인파.png',
    results: [
      '개편되고 더 재밌어진듯',
      '남인파도 기대된다',
      '신속이 주류인 몇안되는 직업!'
    ],
    jobs: ['체술 인파이터'],
    lectureImg: 'https://img.youtube.com/vi/124njxH-Pnc/0.jpg',
    lectureUrl: 'https://youtu.be/124njxH-Pnc?si=nTsQ3qoaK5AJe8qL',
    backLoa: '/images/인파배경.jpg'
  },
  
  
  {
    title: '본사 찾아갑니다',
    character: './images/창술.png',
    results: [
      '만능 육각형 딜러!',
      '활처럼 휘었다...',
      '500억 !'
    ],
    jobs: ['절정 창술사'],
    lectureImg: 'https://img.youtube.com/vi/1CBumX4f2-Q/0.jpg',
    lectureUrl: 'https://youtu.be/1CBumX4f2-Q',
    backLoa: '/images/창술배경.jpg'
  },
  
  {
    title: '피시방 아바타 분노통 돌려줘라',
    character: './images/슬레.jpg',
    results: [
      '진짜 좋은캐릭같음',
      '여자 버서커 어케 참음?',
      '앞으로 아바타는 잘 내줄거야...'
    ],
    jobs: ['포식 슬레이어'],
    lectureImg: 'https://img.youtube.com/vi/XTPHAoQNmRs/0.jpg',
    lectureUrl: 'https://youtu.be/XTPHAoQNmRs?si=loQaCcf1T45LGbgS',
    backLoa: '/images/슬레이어배경.jpg'
    
  },

  {
    title: '진짜 검사',
    character: './images/질풍.jpg',
    results: [
      '스킬이펙트 진짜 역대급 간지',
      '건데기 아닙니다!',
      '시너지딜러'
    ],
    jobs: ['질풍노도 기상술사'],
    lectureImg: 'https://img.youtube.com/vi/H1EqXOZ1fuc/0.jpg',
    lectureUrl: 'https://youtu.be/H1EqXOZ1fuc',
    backLoa: '/images/기상배경.jpg'
  },
  
  {
    title: '블래이드 아니고 블레이드',
    character: './images/잔재.jpg',
    results: [
      '삼도류 여캐 ? 어케 참음 ?',
      '파티 선호도 최상위!',
      '재미는 진짜 원탑'
    ],
    jobs: ['잔재된기운 블레이드'],
    lectureImg: 'https://img.youtube.com/vi/COuyVD0kX5c/0.jpg',
    lectureUrl: 'https://youtu.be/COuyVD0kX5c?si=8jllsedM5lxGwuiA',
    backLoa: '/images/블레배경.jpg'
  },
  
  {
    title: '와다! 효! 쵸우!',
    character: './images/세맥.jpg',
    results: [
      '전압 너무 이쁨',
      '레이드 구조 최적화 직업',
      '신속캐이면서 폭딜러'
    ],
    jobs: ['세맥타통 기공사'],
    lectureImg: 'https://img.youtube.com/vi/tj6F43Qow8Y/sddefault.jpg',
    lectureUrl: 'https://youtu.be/tj6F43Qow8Y',
    backLoa: '/images/기공배경.jpg'
  },
  

  {
    title: '민국이 괴롭히지 마라',
    character: '../images/두동.png',
    results: [
      '쉬운 난이도와 세팅',
      '원거리+타대+이동기',
      '주몽의 후예, 양궁의 나라'
    ],
    jobs: ['두번째 동료 호크아이'],
    lectureImg: 'https://img.youtube.com/vi/qhrZE5dva70/0.jpg',
    lectureUrl: 'https://youtu.be/qhrZE5dva70',
    backLoa: '/images/호크배경.jpg'
  },
  
  {
    title: '파폭 쌀먹 대답',
    character: './images/블래 파폭.png',
    results: [
      '개꿀잼 휠체어',
      '구조개편도 나름 괜찮게 받은듯?',
      '보정컨텐츠도 압도적인 성능'
    ],
    jobs: ['포격강화 블래스터'],
    lectureImg: 'https://img.youtube.com/vi/8KgrT8JzD08/0.jpg',
    lectureUrl: 'https://youtu.be/8KgrT8JzD08',
    backLoa: '/images/블래배경.jpg'
  },
  
  {
    title: '기술스카는 웃고있다',
    character: './images/기술.jpg',
    results: [
      '유산에 가려진 진짜 낭만',
      '인구수가 가장 적은 직업',
      '생각보다 성능이 괜찮음'
    ],
    jobs: ['아르데타인의 기술 스카우터'],
    lectureImg: 'https://img.youtube.com/vi/bbfoYkPeTvo/0.jpg',
    lectureUrl: 'https://youtu.be/bbfoYkPeTvo',
    backLoa: '/images/스카배경.jpg'
  },
  
  {
    title: '파폭 쌀먹 대답',
    character: './images/블래 파폭.png',
    results: [
      '중화기 낭만 어케 참음?',
      '낮은 세팅비,낮은 난이도',
      '화강의 메리트를 더 만들어달라'
    ],
    jobs: ['화력강화 블래스터'],
    lectureImg: 'https://img.youtube.com/vi/7m4Zw1wFMs8/0.jpg',
    lectureUrl: 'https://youtu.be/7m4Zw1wFMs8',
    backLoa: '/images/블래배경.jpg'
  },
  
  {
    title: '데헌해야겠는걸~ 핸드거너해야겠는걸~ ',
    character: './images/핸드거너.png',
    results: [
      '무난한 캐릭 그 자체',
      '흰글씨 볼 일이 거의 없음!',
      '핸드건 모션 너무 멋있음'
    ],
    jobs: ['핸드거너 데빌헌터'],
    lectureImg: 'https://img.youtube.com/vi/VwZ2zp77pAM/0.jpg',
    lectureUrl: 'https://youtu.be/VwZ2zp77pAM',
    backLoa: '/images/데헌배경.jpg'
  },
  
  {
    title: '제 검까활 보실래요?',
    character: './images/죽습.JPG',
    results: [
      '약하다 약하다 하니 진짜 약한줄 아네?',
      '님들 검까활같은 아바타 있음?',
      '로스트아크 유일한 활캐릭!'
    ],
    jobs: ['죽음의 습격 호크아이'],
    lectureImg: 'https://img.youtube.com/vi/kyuwKsuiV5g/0.jpg',
    lectureUrl: 'https://youtu.be/kyuwKsuiV5g',
    backLoa: '/images/호크배경.jpg'
  },
  
  {
    title: '원정대300렙 쥐바타',
    character: './images/쥐바타.jpg',
    results: [
      '샷건 낭만 그 자체',
      '게임사피셜 높은 피해량을 낼 수 있게 만든 직업',
      '근데 진짜진짜 가까이붙어야됨...'
    ],
    jobs: ['강화무기 데빌헌터'],
    lectureImg: 'https://img.youtube.com/vi/WYvdCLSN9u0/0.jpg',
    lectureUrl: 'https://youtu.be/WYvdCLSN9u0',
    backLoa: '/images/데헌배경.jpg'
  },
  
  {
    title: '니나브 세우라제 일격스커',
    character: './images/스커.jpg',
    results: [
      '간지.',
      '정형화된 사이클',
      '요즘 스트라이커 자체 인식이 좀...'
    ],
    jobs: ['일격필살 스트라이커'],
    lectureImg: 'https://img.youtube.com/vi/7UsEPb4CZgQ/0.jpg',
    lectureUrl: 'https://youtu.be/7UsEPb4CZgQ',
    backLoa: '/images/스커배경.jpg'
  },
  
  {
    title: '전태특징.gif 단단함...',
    character: './images/전태.JPG',
    results: [
      '파티선호도 부동의 1티어',
      '백스탭....',
      '진짜진짜진짜진짜진짜 단단함'
    ],
    jobs: ['전투태세 워로드'],
    lectureImg: 'https://img.youtube.com/vi/gkSTfymGyig/0.jpg',
    lectureUrl: 'https://youtu.be/gkSTfymGyig',
    backLoa: '/images/워로드배경.jpg'
  },
  
  {
    title: '대지술사 아닙니다',
    character: './images/광기.jpg',
    results: [
      '대검 버서커 ?  이걸 어케참음 ?',
      '낭만 그자체',
      '높은 안정성'
    ],
    jobs: ['광전사의 비기 버서커'],
    lectureImg: 'https://img.youtube.com/vi/3eNxq13kdGI/0.jpg',
    lectureUrl: 'https://youtu.be/3eNxq13kdGI',
    backLoa: '/images/버서커배경.jpg'
  },
  
  {
    title: '살아있는 웃음벨',
    character: './images/중수.jpg',
    results: [
      '한번도 안해본사람은 있어도 한번만 해본 사람은 없다.',
      '보석,트포요구치 낮음',
      '게임난이도가 상당히 낮아짐!'
    ],
    jobs: ['중력수련 디스트로이어'],
    lectureImg: 'https://img.youtube.com/vi/C1JA4HblBuU/0.jpg',
    lectureUrl: 'https://youtu.be/C1JA4HblBuU',
    backLoa: '/images/디트배경.jpg'
  },
  
  {
    title: '풀피입니다',
    character: './images/버서커.jpg',
    results: [
      '진짜 버서커를 플레이 하는 느낌!',
      'pvp에서 상당히 좋음!',
      '낭만 그 자체'
    ],
    jobs: ['광기 버서커'],
    lectureImg: 'https://img.youtube.com/vi/x5qh0QpnfVI/0.jpg',
    lectureUrl: 'https://youtu.be/x5qh0QpnfVI',
    backLoa: '/images/버서커배경.jpg'
  },
  
  {
    title: '왜 디트만?',
    character: './images/분망.jpg',
    results: [
      '원조 한방딜',
      '숨어있는 1티어 딜러',
      '세팅비 초 저렴!'
    ],
    jobs: ['분노의망치 디스트로이어'],
    lectureImg: 'https://img.youtube.com/vi/WZ5Bzrm9AL8/0.jpg',
    lectureUrl: 'https://youtu.be/WZ5Bzrm9AL8',
    backLoa: '/images/다트배경.jpg'
  },
  
  {
    title: '숨지마라! 벌써 화요일이네',
    character: './images/유산.jpg',
    results: [
      '아이언맨 낭만 그 자체',
      '가성비 캐릭의 대명사',
      '특화임에도 풀이속 가능!'
    ],
    jobs: ['진화의 유산 스카우터'],
    lectureImg: 'https://img.youtube.com/vi/6cef2QhfjJA/0.jpg',
    lectureUrl: 'https://youtu.be/6cef2QhfjJA',
    backLoa: '/images/스카배경.jpg'
  },
  {
    title: '저 일격아니고 오의인데요',
    character: './images/오의스커.jpg',
    results: [
      '스타일리쉬 남자 격투가 !',
      '낮은 난이도,세팅비!',
      '요즘 스트라이커 자체 인식이 좀...'
    ],
    jobs: ['오의난무 스트라이커'],
    lectureImg: 'https://img.youtube.com/vi/JoaqrA-HxVw/0.jpg',
    lectureUrl: 'https://youtu.be/JoaqrA-HxVw',
    backLoa: '/images/스커배경.jpg'
  },
  {
    title: '넬라 굿',
    character: './images/고기.jpg',
    results: [
      '파티선호도 부동의 1티어',
      '백스텝...',
      '증배버차 정형화된 사이클!'
    ],
    jobs: ['고독한 기사 워로드'],
    lectureImg: 'https://img.youtube.com/vi/Je5dJYhbX1c/0.jpg',
    lectureUrl: 'https://youtu.be/Je5dJYhbX1c',
    backLoa: '/images/워로드배경.jpg'
  },
  

]
export const mbtis = {
  bdfhj	:0,
bdegi	:1,
bdegj	:2,
bdehj	:3,
bdfgi	:4,
bdehi	:5,
bdfgj	:6,
bcegi	:7,
bcfgi	:8,
bcfhi	:9,
bcfhj	:10,
bcfgj	:11,
bcegj	:12,
bcehj	:13,
bcehi	:14,
bdfhi	:15,
adfgi	:16,
adegi	:17,
adfhi	:18,
adehi	:19,
adfhj	:20,
adfgj	:21,
acfgj	:22,
acfhj	:23,
acegj	:24,
acfhi	:25,
acfgi	:26,
acehi	:27,
acegi	:28,
adegj	:29,
adehj	:30,
acehj	:31
}
