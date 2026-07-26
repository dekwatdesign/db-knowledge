# `printserver_document`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| printserver_document_id | int(11) | NO | PRI | 0 |  |  |
| print_from_computer | varchar(150) | YES |  | NULL |  |  |
| print_datetime | datetime | YES |  | NULL |  |  |
| document | longblob | YES |  | NULL |  |  |
| print_on | varchar(150) | YES |  | NULL |  |  |
| print_ok | char(1) | YES | MUL | NULL |  |  |
| document_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_printok | print_ok | no | 1 |
| PRIMARY | printserver_document_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
