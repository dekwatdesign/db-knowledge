# `nursing_diagnosis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nursing_diag_id | int(11) | NO | PRI | 0 |  |  |
| diagnosis_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_diagname | diagnosis_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | nursing_diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
