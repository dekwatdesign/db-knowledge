# `opi_dispense_item_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_dispense_item_type_id | int(11) | NO | PRI | 0 |  |  |
| opi_dispense_item_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_dispense_item_type_name | opi_dispense_item_type_name | yes | 1 |
| PRIMARY | opi_dispense_item_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "opi_dispense_item_type_id": 2,
    "opi_dispense_item_type_name": "ยาเดิม"
  },
  {
    "opi_dispense_item_type_id": 1,
    "opi_dispense_item_type_name": "ยาสั่งใช้ตัวใหม่"
  }
]
```
