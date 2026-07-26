# `psych_assess_mmse_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_mmse_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_mmse_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_assess_mmse_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psych_assess_mmse_type_id": 1,
    "psych_assess_mmse_type_name": "ผู้สูงอายุปกติไมได้เรียนหนังสือ"
  },
  {
    "psych_assess_mmse_type_id": 2,
    "psych_assess_mmse_type_name": "ผู้สูงอายุปกติเรียนระดับประถมศึกษา"
  },
  {
    "psych_assess_mmse_type_id": 3,
    "psych_assess_mmse_type_name": "ผู้สูงอายุปกติเรียนระดับสูงกว่าประถมศึกษา"
  }
]
```
