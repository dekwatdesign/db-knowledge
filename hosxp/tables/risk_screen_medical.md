# `risk_screen_medical`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_medical_id | int(11) | NO | PRI | 0 |  |  |
| risk_head_id | int(11) | YES |  | NULL |  |  |
| risk_sub_group_id | int(11) | YES |  | NULL |  |  |
| result | varchar(1024) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_medical_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
