# `coc_r9_eval7`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| coc_r9_eval7_id | int(11) | NO | PRI | 0 |  |  |
| coc_r9_eval7_name | varchar(250) | YES | UNI | NULL |  |  |
| coc_r9_eval7_code | varchar(50) | YES |  | NULL |  |  |
| coc_r9_eval7_score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_coc_r9_eval7_name | coc_r9_eval7_name | yes | 1 |
| PRIMARY | coc_r9_eval7_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "coc_r9_eval7_id": 1,
    "coc_r9_eval7_name": "ไม่ตอบ",
    "coc_r9_eval7_code": null,
    "coc_r9_eval7_score": 0
  },
  {
    "coc_r9_eval7_id": 2,
    "coc_r9_eval7_name": "ดี",
    "coc_r9_eval7_code": null,
    "coc_r9_eval7_score": 1
  },
  {
    "coc_r9_eval7_id": 3,
    "coc_r9_eval7_name": "ปานกลาง",
    "coc_r9_eval7_code": null,
    "coc_r9_eval7_score": 2
  },
  {
    "coc_r9_eval7_id": 4,
    "coc_r9_eval7_name": "ปรับปรุง",
    "coc_r9_eval7_code": null,
    "coc_r9_eval7_score": 3
  }
]
```
