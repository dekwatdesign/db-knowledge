# `customer_face_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| customer_face_template_id | int(11) | NO | PRI | 0 |  |  |
| key_value | varchar(250) | YES |  | NULL |  |  |
| fx1 | int(11) | YES |  | NULL |  |  |
| fx2 | int(11) | YES |  | NULL |  |  |
| fy1 | int(11) | YES |  | NULL |  |  |
| fy2 | int(11) | YES |  | NULL |  |  |
| angle | double(22,3) | YES |  | NULL |  |  |
| fw | int(11) | YES |  | NULL |  |  |
| crc32 | int(11) | YES |  | NULL |  |  |
| face_template | blob | YES |  | NULL |  |  |
| pic_face | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | customer_face_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
