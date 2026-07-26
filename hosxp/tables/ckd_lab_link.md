# `ckd_lab_link`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckd_lab_link_id | int(11) | NO | PRI | NULL |  |  |
| ckd_lab_code_id | int(11) | NO | MUL | NULL |  |  |
| lab_items_code | int(11) | NO |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_ckd_lab_link_unique | ckd_lab_code_id | yes | 1 |
| ix_idx_ckd_lab_link_unique | lab_items_code | yes | 2 |
| ix_idx_hos_guid | hos_guid | no | 1 |
| ix_idx_lab_code_id | ckd_lab_code_id | no | 1 |
| PRIMARY | ckd_lab_link_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
