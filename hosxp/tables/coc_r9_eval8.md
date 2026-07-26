# `coc_r9_eval8`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| coc_r9_eval8_id | int(11) | NO | PRI | 0 |  |  |
| coc_r9_eval8_name | varchar(250) | YES | UNI | NULL |  |  |
| coc_r9_eval8_code | varchar(50) | YES |  | NULL |  |  |
| coc_r9_eval8_score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_coc_r9_eval8_name | coc_r9_eval8_name | yes | 1 |
| PRIMARY | coc_r9_eval8_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "coc_r9_eval8_id": 1,
    "coc_r9_eval8_name": "ไม่ตอบ",
    "coc_r9_eval8_code": null,
    "coc_r9_eval8_score": 0
  },
  {
    "coc_r9_eval8_id": 2,
    "coc_r9_eval8_name": "ดี",
    "coc_r9_eval8_code": null,
    "coc_r9_eval8_score": 1
  },
  {
    "coc_r9_eval8_id": 3,
    "coc_r9_eval8_name": "ปานกลาง",
    "coc_r9_eval8_code": null,
    "coc_r9_eval8_score": 2
  },
  {
    "coc_r9_eval8_id": 4,
    "coc_r9_eval8_name": "ปรับปรุง",
    "coc_r9_eval8_code": null,
    "coc_r9_eval8_score": 3
  }
]
```
