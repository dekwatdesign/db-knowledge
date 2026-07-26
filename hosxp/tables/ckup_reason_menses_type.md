# `ckup_reason_menses_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_reason_menses_type_id | int(11) | NO | PRI | 0 |  |  |
| ckup_reason_menses_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_reason_menses_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ckup_reason_menses_type_id": 1,
    "ckup_reason_menses_type_name": "หมดเองตามธรรมชาติ"
  },
  {
    "ckup_reason_menses_type_id": 2,
    "ckup_reason_menses_type_name": "ตัดมดลูก รังไข่"
  }
]
```
