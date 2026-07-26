# `blb_auto_control`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_auto_control_id | int(11) | NO | PRI | 0 |  |  |
| blb_auto_control_sample | varchar(255) | YES |  | NULL |  |  |
| blb_auto_control_rt | varchar(20) | YES |  | NULL |  |  |
| blb_auto_control_37c | varchar(20) | YES |  | NULL |  |  |
| blb_auto_control_iat | varchar(20) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_transfusion_react_id | int(11) | YES | MUL | NULL |  |  |
| blb_auto_control_gel | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refblb_transfusion_react4 | blb_transfusion_react_id | no | 1 |
| PRIMARY | blb_auto_control_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
