# `person_ncd_fbs_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_ncd_fbs_type_id | int(11) | NO | PRI | 0 |  |  |
| person_ncd_fbs_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_ncd_fbs_type_name | person_ncd_fbs_type_name | yes | 1 |
| PRIMARY | person_ncd_fbs_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_ncd_fbs_type_id": 1,
    "person_ncd_fbs_type_name": "ต่ำกว่า 100",
    "hos_guid": null
  },
  {
    "person_ncd_fbs_type_id": 2,
    "person_ncd_fbs_type_name": "100 - 125",
    "hos_guid": null
  },
  {
    "person_ncd_fbs_type_id": 3,
    "person_ncd_fbs_type_name": "126 ขึ้นไป",
    "hos_guid": null
  }
]
```
