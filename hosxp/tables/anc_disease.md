# `anc_disease`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| disease_id | int(11) | NO | PRI | 0 |  |  |
| disease_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| disease_name_unique | disease_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | disease_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
