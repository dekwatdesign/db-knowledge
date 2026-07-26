# `ckup_tooth`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_tooth_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| ckup_medical_visit_id | int(11) | YES | MUL | NULL |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| ckup_tooth_decayed | char(1) | YES |  | NULL |  |  |
| ckup_tooth_decayed_note | varchar(250) | YES |  | NULL |  |  |
| ckup_tooth_limestone | char(1) | YES |  | NULL |  |  |
| ckup_tooth_limestone_note | varchar(250) | YES |  | NULL |  |  |
| ckup_tooth_gingivitis | char(1) | YES |  | NULL |  |  |
| ckup_tooth_gingivitis_note | varchar(250) | YES |  | NULL |  |  |
| ckup_tooth_impaction | char(1) | YES |  | NULL |  |  |
| ckup_tooth_impaction_note | varchar(250) | YES |  | NULL |  |  |
| ckup_tooth_note | varchar(250) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |
| ckup_tooth_fillteeth | char(1) | YES |  | NULL |  |  |
| ckup_tooth_fillteech_qty | int(11) | YES |  | NULL |  |  |
| ckup_tooth_removal | char(1) | YES |  | NULL |  |  |
| ckup_tooth_removal_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_medical_visit_id | ckup_medical_visit_id | no | 1 |
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| PRIMARY | ckup_tooth_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
