# `opdscan_depcode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscan_depcode_id | int(11) | NO | PRI | 0 |  |  |
| scan_id | int(11) | YES | MUL | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| process_ok | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_scan_id | scan_id | no | 1 |
| PRIMARY | opdscan_depcode_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
