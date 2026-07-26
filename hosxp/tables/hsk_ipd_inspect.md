# `hsk_ipd_inspect`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| wname | varchar(100) | YES | MUL | NULL |  |  |
| bedno | varchar(10) | YES |  | NULL |  |  |
| s_date | date | YES | MUL | NULL |  |  |
| s_time | time | YES | MUL | NULL |  |  |
| s_spell | int(1) | YES | MUL | NULL |  |  |
| s_text1 | text | YES |  | NULL |  |  |
| s_text2 | text | YES |  | NULL |  |  |
| s_text3 | text | YES |  | NULL |  |  |
| s_staff | varchar(20) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| an_2 | an | yes | 1 |
| an_2 | hn | yes | 2 |
| an_2 | wname | yes | 3 |
| an_2 | s_date | yes | 4 |
| an_2 | s_spell | yes | 5 |
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |
| s_date | s_date | no | 1 |
| s_spell | s_spell | no | 1 |
| s_time | s_time | no | 1 |
| wname | wname | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "id": 12,
    "an": "670001510",
    "hn": "610000273",
    "wname": "IPD5",
    "bedno": "ก504",
    "s_date": "2024-09-05",
    "s_time": "9:30:05",
    "s_spell": 2,
    "s_text1": "[MASKED_FULLNAME]",
    "s_text2": "T=36.6?C,P=78bpm,R=20bpm,BP=100/80 mmHg",
    "s_text3": "",
    "s_staff": "yuwa231",
    "d_update": "2024-09-05 09:31:20"
  },
  {
    "id": 13,
    "an": "670002053",
    "hn": "670001194",
    "wname": "IPD5",
    "bedno": "ก506",
    "s_date": "2025-01-03",
    "s_time": "19:14:49",
    "s_spell": 2,
    "s_text1": "ประเภท 2c กลับจากเยี่ยมบ้าน แพทย์ประเมินให้เยี่ยมบ้านต่อ",
    "s_text2": "T=...?C,P=...bpm,R=...bpm,BP=.../... mmHg,O2 sat=...%",
    "s_text3": "",
    "s_staff": "yuwa078",
    "d_update": "2025-01-03 19:16:52"
  },
  {
    "id": 14,
    "an": "670002108",
    "hn": "670000426",
    "wname": "IPD5",
    "bedno": "ก502",
    "s_date": "2025-01-03",
    "s_time": "19:19:20",
    "s_spell": 2,
    "s_text1": "&nbsp;ประเภท 2c กลับจากเยี่ยมบ้านตั้งแต่เวรเช้า อารมณ์ปกติ ร่วมมือทำกิจกรรม",
    "s_text2": "T=36.50 ?C,P=104bpm,R=20bpm,BP=110/66 mmHg,O2 sat=0%",
    "s_text3": "",
    "s_staff": "yuwa078",
    "d_update": "2025-01-03 19:20:30"
  }
]
```
