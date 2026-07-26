# `operation_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| position_id | int(11) | NO | PRI | 0 |  |  |
| position_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| is_icd9_doctor | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| position_name | position_name | no | 1 |
| PRIMARY | position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "position_id": 1,
    "position_name": "ผู้ทำการผ่าตัด",
    "hos_guid": null,
    "is_icd9_doctor": null
  },
  {
    "position_id": 2,
    "position_name": "Instrument Nurse",
    "hos_guid": null,
    "is_icd9_doctor": null
  },
  {
    "position_id": 3,
    "position_name": "Circultate Nurse",
    "hos_guid": null,
    "is_icd9_doctor": null
  },
  {
    "position_id": 4,
    "position_name": "Swab Count Nurse",
    "hos_guid": null,
    "is_icd9_doctor": null
  },
  {
    "position_id": 5,
    "position_name": "Scrub Nurse",
    "hos_guid": null,
    "is_icd9_doctor": null
  }
]
```
