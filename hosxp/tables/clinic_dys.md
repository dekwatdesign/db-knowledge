# `clinic_dys`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dys_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| clinic | char(3) | YES | MUL | NULL |  |  |
| dys_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| clinic | clinic | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dys_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
