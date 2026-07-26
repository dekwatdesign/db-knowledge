# `pcu_age_alert`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pcu_age_alert_id | int(11) | NO | PRI | 0 |  |  |
| min_age | int(11) | YES | MUL | NULL |  |  |
| max_age | int(11) | YES |  | NULL |  |  |
| alert_text | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_min_age | min_age | no | 1 |
| PRIMARY | pcu_age_alert_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
