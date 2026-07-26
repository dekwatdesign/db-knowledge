# `hsk_ipt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(10) | YES | MUL | NULL |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| ward | varchar(20) | YES | MUL | NULL |  |  |
| regdate | date | YES | MUL | NULL |  |  |
| regtime | time | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |
| regdate | regdate | no | 1 |
| uk | an | yes | 1 |
| uk | hn | yes | 2 |
| uk | ward | yes | 3 |
| vstdate | vstdate | no | 1 |
| ward | ward | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 10623,
    "an": "670001423",
    "hn": "580000424",
    "ward": "02",
    "regdate": "2024-08-19",
    "regtime": "8:00:00",
    "vstdate": "2024-08-20",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2024-08-20 18:00:00"
  },
  {
    "id": 10624,
    "an": "670001257",
    "hn": "660001255",
    "ward": "03",
    "regdate": "2024-07-19",
    "regtime": "8:00:00",
    "vstdate": "2024-08-20",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2024-08-20 18:14:25"
  },
  {
    "id": 10625,
    "an": "670001235",
    "hn": "670000001",
    "ward": "02",
    "regdate": "2024-07-15",
    "regtime": "8:00:00",
    "vstdate": "2024-08-20",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2024-08-20 18:20:45"
  },
  {
    "id": 10626,
    "an": "670000111",
    "hn": "600001367",
    "ward": "04",
    "regdate": "2024-01-12",
    "regtime": "9:30:00",
    "vstdate": "2024-08-21",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2024-08-21 13:30:42"
  },
  {
    "id": 10627,
    "an": "670001142",
    "hn": "660001252",
    "ward": "01",
    "regdate": "2024-07-08",
    "regtime": "8:00:00",
    "vstdate": "2024-08-27",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2024-08-27 11:44:26"
  },
  {
    "id": 10628,
    "an": "670001503",
    "hn": "670001082",
    "ward": "04",
    "regdate": "2024-08-30",
    "regtime": "10:53:00",
    "vstdate": "2024-08-30",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2024-08-30 14:43:52"
  },
  {
    "id": 10629,
    "an": "670001420",
    "hn": "670000861",
    "ward": "04",
    "regdate": "2024-08-19",
    "regtime": "8:00:00",
    "vstdate": "2024-08-30",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2024-08-30 15:22:38"
  },
  {
    "id": 10630,
    "an": "670001422",
    "hn": "670000678",
    "ward": "04",
    "regdate": "2024-08-19",
    "regtime": "8:00:00",
    "vstdate": "2024-08-30",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2024-08-30 20:22:06"
  }
]
```
