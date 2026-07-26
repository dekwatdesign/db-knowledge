# `doctor_fee_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_fee_type_id | int(11) | NO | PRI | 0 |  |  |
| doctor_fee_type_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_fee_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "doctor_fee_type_id": 1,
    "doctor_fee_type_name": "ในเวลา",
    "hos_guid": null
  },
  {
    "doctor_fee_type_id": 2,
    "doctor_fee_type_name": "นอกเวลา",
    "hos_guid": null
  },
  {
    "doctor_fee_type_id": 3,
    "doctor_fee_type_name": "Part time",
    "hos_guid": null
  }
]
```
