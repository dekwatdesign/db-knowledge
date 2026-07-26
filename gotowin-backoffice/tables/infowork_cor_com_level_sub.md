# `infowork_cor_com_level_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| COR_COM_LEVEL_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| COR_COM_LEVEL_ID | int | YES |  | NULL |  |  |
| COR_COM_LEVEL_SUB_NUMBER | varchar(20) | YES |  | NULL |  |  |
| COR_COM_LEVEL_SUB_DETAIL | varchar(600) | YES |  | NULL |  |  |
| ACTIVE | enum('True','Fales') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| TYPE_SCORE_ID | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | COR_COM_LEVEL_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "COR_COM_LEVEL_SUB_ID": 1,
    "COR_COM_LEVEL_ID": 1,
    "COR_COM_LEVEL_SUB_NUMBER": "1",
    "COR_COM_LEVEL_SUB_DETAIL": "มุ่งผลสัมฤทธิ์",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 15:04:52",
    "created_at": "2020-09-28 15:04:52",
    "TYPE_SCORE_ID": 1
  },
  {
    "COR_COM_LEVEL_SUB_ID": 2,
    "COR_COM_LEVEL_ID": 2,
    "COR_COM_LEVEL_SUB_NUMBER": "1",
    "COR_COM_LEVEL_SUB_DETAIL": "บริการที่ดี",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 15:06:23",
    "created_at": "2020-09-28 15:06:23",
    "TYPE_SCORE_ID": 2
  }
]
```
