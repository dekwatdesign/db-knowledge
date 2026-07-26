# `er_nursing_record`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_activity_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| nursing_diag_id | int(11) | YES | MUL | NULL |  |  |
| nursing_problem | varchar(250) | YES |  | NULL |  |  |
| nursing_outcome | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| activity_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| nursing_diag_id | nursing_diag_id | no | 1 |
| PRIMARY | er_activity_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
