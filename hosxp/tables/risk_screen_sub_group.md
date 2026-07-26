# `risk_screen_sub_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_sub_group_id | int(11) | NO | PRI | 0 |  |  |
| risk_group_id | int(11) | YES |  | NULL |  |  |
| risk_sub_group_th | varchar(120) | YES |  | NULL |  |  |
| risk_type_ed | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_sub_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
