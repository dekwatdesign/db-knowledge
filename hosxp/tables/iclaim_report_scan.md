# `iclaim_report_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_report_scan_id | int(11) | NO | PRI | 0 |  |  |
| scan_id | int(11) | YES |  | NULL |  |  |
| iclaim_report_mapping_type_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(13) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| iclaim_report_attach_doc_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | iclaim_report_scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
