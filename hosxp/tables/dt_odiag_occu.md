# `dt_odiag_occu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_odiag_occu_id | int(11) | NO | PRI | 0 |  |  |
| dt_odiag_occu_molar_right | int(11) | YES |  | NULL |  |  |
| dt_odiag_occu_molar_left | int(11) | YES |  | NULL |  |  |
| dt_odiag_occu_cannine_right | int(11) | YES |  | NULL |  |  |
| dt_odiag_occu_cannine_left | int(11) | YES |  | NULL |  |  |
| dt_odiag_occu_needed_chk | char(1) | YES |  | NULL |  |  |
| dt_odiag_occu_work | char(1) | YES |  | NULL |  |  |
| dt_odiag_occu_work_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_occu_non_work | char(1) | YES |  | NULL |  |  |
| dt_odiag_occu_non_work_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_occu_protrusive | char(1) | YES |  | NULL |  |  |
| dt_odiag_occu_protrusive_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_occu_premature | char(1) | YES |  | NULL |  |  |
| dt_odiag_occu_premature_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_occu_traumar | char(1) | YES |  | NULL |  |  |
| dt_odiag_occu_traumar_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_occu_other | char(1) | YES |  | NULL |  |  |
| dt_odiag_occu_other_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_occu_vertical | double(18,1) | YES |  | NULL |  |  |
| dt_odiag_occu_horizontal | double(18,1) | YES |  | NULL |  |  |
| dt_odiag_occu_addit_chk | char(1) | YES |  | NULL |  |  |
| dt_odiag_occu_addit_note | text | YES |  | NULL |  |  |
| dt_odiag_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_odiag4 | dt_odiag_main_id | no | 1 |
| PRIMARY | dt_odiag_occu_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
