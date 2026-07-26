# `sc_pg_presenation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sc_pg_presentation_id | int(11) | NO | PRI | 0 |  |  |
| sc_pg_presentation_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sc_pg_presentation_name | sc_pg_presentation_name | yes | 1 |
| PRIMARY | sc_pg_presentation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "sc_pg_presentation_id": 1,
    "sc_pg_presentation_name": "Vertex",
    "hos_guid": null
  },
  {
    "sc_pg_presentation_id": 2,
    "sc_pg_presentation_name": "Breech",
    "hos_guid": null
  }
]
```
