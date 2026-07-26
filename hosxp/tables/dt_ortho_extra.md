# `dt_ortho_extra`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_ortho_extra_id | int(11) | NO | PRI | 0 |  |  |
| dt_otho_facial_type_id | int(11) | YES |  | NULL |  |  |
| dt_otho_facial_profile_id | int(11) | YES |  | NULL |  |  |
| dt_ortho_extra_fasym_chk | varchar(3) | YES |  | NULL |  |  |
| dt_ortho_extra_fasym_note | varchar(100) | YES |  | NULL |  |  |
| dt_ortho_extra_lip_chk | varchar(20) | YES |  | NULL |  |  |
| dt_ortho_extra_lip_note | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_extra_lipline_chk | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_extra_res_chk | varchar(20) | YES |  | NULL |  |  |
| dt_ortho_extra_lis_chk | varchar(3) | YES |  | NULL |  |  |
| dt_ortho_extra_habit_chk | varchar(3) | YES |  | NULL |  |  |
| dt_ortho_extra_habit_note | varchar(100) | YES |  | NULL |  |  |
| dt_ortho_extra_tmj_lt | text | YES |  | NULL |  |  |
| dt_ortho_extra_tmj_rt | text | YES |  | NULL |  |  |
| dt_ortho_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_ortho_main8 | dt_ortho_main_id | no | 1 |
| PRIMARY | dt_ortho_extra_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
