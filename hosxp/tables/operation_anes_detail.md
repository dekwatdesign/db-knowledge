# `operation_anes_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_id | int(11) | NO | PRI | 0 |  |  |
| pre_op_problem | varchar(250) | YES |  | NULL |  |  |
| asa_id | int(11) | YES |  | NULL |  |  |
| technique_id | int(11) | YES |  | NULL |  |  |
| asa_no | double(15,3) | YES |  | NULL |  |  |
| asa_depth | double(15,3) | YES |  | NULL |  |  |
| lv_grade | int(11) | YES |  | NULL |  |  |
| airway_problem | varchar(250) | YES |  | NULL |  |  |
| agent | varchar(250) | YES |  | NULL |  |  |
| monitor | varchar(250) | YES |  | NULL |  |  |
| complication | varchar(250) | YES |  | NULL |  |  |
| anesthesiologist | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| lv_grade_sub | char(1) | YES |  | NULL |  |  |
| techique2_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | operation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
