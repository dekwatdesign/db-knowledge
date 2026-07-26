# `edoc_work_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_work_scan_id | int(11) | NO | PRI | 0 |  |  |
| edoc_work_id | int(11) | YES | MUL | NULL |  |  |
| edoc_work_page_no | int(11) | YES |  | NULL |  |  |
| edoc_work_scan_image | longblob | YES |  | NULL |  |  |
| edoc_work_scan_type | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_edoc_id | edoc_work_id | no | 1 |
| PRIMARY | edoc_work_scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
