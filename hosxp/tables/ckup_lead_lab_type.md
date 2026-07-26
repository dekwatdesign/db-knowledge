# `ckup_lead_lab_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_lead_lab_type_id | int(11) | NO | PRI | 0 |  |  |
| ckup_lead_lab_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_lead_lab_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ckup_lead_lab_type_id": 1,
    "ckup_lead_lab_type_name": "ปัสสาวะ"
  },
  {
    "ckup_lead_lab_type_id": 2,
    "ckup_lead_lab_type_name": "เลือด"
  }
]
```
