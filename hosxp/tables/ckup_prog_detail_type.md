# `ckup_prog_detail_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_prog_detail_type_id | int(11) | NO | PRI | 0 |  |  |
| ckup_prog_detail_type_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_prog_detail_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ckup_prog_detail_type_id": 1,
    "ckup_prog_detail_type_name": "ค่าบริการ"
  },
  {
    "ckup_prog_detail_type_id": 2,
    "ckup_prog_detail_type_name": "Lab"
  },
  {
    "ckup_prog_detail_type_id": 3,
    "ckup_prog_detail_type_name": "Lab Group"
  },
  {
    "ckup_prog_detail_type_id": 4,
    "ckup_prog_detail_type_name": "X-Ray"
  }
]
```
