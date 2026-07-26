# `pregnancy_abort_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pregnancy_abort_type_id | int(11) | NO | PRI | 0 |  |  |
| pregnancy_abort_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_pregnancy_abort_type_name | pregnancy_abort_type_name | yes | 1 |
| PRIMARY | pregnancy_abort_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "pregnancy_abort_type_id": 1,
    "pregnancy_abort_type_name": "แท้งเอง",
    "hos_guid": null
  },
  {
    "pregnancy_abort_type_id": 2,
    "pregnancy_abort_type_name": "แท้งเพื่อการรักษา",
    "hos_guid": null
  },
  {
    "pregnancy_abort_type_id": 3,
    "pregnancy_abort_type_name": "Criminal abortion",
    "hos_guid": null
  }
]
```
