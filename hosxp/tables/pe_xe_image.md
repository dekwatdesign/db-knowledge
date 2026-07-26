# `pe_xe_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pe_xe_image_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| image_data | longblob | YES |  | NULL |  |  |
| document_data | longblob | YES |  | NULL |  |  |
| doctor | varchar(15) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| image_note | text | YES |  | NULL |  |  |
| thumbnail_image_data | longblob | YES |  | NULL |  |  |
| engine_type | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_doctor | vn | no | 1 |
| ix_vn_doctor | doctor | no | 2 |
| ix_vn_doctor_index | doctor | no | 1 |
| ix_vn_doctor_index | vn | no | 2 |
| PRIMARY | pe_xe_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
