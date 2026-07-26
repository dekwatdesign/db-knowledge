# `dt_snoring_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_snoring_history_id | int(11) | NO | PRI | 0 |  |  |
| dt_snoring_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_snoring_his_ahi | double(15,2) | YES |  | NULL |  |  |
| dt_snoring_his_rdi | double(15,2) | YES |  | NULL |  |  |
| dt_snoring_his_sat | double(15,2) | YES |  | NULL |  |  |
| dt_snoring_his_note | text | YES |  | NULL |  |  |
| dt_snoring_his_sat02 | double(15,2) | YES |  | NULL |  |  |
| dt_snoring_his_sat90 | double(15,2) | YES |  | NULL |  |  |
| dt_snoring_his_su_ahi | double(15,2) | YES |  | NULL |  |  |
| dt_snoring_his_non_ahi | double(15,2) | YES |  | NULL |  |  |
| dt_snoring_his_rem_ahi | double(15,2) | YES |  | NULL |  |  |
| dt_snoring_his_nre_ahi | double(15,2) | YES |  | NULL |  |  |
| dt_snoring_his_nore_snd | double(30,2) | YES |  | NULL |  |  |
| dt_snoring_his_nc | double(15,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_snoring_main16 | dt_snoring_main_id | no | 1 |
| PRIMARY | dt_snoring_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
