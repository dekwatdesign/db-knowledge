# `hospital_speciality_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_speciality_detail_id | int(11) | NO | PRI | 0 |  |  |
| hospital_speciality_id | int(11) | YES |  | NULL |  |  |
| hospital_profile_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hospital_profile_id | hospital_profile_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_speciality_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "hospital_speciality_detail_id": 1,
    "hospital_speciality_id": 1,
    "hospital_profile_id": 1,
    "hos_guid": "",
    "hospcode": null
  }
]
```
