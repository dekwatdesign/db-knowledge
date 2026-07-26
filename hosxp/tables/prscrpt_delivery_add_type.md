# `prscrpt_delivery_add_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_delivery_add_type_id | int(11) | NO | PRI | 0 |  |  |
| prscrpt_delivery_add_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | prscrpt_delivery_add_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "prscrpt_delivery_add_type_id": 1,
    "prscrpt_delivery_add_type_name": "ที่อยู่ตามทะเบียนบ้าน"
  },
  {
    "prscrpt_delivery_add_type_id": 2,
    "prscrpt_delivery_add_type_name": "ที่อยู่ที่ติดต่อได้/จัดส่งพัสดุ"
  }
]
```
