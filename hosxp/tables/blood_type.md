# `blood_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blood_type_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | blood_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "blood_type_id": 1,
    "name": "PCR",
    "hos_guid": null
  },
  {
    "blood_type_id": 2,
    "name": "FFP",
    "hos_guid": null
  },
  {
    "blood_type_id": 3,
    "name": "PH cone",
    "hos_guid": null
  },
  {
    "blood_type_id": 4,
    "name": "WB",
    "hos_guid": null
  },
  {
    "blood_type_id": 5,
    "name": "LPB",
    "hos_guid": null
  }
]
```
