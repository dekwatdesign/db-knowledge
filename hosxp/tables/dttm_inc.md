# `dttm_inc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dttm_inc_id | int(11) | NO | PRI | 0 |  |  |
| code | varchar(7) | YES | MUL | NULL |  |  |
| inc_code | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code | code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dttm_inc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
