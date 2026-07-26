# `anc_result_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_result_type_id | int(11) | NO | PRI | 0 |  |  |
| anc_result_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anc_result_type_name | anc_result_type_name | yes | 1 |
| PRIMARY | anc_result_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "anc_result_type_id": 1,
    "anc_result_type_name": "ปกติ"
  },
  {
    "anc_result_type_id": 2,
    "anc_result_type_name": "ผิดปกติ"
  },
  {
    "anc_result_type_id": 9,
    "anc_result_type_name": "ไม่ทราบ"
  }
]
```
