# `dt_prevent_option`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prevent_option_id | int(11) | NO | PRI | 0 |  |  |
| dt_prevent_option_infor_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_infor_note | text | YES |  | NULL |  |  |
| dt_prevent_option_oral_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_brush_chk | varchar(20) | YES |  | NULL |  |  |
| dt_prevent_option_brush_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_aid_chk | varchar(20) | YES |  | NULL |  |  |
| dt_prevent_option_aid_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_diet_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_diet_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_gel_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_gel_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_mount_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_mount_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_tooth_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_tooth_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_pfs_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_pfs_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_prr_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_prr_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_caries_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_caries_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_filling_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_filling_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_scal_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_scal_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_observe_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_observe_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_recall_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_recall_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_option_other_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_option_other_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prevent24 | dt_prevent_id | no | 1 |
| PRIMARY | dt_prevent_option_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
