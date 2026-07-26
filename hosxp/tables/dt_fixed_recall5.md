# `dt_fixed_recall5`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_fixed_recall5_id | int(11) | NO | PRI | 0 |  |  |
| dt_fixed_recall5_grp1_chk | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_recall5_note1 | text | YES |  | NULL |  |  |
| dt_fixed_recall5_occ_chk | varchar(30) | YES |  | NULL |  |  |
| dt_fixed_occusal_id1 | int(11) | YES |  | NULL |  |  |
| dt_fixed_occusal_id2 | int(11) | YES |  | NULL |  |  |
| dt_fixed_recall5_angle_chk | varchar(30) | YES |  | NULL |  |  |
| dt_fixed_recall5_clsss_id3 | int(11) | YES |  | NULL |  |  |
| dt_fixed_recall5_clsss_id4 | int(11) | YES |  | NULL |  |  |
| dt_fixed_recall5_canine_chk | varchar(30) | YES |  | NULL |  |  |
| dt_fixed_recall5_clsss_id5 | int(11) | YES |  | NULL |  |  |
| dt_fixed_recall5_clsss_id6 | int(11) | YES |  | NULL |  |  |
| dt_fixed_recall5_un_chk | varchar(20) | YES |  | NULL |  |  |
| dt_fixed_recall5_clsss_id7 | int(11) | YES |  | NULL |  |  |
| dt_fixed_recall5_clsss_id8 | int(11) | YES |  | NULL |  |  |
| dt_fixed_recall5_grp2_chk | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_recall5_pre_note | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_recall5_inter_note | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_recall5_orther_note | text | YES |  | NULL |  |  |
| dt_fixed_recall_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_fixed_main_id | dt_fixed_recall_id | no | 1 |
| PRIMARY | dt_fixed_recall5_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
