# `report_access_time`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| report_access_time_id | int(11) | NO | PRI | 0 |  |  |
| report_access_rule_id | int(11) | YES |  | NULL |  |  |
| time_begin | time | YES |  | NULL |  |  |
| time_end | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | report_access_time_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
