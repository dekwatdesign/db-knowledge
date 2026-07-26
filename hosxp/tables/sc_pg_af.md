# `sc_pg_af`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sc_pg_af_id | int(11) | NO | PRI | 0 |  |  |
| sc_pg_af_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sc_pg_af_name | sc_pg_af_name | yes | 1 |
| PRIMARY | sc_pg_af_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "sc_pg_af_id": 1,
    "sc_pg_af_name": "Clear",
    "hos_guid": null
  },
  {
    "sc_pg_af_id": 2,
    "sc_pg_af_name": "Mild",
    "hos_guid": null
  },
  {
    "sc_pg_af_id": 3,
    "sc_pg_af_name": "Moderate",
    "hos_guid": null
  },
  {
    "sc_pg_af_id": 4,
    "sc_pg_af_name": "Thick",
    "hos_guid": null
  }
]
```
