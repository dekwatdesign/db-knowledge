# `monitor_criteria`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| monitor_criteria_id | int(11) | NO | PRI | 0 |  |  |
| monitor_criteria_name | varchar(150) | YES | MUL | NULL |  |  |
| monitor_criteria_sql | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| monitor_criteria_name | monitor_criteria_name | no | 1 |
| PRIMARY | monitor_criteria_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
