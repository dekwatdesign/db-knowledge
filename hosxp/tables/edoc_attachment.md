# `edoc_attachment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_attachment_id | int(11) | NO | PRI | 0 |  |  |
| edoc_id | int(11) | YES | MUL | NULL |  |  |
| edoc_attachment_name | varchar(250) | YES |  | NULL |  |  |
| edoc_attachment_data | longblob | YES |  | NULL |  |  |
| edoc_attachment_filename | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| edoc_id | edoc_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_attachment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
