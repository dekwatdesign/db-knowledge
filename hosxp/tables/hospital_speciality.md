# `hospital_speciality`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_speciality_id | int(11) | NO | PRI | 0 |  |  |
| hospital_speciality_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hospital_speciality_name | hospital_speciality_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_speciality_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "hospital_speciality_id": 1,
    "hospital_speciality_name": "ผู้ป่วยทั่วไป",
    "hos_guid": "{51F65E1F-E5D8-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  }
]
```
