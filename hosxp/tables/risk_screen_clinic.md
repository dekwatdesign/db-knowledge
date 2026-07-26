# `risk_screen_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_screen_clinic_id | int(11) | NO | PRI | 0 |  |  |
| risk_screen_head_id | int(11) | YES |  | NULL |  |  |
| risk_clinic_id | int(11) | YES |  | NULL |  |  |
| risk_screen_check | char(1) | YES |  | NULL |  |  |
| risk_screen_relation_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_screen_clinic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
