# `report_access_rule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| report_access_rule_id | int(11) | NO | PRI | 0 |  |  |
| report_name | varchar(250) | YES | MUL | NULL |  |  |
| access_type | varchar(20) | YES |  | NULL |  |  |
| strict_time | char(1) | YES |  | NULL |  |  |
| user_name | varchar(100) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_report_name | report_name | no | 1 |
| ix_username | user_name | no | 1 |
| PRIMARY | report_access_rule_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
