# `physic_pe_image_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_image_list_id | int(11) | NO | PRI | 0 |  |  |
| image_data | longblob | YES |  | NULL |  |  |
| thumb_image_data | longblob | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_image_list_doctor | doctor_code | no | 1 |
| ix_idx_physic_pe_image_list_pe_id | physic_pe_id | no | 1 |
| PRIMARY | physic_pe_image_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
