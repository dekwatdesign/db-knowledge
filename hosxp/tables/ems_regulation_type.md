# `ems_regulation_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_regulation_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_regulation_type_name | varchar(200) | YES | UNI | NULL |  |  |
| ems_regulation_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_regulation_type_name | ems_regulation_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_regulation_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ems_regulation_type_id": 1,
    "ems_regulation_type_name": "สามารถรักษาได้",
    "ems_regulation_type_code": null,
    "hos_guid": null
  },
  {
    "ems_regulation_type_id": 2,
    "ems_regulation_type_name": "อยู่ใกล้",
    "ems_regulation_type_code": null,
    "hos_guid": null
  },
  {
    "ems_regulation_type_id": 3,
    "ems_regulation_type_name": "มีหลักประกัน",
    "ems_regulation_type_code": null,
    "hos_guid": null
  },
  {
    "ems_regulation_type_id": 4,
    "ems_regulation_type_name": "ผู้ป่วยเก่า",
    "ems_regulation_type_code": null,
    "hos_guid": null
  },
  {
    "ems_regulation_type_id": 5,
    "ems_regulation_type_name": "เป็นความประสงค์",
    "ems_regulation_type_code": null,
    "hos_guid": null
  }
]
```
