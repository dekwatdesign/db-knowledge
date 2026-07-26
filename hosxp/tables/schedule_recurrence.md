# `schedule_recurrence`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| recurrence_count | int(11) | YES |  | NULL |  |  |
| daynumber | int(11) | YES |  | NULL |  |  |
| daytype | int(11) | YES |  | NULL |  |  |
| finish | datetime | YES |  | NULL |  |  |
| occurdays | varchar(150) | YES |  | NULL |  |  |
| periodicity | int(11) | YES |  | NULL |  |  |
| recurrence | int(11) | YES |  | NULL |  |  |
| start | datetime | YES |  | NULL |  |  |
| yearperiodicity | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
