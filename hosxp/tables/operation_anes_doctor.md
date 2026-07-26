# `operation_anes_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_doctor_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES |  | NULL |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| operation_anes_doctor_position_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| anes_id | int(11) | YES | MUL | NULL |  |  |
| anes_dct_pos_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anes_id | anes_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | operation_anes_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
