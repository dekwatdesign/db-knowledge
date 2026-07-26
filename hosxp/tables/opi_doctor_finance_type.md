# `opi_doctor_finance_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_doctor_finance_type_id | int(11) | NO | PRI | 0 |  |  |
| opi_doctor_finance_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_doctor_finance_type_name | opi_doctor_finance_type_name | yes | 1 |
| PRIMARY | opi_doctor_finance_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "opi_doctor_finance_type_id": 1,
    "opi_doctor_finance_type_name": "ทำรายการทั้งหมด"
  },
  {
    "opi_doctor_finance_type_id": 2,
    "opi_doctor_finance_type_name": "แยกทำรายการ"
  }
]
```
