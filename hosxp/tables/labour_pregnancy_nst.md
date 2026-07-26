# `labour_pregnancy_nst`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pregnancy_nst_id | int(11) | NO | PRI | 0 |  |  |
| pregnancy_nst_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_pregnancy_nst_name | pregnancy_nst_name | yes | 1 |
| PRIMARY | pregnancy_nst_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "pregnancy_nst_id": 1,
    "pregnancy_nst_name": "Rea.",
    "hos_guid": "{1C4C612C-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "pregnancy_nst_id": 2,
    "pregnancy_nst_name": "Non.",
    "hos_guid": "{1C4C65CE-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
