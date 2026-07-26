# `dt_facialpain_his_part6`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_facialpain_his_p6_id | int(11) | NO | PRI | 0 |  |  |
| dt_facialpain_his_p6_18_ck | text | YES |  | NULL |  |  |
| dt_facialpain_his_p6_18_tx | varchar(255) | YES |  | NULL |  |  |
| dt_facialpain_his_p6_19_ck | text | YES |  | NULL |  |  |
| dt_facialpain_his_p6_19_tx | varchar(255) | YES |  | NULL |  |  |
| dt_facialpain_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_facialpain_his_p6_19_rl | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_facialpain_main6 | dt_facialpain_main_id | no | 1 |
| PRIMARY | dt_facialpain_his_p6_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
