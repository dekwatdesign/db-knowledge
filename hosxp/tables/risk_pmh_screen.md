# `risk_pmh_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_pmh_screen_id | int(11) | NO | PRI | 0 |  |  |
| risk_screen_head_id | int(11) | YES |  | NULL |  |  |
| risk_pmh_id | int(11) | YES |  | NULL |  |  |
| risk_pmh_choice_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_pmh_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
