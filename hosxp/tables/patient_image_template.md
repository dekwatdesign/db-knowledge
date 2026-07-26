# `patient_image_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_image_template_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | UNI | NULL |  |  |
| fx1 | int(11) | YES |  | NULL |  |  |
| fx2 | int(11) | YES |  | NULL |  |  |
| fy1 | int(11) | YES |  | NULL |  |  |
| fy2 | int(11) | YES |  | NULL |  |  |
| fw | int(11) | YES |  | NULL |  |  |
| face_template | longblob | YES |  | NULL |  |  |
| angle | double(22,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | yes | 1 |
| PRIMARY | patient_image_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
