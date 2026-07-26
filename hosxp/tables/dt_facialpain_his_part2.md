# `dt_facialpain_his_part2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_facialpain_his_p2_id | int(11) | NO | PRI | 0 |  |  |
| dt_facialpain_his_p2_a | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_his_p2_b | varchar(20) | YES |  | NULL |  |  |
| dt_facialpain_his_p2_c_chk | text | YES |  | NULL |  |  |
| dt_facialpain_his_p2_c_others | char(1) | YES |  | NULL |  |  |
| dt_facialpain_his_p2_c_txt | varchar(200) | YES |  | NULL |  |  |
| dt_facialpain_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_facialpain_his_p2_a1_data | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a1_doc | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a2_data | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a2_doc | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a3_data | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a3_doc | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a4_data | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a4_doc | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a5_data | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a5_doc | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a6_data | longblob | YES |  | NULL |  |  |
| dt_facialpain_his_p2_a6_doc | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_facialpain_main2 | dt_facialpain_main_id | no | 1 |
| PRIMARY | dt_facialpain_his_p2_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
