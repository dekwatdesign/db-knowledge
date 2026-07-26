# `handicapped_certificate_deformed_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_certificate_deformed_type_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_certificate_deformed_type_note | char(50) | YES |  | NULL |  |  |
| handicapped_status_diag_id | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_deformed_id | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_deformed_list_id | char(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_certificate_deformed_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
