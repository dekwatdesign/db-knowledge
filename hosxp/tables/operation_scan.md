# `operation_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| scan_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| scan_title | varchar(150) | YES | MUL | NULL |  |  |
| scan_picture | longblob | YES |  | NULL |  |  |
| page_no | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| operation_id | operation_id | no | 1 |
| PRIMARY | scan_id | yes | 1 |
| scan_title | scan_title | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
