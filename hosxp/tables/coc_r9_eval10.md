# `coc_r9_eval10`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| coc_r9_eval10_id | int(11) | NO | PRI | 0 |  |  |
| coc_r9_eval10_name | varchar(250) | YES | UNI | NULL |  |  |
| coc_r9_eval10_code | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_coc_r9_eval10_name | coc_r9_eval10_name | yes | 1 |
| PRIMARY | coc_r9_eval10_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "coc_r9_eval10_id": 1,
    "coc_r9_eval10_name": "เขียว",
    "coc_r9_eval10_code": null
  },
  {
    "coc_r9_eval10_id": 2,
    "coc_r9_eval10_name": "เหลือง",
    "coc_r9_eval10_code": null
  },
  {
    "coc_r9_eval10_id": 3,
    "coc_r9_eval10_name": "แดง",
    "coc_r9_eval10_code": null
  }
]
```
