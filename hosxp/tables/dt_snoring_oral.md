# `dt_snoring_oral`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_snoring_oral_id | int(11) | NO | PRI | 0 |  |  |
| dt_snoring_oral_buccal_chk | varchar(255) | YES |  | NULL |  |  |
| dt_snoring_oral_tongue_chk | varchar(11) | YES |  | NULL |  |  |
| dt_snoring_oral_mallam_chk | char(10) | YES |  | NULL |  |  |
| dt_snoring_oral_othersl_note | text | YES |  | NULL |  |  |
| dt_snoring_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_snoring_oral_class_chk | varchar(11) | YES |  | NULL |  |  |
| dt_snoring_oral_uvalar_chk | varchar(20) | YES |  | NULL |  |  |
| dt_snoring_oral_fried_chk | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_oral_tonsil_chk | varchar(20) | YES |  | NULL |  |  |
| dt_snoring_oral_bony_chk | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_snoring_main14 | dt_snoring_main_id | no | 1 |
| PRIMARY | dt_snoring_oral_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
