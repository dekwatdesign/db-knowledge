# `lab_doctor_customize_view`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_doctor_customize_view_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(20) | YES | MUL | NULL |  |  |
| lab_items_code | int(11) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| view_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_doctor_lab_items_code | doctor | yes | 1 |
| ix_doctor_lab_items_code | lab_items_code | yes | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | lab_doctor_customize_view_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
