# `risk_screen_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_screen_lab_id | int(11) | NO | PRI | 0 |  |  |
| risk_screen_head_id | int(11) | YES |  | NULL |  |  |
| risk_lab_type_id | int(11) | YES |  | NULL |  |  |
| risk_screen_lab_result | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_screen_lab_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
