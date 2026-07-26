# `patient_charge_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_charge_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_charge_type_name | varchar(200) | YES | UNI | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_charge_type_name | patient_charge_type_name | yes | 1 |
| PRIMARY | patient_charge_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "patient_charge_type_id": 1,
    "patient_charge_type_name": "ค่าธรรมเนียมทำบัตรใหม่",
    "icode": null,
    "price": null
  }
]
```
