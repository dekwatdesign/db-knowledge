# `hrd_disciplinary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| DISCIPLINARY_ID | int | NO | PRI | NULL | auto_increment |  |
| DISCIPLINARY_DETAIL | varchar(255) | YES |  | NULL |  |  |
| PERSON_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| DISCIPLINARY_BLAME | varchar(255) | YES |  | NULL |  |  |
| DISCIPLINARY_NUMBER | varchar(100) | YES |  | NULL |  |  |
| DISCIPLINARY_REMARK | varchar(255) | YES |  | NULL |  |  |
| DISCIPLINARY_DATE | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | DISCIPLINARY_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "DISCIPLINARY_ID": 2,
    "DISCIPLINARY_DETAIL": "ทดสอบ",
    "PERSON_ID": 26,
    "updated_at": "2019-07-09 02:11:44",
    "created_at": "2019-07-09 02:11:44",
    "DISCIPLINARY_BLAME": "การเพิ่มโทษ",
    "DISCIPLINARY_NUMBER": "123",
    "DISCIPLINARY_REMARK": "-",
    "DISCIPLINARY_DATE": "2019-07-10"
  },
  {
    "DISCIPLINARY_ID": 4,
    "DISCIPLINARY_DETAIL": "กระทำผิดวินัย",
    "PERSON_ID": 325,
    "updated_at": "2019-07-09 05:56:04",
    "created_at": "2019-07-09 05:56:04",
    "DISCIPLINARY_BLAME": "ตัดเงินเดือน",
    "DISCIPLINARY_NUMBER": "25/2562",
    "DISCIPLINARY_REMARK": null,
    "DISCIPLINARY_DATE": "2019-07-01"
  }
]
```
