# `sc_pg_membrane`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sc_pg_membrane_id | int(11) | NO | PRI | 0 |  |  |
| sc_pg_membrane_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sc_pg_membrane_name | sc_pg_membrane_name | yes | 1 |
| PRIMARY | sc_pg_membrane_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "sc_pg_membrane_id": 1,
    "sc_pg_membrane_name": "MI",
    "hos_guid": null
  },
  {
    "sc_pg_membrane_id": 2,
    "sc_pg_membrane_name": "ML",
    "hos_guid": null
  },
  {
    "sc_pg_membrane_id": 3,
    "sc_pg_membrane_name": "MR",
    "hos_guid": null
  }
]
```
