# `pttype_items_paid_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_items_paid_type_id | int(11) | NO | PRI | 0 |  |  |
| pttype_items_paid_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_items_paid_type_name | pttype_items_paid_type_name | yes | 1 |
| PRIMARY | pttype_items_paid_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "pttype_items_paid_type_id": 2,
    "pttype_items_paid_type_name": "ชำระเงินเอง (เบิกได้)"
  },
  {
    "pttype_items_paid_type_id": 3,
    "pttype_items_paid_type_name": "ชำระเงินเอง (เบิกไม่ได้)"
  },
  {
    "pttype_items_paid_type_id": 1,
    "pttype_items_paid_type_name": "ตามสิทธิ"
  }
]
```
