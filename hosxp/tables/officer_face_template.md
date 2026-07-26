# `officer_face_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_face_template_id | int(11) | NO | PRI | 0 |  |  |
| key_value | varchar(25) | YES | MUL | NULL |  |  |
| fx1 | int(11) | YES |  | NULL |  |  |
| fx2 | int(11) | YES |  | NULL |  |  |
| fy1 | int(11) | YES |  | NULL |  |  |
| fy2 | int(11) | YES |  | NULL |  |  |
| angle | double(22,3) | YES |  | NULL |  |  |
| fw | int(11) | YES | MUL | NULL |  |  |
| crc32 | int(11) | YES | MUL | NULL |  |  |
| face_template | blob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fw | fw | no | 1 |
| ix_keyvalue | key_value | no | 1 |
| ix_key_value_crc32 | crc32 | yes | 1 |
| ix_key_value_crc32 | key_value | yes | 2 |
| PRIMARY | officer_face_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
