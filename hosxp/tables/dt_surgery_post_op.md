# `dt_surgery_post_op`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_post_op_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_post_op_date | date | YES |  | NULL |  |  |
| dt_surgery_post_op_comp_occur | date | YES |  | NULL |  |  |
| dt_surgery_post_op_bleed | text | YES |  | NULL |  |  |
| dt_surgery_post_op_bleed_chk | char(1) | YES |  | NULL |  |  |
| dt_surgery_post_op_infec | text | YES |  | NULL |  |  |
| dt_surgery_post_op_infec_chk | char(1) | YES |  | NULL |  |  |
| dt_surgery_post_op_pares | text | YES |  | NULL |  |  |
| dt_surgery_post_op_pares_chk | char(1) | YES |  | NULL |  |  |
| dt_surgery_post_op_other | text | YES |  | NULL |  |  |
| dt_surgery_post_op_other_chk | char(255) | YES |  | NULL |  |  |
| dt_surgery_post_tx | longtext | YES |  | NULL |  |  |
| operation_item_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_cc | text | YES |  | NULL |  |  |
| dt_surgery_history | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_surgery_post_op_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
