# `village_allurement`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_allurement_id | int(11) | NO | PRI | 0 |  |  |
| village_allurement_name | varchar(250) | YES |  | NULL |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_id | village_id | no | 1 |
| PRIMARY | village_allurement_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
