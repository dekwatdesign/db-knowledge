# `cupsmoney`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| docno | varchar(150) | YES |  | NULL |  |  |
| docdate | datetime | YES |  | NULL |  |  |
| docnote | varchar(150) | YES |  | NULL |  |  |
| doctype | char(1) | YES |  | NULL |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| amount | double(22,3) | YES |  | NULL |  |  |
| moneytype | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| depcode_docno_doctype_unique | depcode | yes | 1 |
| depcode_docno_doctype_unique | docno | yes | 2 |
| depcode_docno_doctype_unique | doctype | yes | 3 |
| depcode_docno_doctype_unique | docdate | yes | 4 |
| ix_depcode_docno_doctype_unique | depcode | yes | 1 |
| ix_depcode_docno_doctype_unique | docdate | yes | 2 |
| ix_depcode_docno_doctype_unique | docno | yes | 3 |
| ix_depcode_docno_doctype_unique | doctype | yes | 4 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
