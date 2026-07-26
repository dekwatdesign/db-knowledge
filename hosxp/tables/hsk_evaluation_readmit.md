# `hsk_evaluation_readmit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(5) | NO | PRI | 0 |  |  |
| ward | varchar(10) | YES |  | NULL |  |  |
| regdate | date | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| an | varchar(10) | YES | MUL | NULL |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| re_day | int(3) | YES |  | NULL |  |  |
| r1 | int(1) | YES |  | NULL |  |  |
| r2 | int(1) | YES |  | NULL |  |  |
| r3 | int(1) | YES |  | NULL |  |  |
| r4 | int(1) | YES |  | NULL |  |  |
| r5 | int(1) | YES |  | NULL |  |  |
| r6 | int(1) | YES |  | NULL |  |  |
| r6_text | text | YES |  | NULL |  |  |
| readmit_type | int(3) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 3191,
    "ward": "03",
    "regdate": "2024-07-19",
    "vstdate": "2024-09-04",
    "vsttime": "10:14:30",
    "an": "670001257",
    "hn": "660001255",
    "staff": "[MASKED_FULLNAME]",
    "re_day": 14,
    "r1": 1,
    "r2": 1,
    "r3": 1,
    "r4": 0,
    "r5": 0,
    "r6": 0,
    "r6_text": "",
    "readmit_type": 28,
    "d_update": "2024-09-04 10:14:30"
  },
  {
    "id": 3192,
    "ward": "02",
    "regdate": "2024-07-25",
    "vstdate": "2024-09-04",
    "vsttime": "13:17:47",
    "an": "670001279",
    "hn": "660001338",
    "staff": "[MASKED_FULLNAME]",
    "re_day": 1,
    "r1": 0,
    "r2": 0,
    "r3": 0,
    "r4": 0,
    "r5": 0,
    "r6": 1,
    "r6_text": "ตามรอบ",
    "readmit_type": 0,
    "d_update": "2024-09-04 13:17:47"
  },
  {
    "id": 3193,
    "ward": "03",
    "regdate": "2024-08-19",
    "vstdate": "2024-09-04",
    "vsttime": "13:51:33",
    "an": "670001419",
    "hn": "650005914",
    "staff": "[MASKED_FULLNAME]",
    "re_day": 13,
    "r1": 0,
    "r2": 0,
    "r3": 1,
    "r4": 0,
    "r5": 0,
    "r6": 0,
    "r6_text": "",
    "readmit_type": 28,
    "d_update": "2024-09-04 13:51:33"
  },
  {
    "id": 3194,
    "ward": "04",
    "regdate": "2024-08-19",
    "vstdate": "2024-09-05",
    "vsttime": "8:02:05",
    "an": "670001420",
    "hn": "670000861",
    "staff": "[MASKED_FULLNAME]",
    "re_day": 1,
    "r1": 0,
    "r2": 0,
    "r3": 0,
    "r4": 0,
    "r5": 0,
    "r6": 1,
    "r6_text": "รักษาต่อเนื่องตามแผนการรักษา",
    "readmit_type": 0,
    "d_update": "2024-09-05 08:02:05"
  },
  {
    "id": 3195,
    "ward": "04",
    "regdate": "2024-08-26",
    "vstdate": "2024-09-05",
    "vsttime": "8:02:20",
    "an": "670001462",
    "hn": "670000832",
    "staff": "[MASKED_FULLNAME]",
    "re_day": 1,
    "r1": 0,
    "r2": 0,
    "r3": 0,
    "r4": 0,
    "r5": 0,
    "r6": 1,
    "r6_text": "รักษาต่อเนื่องตามแผนการรักษา",
    "readmit_type": 0,
    "d_update": "2024-09-05 08:02:20"
  },
  {
    "id": 3196,
    "ward": "04",
    "regdate": "2024-09-02",
    "vstdate": "2024-09-05",
    "vsttime": "8:02:32",
    "an": "670001510",
    "hn": "610000273",
    "staff": "[MASKED_FULLNAME]",
    "re_day": 1,
    "r1": 0,
    "r2": 0,
    "r3": 0,
    "r4": 0,
    "r5": 0,
    "r6": 1,
    "r6_text": "รักษาต่อเนื่องตามแผนการรักษา",
    "readmit_type": 0,
    "d_update": "2024-09-05 08:02:32"
  },
  {
    "id": 3197,
    "ward": "01",
    "regdate": "2024-07-17",
    "vstdate": "2024-09-05",
    "vsttime": "9:53:22",
    "an": "670001248",
    "hn": "670000146",
    "staff": "[MASKED_FULLNAME]",
    "re_day": 7,
    "r1": 1,
    "r2": 0,
    "r3": 0,
    "r4": 0,
    "r5": 0,
    "r6": 0,
    "r6_text": "",
    "readmit_type": 28,
    "d_update": "2024-09-05 09:53:22"
  },
  {
    "id": 3198,
    "ward": "01",
    "regdate": "2024-07-24",
    "vstdate": "2024-09-05",
    "vsttime": "14:34:07",
    "an": "670001266",
    "hn": "660001456",
    "staff": "[MASKED_FULLNAME]",
    "re_day": 28,
    "r1": 1,
    "r2": 1,
    "r3": 1,
    "r4": 0,
    "r5": 0,
    "r6": 0,
    "r6_text": "",
    "readmit_type": 28,
    "d_update": "2024-09-05 14:34:07"
  }
]
```
