# `ems_emergency_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_emergency_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_emergency_type_name | varchar(100) | YES | UNI | NULL |  |  |
| ems_emergency_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_emergency_type_name | ems_emergency_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_emergency_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ems_emergency_type_id": 1,
    "ems_emergency_type_name": "บาดเจ็บ/อุบัติเหตุ",
    "ems_emergency_type_code": null,
    "hos_guid": null
  },
  {
    "ems_emergency_type_id": 2,
    "ems_emergency_type_name": "ป่วยฉุกเฉิน",
    "ems_emergency_type_code": null,
    "hos_guid": null
  }
]
```
