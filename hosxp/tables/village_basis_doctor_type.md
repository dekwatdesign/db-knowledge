# `village_basis_doctor_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_basis_doctor_type_id | int(11) | NO | PRI | 0 |  |  |
| village_basis_doctor_tye_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_basis_doctor_tye_name | village_basis_doctor_tye_name | yes | 1 |
| PRIMARY | village_basis_doctor_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "village_basis_doctor_type_id": 1,
    "village_basis_doctor_tye_name": "แพทย์แผนไทย",
    "hos_guid": null
  },
  {
    "village_basis_doctor_type_id": 2,
    "village_basis_doctor_tye_name": "แพทย์พื้นบ้าน",
    "hos_guid": null
  },
  {
    "village_basis_doctor_type_id": 3,
    "village_basis_doctor_tye_name": "แพทย์ทางเลือก",
    "hos_guid": null
  }
]
```
