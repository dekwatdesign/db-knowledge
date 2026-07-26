# `coc_r9_eval4`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| coc_r9_eval4_id | int(11) | NO | PRI | 0 |  |  |
| coc_r9_eval4_name | varchar(250) | YES | UNI | NULL |  |  |
| coc_r9_eval4_code | varchar(50) | YES |  | NULL |  |  |
| coc_r9_eval4_score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_coc_r9_eval4_name | coc_r9_eval4_name | yes | 1 |
| PRIMARY | coc_r9_eval4_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "coc_r9_eval4_id": 1,
    "coc_r9_eval4_name": "ไม่ตอบ",
    "coc_r9_eval4_code": null,
    "coc_r9_eval4_score": 0
  },
  {
    "coc_r9_eval4_id": 2,
    "coc_r9_eval4_name": "ทำได้",
    "coc_r9_eval4_code": null,
    "coc_r9_eval4_score": 1
  },
  {
    "coc_r9_eval4_id": 3,
    "coc_r9_eval4_name": "ทำได้บ้าง",
    "coc_r9_eval4_code": null,
    "coc_r9_eval4_score": 2
  },
  {
    "coc_r9_eval4_id": 4,
    "coc_r9_eval4_name": "ทำไม่ได้",
    "coc_r9_eval4_code": null,
    "coc_r9_eval4_score": 3
  }
]
```
