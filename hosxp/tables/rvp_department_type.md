# `rvp_department_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_department_type_id | int(11) | NO | PRI | 0 |  |  |
| rvp_department_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_rvp_department_type_name | rvp_department_type_name | yes | 1 |
| PRIMARY | rvp_department_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "rvp_department_type_id": 1,
    "rvp_department_type_name": "OPD",
    "hos_guid": null
  },
  {
    "rvp_department_type_id": 2,
    "rvp_department_type_name": "IPD",
    "hos_guid": null
  }
]
```
