# `edoc_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_scan_id | int(11) | NO | PRI | 0 |  |  |
| edoc_id | int(11) | YES | MUL | NULL |  |  |
| edoc_page_no | int(11) | YES |  | NULL |  |  |
| edoc_scan_image | longblob | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| edoc_scan_type | varchar(20) | YES |  | NULL |  |  |
| edoc_filename | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| edoc_id | edoc_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
