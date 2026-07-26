# `opdscan_acc_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscan_acc_list_id | int(11) | NO | PRI | 0 |  |  |
| scan_id | int(11) | YES | MUL | NULL |  |  |
| opdscan_acc_type_id | int(11) | YES |  | NULL |  |  |
| acc_officer_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_key1 | scan_id | no | 1 |
| ix_key1 | opdscan_acc_type_id | no | 2 |
| ix_key1 | acc_officer_id | no | 3 |
| ix_key1_index | acc_officer_id | no | 1 |
| ix_key1_index | opdscan_acc_type_id | no | 2 |
| ix_key1_index | scan_id | no | 3 |
| ix_scan_id | scan_id | no | 1 |
| PRIMARY | opdscan_acc_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
