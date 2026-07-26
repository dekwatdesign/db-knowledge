# `dt_facialpain_his_part1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_facialpain_his_p1_id | int(11) | NO | PRI | 0 |  |  |
| dt_facialpain_his_p1_chk | text | YES |  | NULL |  |  |
| dt_facialpain_his_p1_otherstxt | varchar(100) | YES |  | NULL |  |  |
| dt_facialpain_his_p1_cheiftxt | text | YES |  | NULL |  |  |
| dt_facialpain_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_facialpain_main1 | dt_facialpain_main_id | no | 1 |
| PRIMARY | dt_facialpain_his_p1_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
