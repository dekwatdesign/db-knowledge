# `hsk_assessment_ass04_nursing_dx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| hn | char(9) | YES | MUL | NULL |  |  |
| an | char(9) | YES | MUL | NULL |  |  |
| dx_name | varchar(200) | YES |  | NULL |  |  |
| vstdate_d1 | date | YES |  | NULL |  |  |
| vstdate_d2 | date | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "id": 3411,
    "hn": "670000678",
    "an": "670001330",
    "dx_name": "เสี่ยงต่อการทำร้ายตนเอง",
    "vstdate_d1": "2024-07-31",
    "vstdate_d2": "2024-08-07",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2024-09-04 12:34:16"
  },
  {
    "id": 3412,
    "hn": "670000861",
    "an": "670001379",
    "dx_name": "มีโอกาสเกิดพฤติกรรมก้าวร้าวต่อตนเองและผู้อื่น",
    "vstdate_d1": "2024-08-09",
    "vstdate_d2": "2024-08-19",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2024-09-04 13:01:39"
  },
  {
    "id": 3414,
    "hn": "680001290",
    "an": "680001962",
    "dx_name": "เสี่ยงต่อการทำร้ายตนเอง",
    "vstdate_d1": "2025-12-19",
    "vstdate_d2": "2025-12-22",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2026-01-10 23:59:35"
  },
  {
    "id": 3415,
    "hn": "680001290",
    "an": "680001962",
    "dx_name": "เสี่ยงต่อการทำร้ายตนเอง",
    "vstdate_d1": "2025-12-19",
    "vstdate_d2": "2025-12-24",
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2026-01-10 23:59:59"
  },
  {
    "id": 3416,
    "hn": "680001290",
    "an": "680001962",
    "dx_name": "เสี่ยงต่อการทำร้ายตนเอง",
    "vstdate_d1": "2026-01-01",
    "vstdate_d2": null,
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2026-01-11 00:04:55"
  },
  {
    "id": 3418,
    "hn": "680001290",
    "an": "680001962",
    "dx_name": "ผู้ปกครองบกพร่องทักษะการจัดการพฤติกรรมทำร้ายตนเองของผู้ป่วย",
    "vstdate_d1": "2026-01-11",
    "vstdate_d2": null,
    "staff": "[MASKED_FULLNAME]",
    "d_update": "2026-01-11 07:42:31"
  }
]
```
