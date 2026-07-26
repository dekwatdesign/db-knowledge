# `dxa_cc_pdf`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_cc_pdf_id | int(11) | NO | PRI | 0 |  |  |
| dxa_cc_id | int(11) | YES | MUL | NULL |  |  |
| pdf_data | longblob | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dxa_cc_id | dxa_cc_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dxa_cc_pdf_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
