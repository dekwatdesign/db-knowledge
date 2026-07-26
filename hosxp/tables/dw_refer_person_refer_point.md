# `dw_refer_person_refer_point`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_refer_point_id | int(11) | NO | PRI | 0 |  |  |
| person_refer_point_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_refer_point_name | person_refer_point_name | yes | 1 |
| PRIMARY | person_refer_point_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_refer_point_id": 1,
    "person_refer_point_name": "OPD",
    "hos_guid": null
  },
  {
    "person_refer_point_id": 2,
    "person_refer_point_name": "IPD",
    "hos_guid": null
  },
  {
    "person_refer_point_id": 3,
    "person_refer_point_name": "ER",
    "hos_guid": null
  }
]
```
