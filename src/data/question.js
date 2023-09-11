const question = [
    {
        "ID": 1,
        "NAME": "이지연",
        "MAINTITLE":"문의드려요",
        "DESC":"예약확인은 어디서 해야하나요? 눈에 잘 안보이는 거 같아요",
        "DAY":"2022-05-07",
        "TYPE":"question"
    },
    {
        "ID": 2,
        "NAME": "이지연",
        "MAINTITLE":"여기서 예약하면",
        "DESC":"여기서 예약하면 따로 예약한곳에 연락안해도 되는거 맞죠? 불안해서 한 번 더 물어봅니다",
        "DAY":"2022-05-18",
        "TYPE":"question"
    },
    {
        "ID": 3,
        "NAME": "기범석",
        "MAINTITLE":"알려주세요",
        "DESC":"그린톡이랑 1:1문의는 뭐가 다르죠? 궁금한거 어디다가 물어봐요?",
        "DAY":"2022-6-23",
        "TYPE":"question"
    },
    {
        "ID": 4,
        "NAME": "이지연",
        "MAINTITLE":"생일쿠폰은 어디서 받는건가요?",
        "DESC":"생일날짜에 쿠폰 발급된다는 배너 본거 같은데 자동발급되는건가요?",
        "DAY":"2022-07-09",
        "TYPE":"question"
    },
    {
        "ID": 5,
        "NAME": "이지연",
        "MAINTITLE":"생일쿠폰 추가발급때문에..",
        "DESC":"생일쿠폰 받아서 예약했는데 잘못 예약해서 취소하고 다시 예약하려고하는데 생일쿠폰이 사라졌는데 다시 발급되는건가요?",
        "DAY":"2022-07-10",
        "TYPE":"question"
    },
    {
        "ID": 6,
        "NAME": "기범석",
        "MAINTITLE":"결제가 안되는거 같아요",
        "DESC":"카드결제누르고 계속 안넘어갑니다 해결좀",
        "DAY":"2022-9-21",
        "TYPE":"question"
    }, 
    {
        "ID": 7,
        "NAME": "이지연",
        "MAINTITLE":"추천받고싶은데",
        "DESC":"키워드검색으로 나오는거는 누가 정하는건가요? 관계 없어 보이는 곳들이 있는거 같은데...",
        "DAY":"2022-10-21",
        "TYPE":"question"
    },
    {
        "ID": 8,
        "NAME": "이지연",
        "MAINTITLE":"기능추가 부탁드려요",
        "DESC":"가보고 안좋았던 곳 신고하는 기능은 없나요 너무 불편했는데 알릴 방법이 없네요",
        "DAY":"2022-11-04",
        "TYPE":"question"
    },
    {
        "ID": 9,
        "NAME": "기범석",
        "MAINTITLE":"예약이 안되는 곳도 있나요?",
        "DESC":"실시간예약이 안되는 곳은 전화로 예약해야하나요?",
        "DAY":"2022-9-21",
        "TYPE":"question"
    },
    {
        "ID": 10,
        "NAME": "기범석",
        "MAINTITLE":"전화예약한 사이트",
        "DESC":"전화로 갔던곳은 리뷰 써도 포인트 받을 수 있는거에요?",
        "DAY":"2022-9-27",
        "TYPE":"question"
    }, 
    {
        "ID": 11,
        "NAME": "기범석",
        "MAINTITLE":"저번부터 생각한건데",
        "DESC":"예약기능이 2개밖에 없던데 다른건 없나요? 실시간 계좌이체같은거요...",
        "DAY":"2022-10-02",
        "TYPE":"question"
    },     
    {
        "ID": 12,
        "NAME": "기범석",
        "MAINTITLE":"포인트는 어떻게 사용하나요",
        "DESC":"포인트 사용방법좀 알려주세요",
        "DAY":"2022-03-01",
        "TYPE":"question"
    }, 
    {
        "ID": 13,
        "NAME": "이지연",
        "MAINTITLE":"회원 탈퇴는 어디서 하나요?",
        "DESC":"사이트 회원 탈퇴 하고 싶은데 어디서 하는 건가요?",
        "DAY":"2023-4-27",
        "TYPE":"question"
    },
    {
        "ID": 14,
        "NAME": "기범석",
        "MAINTITLE":"아니 포인트 왜 사용이 안되나요?",
        "DESC":"얼마부터 사용가능 한건가요? 저 지금 2400원있는데",
        "DAY":"2023-5-01",
        "TYPE":"question"
    },
    {
        "ID": 15,
        "NAME": "기범석",
        "MAINTITLE":"생일쿠폰질문있어요",
        "DESC":"1년마다 생일쿠폰 재발급이 되는건가요?",
        "DAY":"2023-6-19",
        "TYPE":"question"
    },
    {
        "ID": 16,
        "NAME": "기범석",
        "MAINTITLE":"충주카누캠핑장 다녀왔어요",
        "DESC":"바로앞에 충주호가 있어서 너무 예쁘더라구요. 다음에 또 갈꺼에요",
        "DAY":"2023-6-19",
        "TYPE":"review"
    },
    {
        "ID": 17,
        "NAME": "기범석",
        "MAINTITLE":"호수산장관광농원 다녀왔어요",
        "DESC":"오지캠핑 가고 싶었는데 장난아니네요 밤에 무서웠어요",
        "DAY":"2023-6-19",
        "TYPE":"review"
    },
    {
        "ID": 18,
        "NAME": "기범석",
        "MAINTITLE":"아로니움글램핑귀찮아서글램핑으로",
        "DESC":"텐트치기 귀찮아서 글램핑으로 갔는데 편하고 너무 좋았어요",
        "DAY":"2023-6-19",
        "TYPE":"review"
    },
    {
        "ID": 18,
        "NAME": "이지연",
        "MAINTITLE":"아로니움글램핑귀찮아서글램핑으로",
        "DESC":"텐트치기 귀찮아서 글램핑으로 갔는데 편하고 너무 좋았어요",
        "DAY":"2023-6-19",
        "TYPE":"review"
    },
]