# `eprescription_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| eprescription_type_id | int(11) | NO | PRI | 0 |  |  |
| eprescription_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_eprescription_type_name | eprescription_type_name | yes | 1 |
| PRIMARY | eprescription_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "eprescription_type_id": 1,
    "eprescription_type_name": "ใบสั่งยา ไม่ระบุร้านขายยา"
  },
  {
    "eprescription_type_id": 2,
    "eprescription_type_name": "ใบสั่งยา Model 2 สปสช."
  },
  {
    "eprescription_type_id": 3,
    "eprescription_type_name": "ใบสั่งยา Model 3 สปสช."
  },
  {
    "eprescription_type_id": 4,
    "eprescription_type_name": "ใบสั่งยา Model 1 สปสช."
  }
]
```
