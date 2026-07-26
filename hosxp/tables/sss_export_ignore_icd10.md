# `sss_export_ignore_icd10`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sss_export_ignore_icd10_id | int(11) | NO | PRI | 0 |  |  |
| sss_export_ignore_icd10_begin | varchar(10) | YES |  | NULL |  |  |
| sss_export_ignore_icd10_end | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | sss_export_ignore_icd10_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
