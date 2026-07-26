# `ipd_doctor_order_tpl_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_tpl_type_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_tpl_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_doctor_order_tpl_type_name | ipd_doctor_order_tpl_type_name | yes | 1 |
| PRIMARY | ipd_doctor_order_tpl_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ipd_doctor_order_tpl_type_id": 1,
    "ipd_doctor_order_tpl_type_name": "ER"
  },
  {
    "ipd_doctor_order_tpl_type_id": 2,
    "ipd_doctor_order_tpl_type_name": "SUR"
  },
  {
    "ipd_doctor_order_tpl_type_id": 3,
    "ipd_doctor_order_tpl_type_name": "ICU"
  },
  {
    "ipd_doctor_order_tpl_type_id": 4,
    "ipd_doctor_order_tpl_type_name": "CCU"
  }
]
```
