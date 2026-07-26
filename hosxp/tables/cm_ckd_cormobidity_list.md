# `cm_ckd_cormobidity_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_ckd_cormobidity_list_id | int(11) | NO | PRI | 0 |  |  |
| cm_ckd_id | int(11) | YES | MUL | NULL |  |  |
| cm_ckd_cormobidity_type_id | int(11) | YES |  | NULL |  |  |
| cm_ckd_cormobidity_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_ckd_id | cm_ckd_id | no | 1 |
| PRIMARY | cm_ckd_cormobidity_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
