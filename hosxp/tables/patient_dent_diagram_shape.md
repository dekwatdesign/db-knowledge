# `patient_dent_diagram_shape`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_dent_diagram_shape_id | int(11) | NO | PRI | 0 |  |  |
| patient_dent_diagram_id | int(11) | YES | MUL | NULL |  |  |
| shape_class_name | varchar(200) | YES |  | NULL |  |  |
| shape_xml_data | longtext | YES |  | NULL |  |  |
| relative_pos_x | double(15,3) | YES |  | NULL |  |  |
| relative_pos_y | double(15,3) | YES |  | NULL |  |  |
| teeth_width | double(15,3) | YES |  | NULL |  |  |
| teeth_height | double(15,3) | YES |  | NULL |  |  |
| shape_width | double(15,3) | YES |  | NULL |  |  |
| shape_height | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_dent_diagram_id | patient_dent_diagram_id | no | 1 |
| PRIMARY | patient_dent_diagram_shape_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
