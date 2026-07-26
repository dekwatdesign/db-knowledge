# `edoc_out_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_out_scan_id | int(11) | NO | PRI | 0 |  |  |
| edoc_out_id | int(11) | YES | MUL | NULL |  |  |
| edoc_out_page_no | int(11) | YES |  | NULL |  |  |
| edoc_out_scan_image | longblob | YES |  | NULL |  |  |
| edoc_out_scan_type | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_edoc_id | edoc_out_id | no | 1 |
| PRIMARY | edoc_out_scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
