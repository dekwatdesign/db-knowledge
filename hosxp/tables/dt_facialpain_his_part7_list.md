# `dt_facialpain_his_part7_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_facialpain_his_p7_list_id | int(11) | NO | PRI | 0 |  |  |
| dt_facialpain_his_p7_id | int(11) | YES | MUL | NULL |  |  |
| dt_facialpain_his_p7_list_clin | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_his_p7_list_mont | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_his_p7_list_treat | text | YES |  | NULL |  |  |
| dt_facialpain_his_p7_list_resu | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_his_p7_list_unit | varchar(50) | YES |  | NULL |  |  |
| dt_facialpain_main_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_facialpain_his_cv9 | dt_facialpain_his_p7_id | no | 1 |
| PRIMARY | dt_facialpain_his_p7_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
