# `ipd_nurse_ass_adls_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_ass_adls_list_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| ipd_nurse_ass_adls_scale_id | int(11) | YES | MUL | NULL |  |  |
| ipd_nurse_ass_adls_act_id | int(11) | YES | MUL | NULL |  |  |
| ipd_nurse_ass_adls_value_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idxipd_nurse_ass_adls_list_act | ipd_nurse_ass_adls_act_id | no | 1 |
| ix_idxipd_nurse_ass_adls_list_scale | ipd_nurse_ass_adls_scale_id | no | 1 |
| ix_idxipd_nurse_ass_adls_list_value | ipd_nurse_ass_adls_value_id | no | 1 |
| PRIMARY | ipd_nurse_ass_adls_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
