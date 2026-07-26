# `opi_dispense_usage_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_dispense_usage_type_id | int(11) | NO | PRI | 0 |  |  |
| opi_dispense_usage_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_dispense_usage_type_name | opi_dispense_usage_type_name | yes | 1 |
| PRIMARY | opi_dispense_usage_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "opi_dispense_usage_type_id": 2,
    "opi_dispense_usage_type_name": "เปลี่ยนวิธีใช้"
  },
  {
    "opi_dispense_usage_type_id": 1,
    "opi_dispense_usage_type_name": "วิธีใช้เดิม"
  }
]
```
