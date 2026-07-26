# `prscrpt_delivery_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_delivery_status_id | int(11) | NO | PRI | 0 |  |  |
| prscrpt_delivery_status_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | prscrpt_delivery_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "prscrpt_delivery_status_id": 1,
    "prscrpt_delivery_status_name": "อยู่ระหว่างนำส่ง"
  },
  {
    "prscrpt_delivery_status_id": 2,
    "prscrpt_delivery_status_name": "ส่งคืนต้นทาง"
  },
  {
    "prscrpt_delivery_status_id": 3,
    "prscrpt_delivery_status_name": "เจ้าหน้าที่ติดต่อผู้รับไม่ได้"
  }
]
```
