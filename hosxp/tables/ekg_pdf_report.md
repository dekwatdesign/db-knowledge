# `ekg_pdf_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ekg_pdf_report_id | int(11) | NO | PRI | 0 |  |  |
| ekg_request_id | int(11) | YES | MUL | NULL |  |  |
| ekg_pdf_report_updatedatetime | datetime | YES |  | NULL |  |  |
| ekg_pdf_report_blob | longblob | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ekg_request_id | ekg_request_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ekg_pdf_report_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
