# `coc_r9_eval9`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| coc_r9_eval9_id | int(11) | NO | PRI | 0 |  |  |
| coc_r9_eval9_name | varchar(250) | YES | UNI | NULL |  |  |
| coc_r9_eval9_code | varchar(50) | YES |  | NULL |  |  |
| coc_r9_eval9_score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_coc_r9_eval9_name | coc_r9_eval9_name | yes | 1 |
| PRIMARY | coc_r9_eval9_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "coc_r9_eval9_id": 1,
    "coc_r9_eval9_name": "ไม่ตอบ",
    "coc_r9_eval9_code": null,
    "coc_r9_eval9_score": 0
  },
  {
    "coc_r9_eval9_id": 2,
    "coc_r9_eval9_name": "ดี",
    "coc_r9_eval9_code": null,
    "coc_r9_eval9_score": 1
  },
  {
    "coc_r9_eval9_id": 3,
    "coc_r9_eval9_name": "ปานกลาง",
    "coc_r9_eval9_code": null,
    "coc_r9_eval9_score": 2
  },
  {
    "coc_r9_eval9_id": 4,
    "coc_r9_eval9_name": "ปรับปรุง",
    "coc_r9_eval9_code": null,
    "coc_r9_eval9_score": 3
  }
]
```
