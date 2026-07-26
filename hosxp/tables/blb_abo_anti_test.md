# `blb_abo_anti_test`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_abo_anti_test_id | int(11) | NO | PRI | 0 |  |  |
| blb_sample_test | varchar(255) | YES |  | NULL |  |  |
| blb_anti_a | varchar(20) | YES |  | NULL |  |  |
| blb_anti_b | varchar(20) | YES |  | NULL |  |  |
| blb_anti_ab | varchar(20) | YES |  | NULL |  |  |
| blb_anti_d | varchar(20) | YES |  | NULL |  |  |
| blb_a_cell | varchar(20) | YES |  | NULL |  |  |
| blb_b_cell | varchar(20) | YES |  | NULL |  |  |
| blb_rt | varchar(20) | YES |  | NULL |  |  |
| blb_37c | varchar(20) | YES |  | NULL |  |  |
| blb_iat | varchar(20) | YES |  | NULL |  |  |
| blb_abo_group | varchar(20) | YES |  | NULL |  |  |
| blb_rh_group | varchar(20) | YES |  | NULL |  |  |
| blb_dat | varchar(20) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_transfusion_react_id | int(11) | YES | MUL | NULL |  |  |
| blb_gel | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refblb_transfusion_react2 | blb_transfusion_react_id | no | 1 |
| PRIMARY | blb_abo_anti_test_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
