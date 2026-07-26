# `drugitems_acc_disc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_acc_disc_type_id | int(11) | NO | PRI | 0 |  |  |
| drugitems_acc_disc_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drugitems_acc_disc_type_name | drugitems_acc_disc_type_name | yes | 1 |
| PRIMARY | drugitems_acc_disc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "drugitems_acc_disc_type_id": 4,
    "drugitems_acc_disc_type_name": "ถูกถอนทะเบียน"
  },
  {
    "drugitems_acc_disc_type_id": 1,
    "drugitems_acc_disc_type_name": "มติที่ประชุมให้ออก"
  },
  {
    "drugitems_acc_disc_type_id": 3,
    "drugitems_acc_disc_type_name": "เลิกจำหน่าย"
  },
  {
    "drugitems_acc_disc_type_id": 2,
    "drugitems_acc_disc_type_name": "เลิกผลิต"
  }
]
```
