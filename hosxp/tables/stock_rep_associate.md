# `stock_rep_associate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_rep_associate_id | int(11) | NO | PRI | 0 |  |  |
| stock_rep_associate_type_id | int(11) | YES | MUL | NULL |  |  |
| stock_representative_id | int(11) | YES | MUL | NULL |  |  |
| key_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ass_unique | stock_representative_id | yes | 1 |
| ix_ass_unique | stock_rep_associate_type_id | yes | 2 |
| ix_ass_unique | key_id | yes | 3 |
| ix_ass_unique_index | key_id | yes | 1 |
| ix_ass_unique_index | stock_rep_associate_type_id | yes | 2 |
| ix_ass_unique_index | stock_representative_id | yes | 3 |
| ix_type_key | stock_rep_associate_type_id | no | 1 |
| ix_type_key | key_id | no | 2 |
| ix_type_key_index | key_id | no | 1 |
| ix_type_key_index | stock_rep_associate_type_id | no | 2 |
| PRIMARY | stock_rep_associate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
